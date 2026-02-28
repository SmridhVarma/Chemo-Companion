/**
 * Chemo Companion — Frontend Application
 * Chat UI with SSE streaming, knowledge graph visualization, and FAQ system
 */

const API_BASE = window.location.origin;
let chatHistory = [];
let currentView = 'chat';

// ── DOM Elements ──────────────────────────────
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const suggestionsBar = document.getElementById('suggestionsBar');
const agentTrace = document.getElementById('agentTrace');
const traceStep = document.getElementById('traceStep');
const agentStatus = document.getElementById('agentStatus');
const faqList = document.getElementById('faqList');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// ── Initialization ────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    loadFAQs();
    loadSuggestions();
    setupNavigation();
    setupEventListeners();
    autoResizeTextarea();
});

// ── Event Listeners ───────────────────────────
function setupEventListeners() {
    chatForm.addEventListener('submit', handleSubmit);

    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            chatForm.dispatchEvent(new Event('submit'));
        }
    });

    chatInput.addEventListener('input', autoResizeTextarea);

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

function autoResizeTextarea() {
    chatInput.style.height = 'auto';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
}

// ── Navigation ────────────────────────────────
function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            switchView(view);
        });
    });
}

function switchView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    document.getElementById(viewName + 'View').classList.add('active');
    document.querySelector(`[data-view="${viewName}"]`).classList.add('active');
    currentView = viewName;

    if (viewName === 'graph') loadKnowledgeGraph();
    if (viewName === 'sources') loadSources();
}

// ── Chat Handling ─────────────────────────────
async function handleSubmit(e) {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    // Add user message
    addMessage('user', query);
    chatInput.value = '';
    autoResizeTextarea();
    setLoading(true);

    // Add to history
    chatHistory.push({ role: 'user', content: query });

    try {
        // Use SSE streaming
        await streamChat(query);
    } catch (err) {
        console.error('Chat error:', err);
        addMessage('assistant', '❌ Sorry, something went wrong. Please make sure the backend server is running on port 8000.\n\nError: ' + err.message);
    }

    setLoading(false);
}

async function streamChat(query) {
    showAgentTrace(true);
    updateTraceStep('🧠', 'Analyzing your question...');

    try {
        const response = await fetch(`${API_BASE}/api/chat/stream`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: query,
                chat_history: chatHistory.slice(-6),
            }),
        });

        if (!response.ok) {
            // Fallback to non-streaming
            return await regularChat(query);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let finalResult = null;

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const text = decoder.decode(value, { stream: true });
            const lines = text.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    try {
                        const data = JSON.parse(line.slice(6));

                        if (data.stage === 'complete') {
                            finalResult = data.result;
                        } else {
                            updateTraceStep(
                                data.message?.charAt(0) || '⚡',
                                data.message || `Running ${data.stage}...`
                            );
                        }
                    } catch (e) {
                        // skip malformed data
                    }
                }
            }
        }

        showAgentTrace(false);

        if (finalResult) {
            addMessage('assistant', finalResult.answer);
            chatHistory.push({ role: 'assistant', content: finalResult.raw_answer || finalResult.answer });

            // Update suggestions
            if (finalResult.suggestions) {
                renderSuggestions(finalResult.suggestions);
            }
        }
    } catch (err) {
        showAgentTrace(false);
        return await regularChat(query);
    }
}

async function regularChat(query) {
    try {
        const response = await fetch(`${API_BASE}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: query,
                chat_history: chatHistory.slice(-6),
            }),
        });

        const data = await response.json();
        showAgentTrace(false);
        addMessage('assistant', data.answer);
        chatHistory.push({ role: 'assistant', content: data.raw_answer || data.answer });

        if (data.suggestions) {
            renderSuggestions(data.suggestions);
        }
    } catch (err) {
        showAgentTrace(false);
        throw err;
    }
}

// ── Message Rendering ─────────────────────────
function addMessage(role, text) {
    const div = document.createElement('div');
    div.className = `message ${role}`;

    const avatar = role === 'user' ? '👤' : '💜';

    div.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <div class="message-text">${formatMarkdown(text)}</div>
        </div>
    `;

    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function formatMarkdown(text) {
    if (!text) return '';

    return text
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Headers
        .replace(/^### (.+)$/gm, '<h4>$1</h4>')
        .replace(/^## (.+)$/gm, '<h3>$1</h3>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
        // Lists
        .replace(/^[-•] (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
        // Numbered lists
        .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
        // Horizontal rules
        .replace(/^---$/gm, '<hr>')
        // Line breaks
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        // Wrap in paragraph
        .replace(/^(.+)/, '<p>$1</p>');
}

// ── Agent Trace ───────────────────────────────
function showAgentTrace(show) {
    agentTrace.style.display = show ? 'block' : 'none';
    updateAgentStatusBadge(show);
}

function updateTraceStep(icon, text) {
    const traceText = traceStep.querySelector('.trace-text');
    traceText.textContent = text;
}

function updateAgentStatusBadge(processing) {
    if (processing) {
        agentStatus.innerHTML = '<span class="status-dot processing"></span>Processing...';
    } else {
        agentStatus.innerHTML = '<span class="status-dot online"></span>Ready to help';
    }
}

function setLoading(loading) {
    sendBtn.disabled = loading;
    chatInput.disabled = loading;
}

// ── Suggestions ───────────────────────────────
async function loadSuggestions() {
    try {
        const resp = await fetch(`${API_BASE}/api/suggestions`);
        const data = await resp.json();
        renderSuggestions(data.suggestions || []);
    } catch {
        renderSuggestions([
            "What are common chemo side effects?",
            "How do I manage nausea?",
            "What is chemo brain?",
            "When should I call my doctor?",
            "Can I exercise during treatment?",
        ]);
    }
}

function renderSuggestions(suggestions) {
    const scroll = suggestionsBar.querySelector('.suggestions-scroll');
    scroll.innerHTML = suggestions.map(q => `
        <button class="suggestion-pill" onclick="askQuestion('${q.replace(/'/g, "\\'")}')">
            <span class="pill-icon">💡</span>
            ${q}
        </button>
    `).join('');
}

window.askQuestion = function (question) {
    chatInput.value = question;
    chatForm.dispatchEvent(new Event('submit'));
};

// ── FAQs ──────────────────────────────────────
async function loadFAQs() {
    try {
        const resp = await fetch(`${API_BASE}/api/faqs`);
        const data = await resp.json();
        renderFAQs(data.faqs || []);
    } catch {
        // Use defaults
        renderFAQs([
            { question: "Common chemo side effects?", category: "Side Effects" },
            { question: "Managing nausea during treatment?", category: "Side Effects" },
            { question: "What is chemo brain?", category: "Side Effects" },
            { question: "Foods to eat during chemo?", category: "Lifestyle" },
            { question: "When to call the doctor?", category: "Emergency" },
        ]);
    }
}

function renderFAQs(faqs) {
    faqList.innerHTML = faqs.slice(0, 8).map(faq => `
        <button class="faq-item" onclick="askQuestion('${(faq.question || '').replace(/'/g, "\\'")}')">
            <span class="faq-category">${faq.category || 'General'}</span>
            <div>${faq.question}</div>
        </button>
    `).join('');
}

// ── Knowledge Graph ───────────────────────────
async function loadKnowledgeGraph() {
    const container = document.getElementById('graphContainer');
    const canvas = document.getElementById('graphCanvas');
    const placeholder = container.querySelector('.graph-placeholder');

    try {
        const resp = await fetch(`${API_BASE}/api/graph`);
        const data = await resp.json();

        if (!data.nodes || data.nodes.length === 0) {
            placeholder.innerHTML = `
                <div class="graph-loading">
                    <span style="font-size: 2rem;">🧬</span>
                    <span>Knowledge graph not yet built.</span>
                    <span style="font-size: 0.8rem; color: var(--text-muted);">Run the extraction pipeline first.</span>
                </div>
            `;
            return;
        }

        placeholder.style.display = 'none';
        renderGraph(canvas, data);
    } catch (err) {
        placeholder.innerHTML = `
            <div class="graph-loading">
                <span style="font-size: 2rem;">⚠️</span>
                <span>Could not load knowledge graph.</span>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${err.message}</span>
            </div>
        `;
    }
}

function renderGraph(canvas, data) {
    const ctx = canvas.getContext('2d');
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const typeColors = {
        'MEDICATION': '#7c3aed',
        'SIDE_EFFECT': '#ef4444',
        'TREATMENT': '#06b6d4',
        'RECOMMENDATION': '#10b981',
        'BODY_SYSTEM': '#f59e0b',
        'CONDITION': '#ec4899',
        'UNKNOWN': '#64748b',
    };

    // Simple force-directed layout
    const nodes = data.nodes.map((n, i) => ({
        ...n,
        x: rect.width / 2 + (Math.random() - 0.5) * rect.width * 0.6,
        y: rect.height / 2 + (Math.random() - 0.5) * rect.height * 0.6,
        vx: 0, vy: 0,
        radius: Math.min(8 + (n.frequency || 1) * 2, 20),
    }));

    const nodeMap = {};
    nodes.forEach(n => nodeMap[n.id] = n);

    const links = data.links.filter(l => nodeMap[l.source] && nodeMap[l.target]);

    // Run simulation
    for (let iter = 0; iter < 100; iter++) {
        // Repulsion
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[j].x - nodes[i].x;
                const dy = nodes[j].y - nodes[i].y;
                const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 10);
                const force = 500 / (dist * dist);
                nodes[i].vx -= dx / dist * force;
                nodes[i].vy -= dy / dist * force;
                nodes[j].vx += dx / dist * force;
                nodes[j].vy += dy / dist * force;
            }
        }

        // Attraction (links)
        for (const link of links) {
            const src = nodeMap[link.source];
            const tgt = nodeMap[link.target];
            if (!src || !tgt) continue;
            const dx = tgt.x - src.x;
            const dy = tgt.y - src.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = (dist - 80) * 0.01;
            src.vx += dx / dist * force;
            src.vy += dy / dist * force;
            tgt.vx -= dx / dist * force;
            tgt.vy -= dy / dist * force;
        }

        // Center gravity
        for (const node of nodes) {
            node.vx += (rect.width / 2 - node.x) * 0.001;
            node.vy += (rect.height / 2 - node.y) * 0.001;
        }

        // Apply velocity with damping
        for (const node of nodes) {
            node.vx *= 0.85;
            node.vy *= 0.85;
            node.x += node.vx;
            node.y += node.vy;
            node.x = Math.max(30, Math.min(rect.width - 30, node.x));
            node.y = Math.max(30, Math.min(rect.height - 30, node.y));
        }
    }

    // Draw
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Draw edges
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    for (const link of links) {
        const src = nodeMap[link.source];
        const tgt = nodeMap[link.target];
        if (!src || !tgt) continue;
        ctx.beginPath();
        ctx.moveTo(src.x, src.y);
        ctx.lineTo(tgt.x, tgt.y);
        ctx.stroke();
    }

    // Draw nodes
    for (const node of nodes) {
        const color = typeColors[node.type] || typeColors['UNKNOWN'];

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
        ctx.fillStyle = color + '20';
        ctx.fill();

        // Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Label (only for notable nodes)
        if (node.frequency > 1 || nodes.length < 50) {
            ctx.fillStyle = '#e2e8f0';
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(
                node.label.length > 20 ? node.label.slice(0, 18) + '…' : node.label,
                node.x, node.y + node.radius + 14
            );
        }
    }
}

// ── Sources ───────────────────────────────────
async function loadSources() {
    const sourcesList = document.getElementById('sourcesList');
    try {
        const resp = await fetch(`${API_BASE}/api/sources`);
        const data = await resp.json();

        sourcesList.innerHTML = data.sources.map(src => `
            <div class="source-card">
                <div class="source-card-icon">📄</div>
                <div class="source-card-name">${src.name}</div>
                <div class="source-card-size">${src.size_kb} KB</div>
            </div>
        `).join('');
    } catch (err) {
        sourcesList.innerHTML = `
            <div class="source-card">
                <div class="source-card-icon">⚠️</div>
                <div class="source-card-name">Could not load sources</div>
                <div class="source-card-size">${err.message}</div>
            </div>
        `;
    }
}
