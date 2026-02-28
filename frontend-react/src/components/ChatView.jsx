import { useState, useEffect, useRef, useCallback } from 'react'

const AGENT_STAGES = {
    planner: '🧠 Analyzing your question...',
    lookup: '📚 Searching knowledge base...',
    relevance: '⚖️ Evaluating information quality...',
    browser: '🌐 Searching verified medical sources...',
    writer: '✍️ Composing your answer...',
    citation: '📋 Adding citations...',
}

const DEFAULT_SUGGESTIONS = [
    "What are common chemo side effects?",
    "How do I manage nausea?",
    "What is chemo brain?",
    "When should I call my doctor?",
    "Can I exercise during treatment?",
]

function formatMarkdown(text) {
    if (!text) return ''
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
        .replace(/^### (.+)$/gm, '<h4>$1</h4>')
        .replace(/^## (.+)$/gm, '<h3>$1</h3>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
        .replace(/^[-•] (.+)$/gm, '<li>$1</li>')
        .replace(/^---$/gm, '<hr>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
}

export default function ChatView({ chatHistory, setChatHistory }) {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [agentStages, setAgentStages] = useState([])
    const [suggestions, setSuggestions] = useState(DEFAULT_SUGGESTIONS)
    const messagesEndRef = useRef(null)
    const textareaRef = useRef(null)

    // Load suggestions on mount
    useEffect(() => {
        fetch('/api/suggestions')
            .then(r => r.json())
            .then(data => { if (data.suggestions?.length) setSuggestions(data.suggestions) })
            .catch(() => { })
    }, [])

    // Handle FAQ trigger from sidebar
    useEffect(() => {
        const lastEntry = chatHistory[chatHistory.length - 1]
        if (lastEntry?.role === 'trigger') {
            setInput(lastEntry.content)
            // Auto-submit after a tick
            setTimeout(() => {
                handleSubmit(null, lastEntry.content)
            }, 100)
        }
    }, [chatHistory])

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, agentStages])

    const handleSubmit = useCallback(async (e, overrideQuery) => {
        if (e) e.preventDefault()
        const query = overrideQuery || input.trim()
        if (!query || isLoading) return

        setInput('')
        setIsLoading(true)
        setMessages(prev => [...prev, { role: 'user', content: query }])
        setAgentStages([])

        try {
            const response = await fetch('/api/chat/stream', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query, chat_history: messages.slice(-6) }),
            })

            if (!response.ok) {
                // Fallback to non-streaming
                await regularChat(query)
                return
            }

            const reader = response.body.getReader()
            const decoder = new TextDecoder()
            let finalResult = null

            while (true) {
                const { done, value } = await reader.read()
                if (done) break

                const text = decoder.decode(value, { stream: true })
                const lines = text.split('\n')

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        try {
                            const data = JSON.parse(line.slice(6))
                            if (data.stage === 'complete') {
                                finalResult = data.result
                            } else if (data.stage && AGENT_STAGES[data.stage]) {
                                setAgentStages(prev => {
                                    const exists = prev.find(s => s.stage === data.stage)
                                    if (exists) return prev
                                    return [...prev.map(s => ({ ...s, done: true })), { stage: data.stage, message: data.message || AGENT_STAGES[data.stage], done: false }]
                                })
                            }
                        } catch (e) { /* skip */ }
                    }
                }
            }

            setAgentStages([])
            if (finalResult) {
                setMessages(prev => [...prev, { role: 'assistant', content: finalResult.answer }])
                if (finalResult.suggestions?.length) setSuggestions(finalResult.suggestions)
            }
        } catch (err) {
            try {
                await regularChat(query)
            } catch (e2) {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: '❌ Could not reach the backend. Please make sure the FastAPI server is running on port 8000.\n\n`python -m uvicorn app:app --port 8000`'
                }])
            }
        }

        setIsLoading(false)
        setAgentStages([])
    }, [input, isLoading, messages])

    const regularChat = async (query) => {
        const resp = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, chat_history: messages.slice(-6) }),
        })
        const data = await resp.json()
        setMessages(prev => [...prev, { role: 'assistant', content: data.answer }])
        if (data.suggestions?.length) setSuggestions(data.suggestions)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Header */}
            <header className="chat-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <h1>Chemo Companion</h1>
                    <span className="header-badge">
                        <span className={`status-dot ${isLoading ? 'processing' : 'online'}`}></span>
                        {isLoading ? 'Processing...' : 'Ready to help'}
                    </span>
                </div>
            </header>

            {/* Messages */}
            <div className="chat-messages">
                {/* Welcome */}
                <div className="message assistant welcome-message">
                    <div className="message-avatar">💜</div>
                    <div className="message-content">
                        <div className="message-text">
                            <h2>Welcome to Chemo Companion 💜</h2>
                            <p>I'm here to support you through your treatment journey. Ask me anything about chemotherapy, side effects, medications, or how to manage symptoms.</p>
                            <p className="subtle-text">All my answers are grounded in verified medical sources and cited for your peace of mind.</p>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                {messages.map((msg, i) => (
                    <div key={i} className={`message ${msg.role}`}>
                        <div className="message-avatar">{msg.role === 'user' ? '👤' : '💜'}</div>
                        <div className="message-content">
                            <div
                                className="message-text"
                                dangerouslySetInnerHTML={{ __html: formatMarkdown(msg.content) }}
                            />
                        </div>
                    </div>
                ))}

                {/* Agent Trace */}
                {agentStages.length > 0 && (
                    <div className="agent-trace">
                        <div className="trace-steps">
                            {agentStages.map((stage, i) => (
                                <div key={i} className={`trace-step ${stage.done ? 'done' : 'active'}`}>
                                    {stage.done ? (
                                        <span className="trace-checkmark">✓</span>
                                    ) : (
                                        <span className="trace-spinner"></span>
                                    )}
                                    <span>{stage.message}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="suggestions-bar">
                <div className="suggestions-scroll">
                    {suggestions.map((q, i) => (
                        <button
                            key={i}
                            className="suggestion-pill"
                            onClick={() => handleSubmit(null, q)}
                            disabled={isLoading}
                        >
                            💡 {q}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input */}
            <div className="chat-input-container">
                <form className="chat-input-form" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask me anything about your treatment..."
                            rows={1}
                            disabled={isLoading}
                        />
                        <button type="submit" className="send-btn" disabled={isLoading || !input.trim()}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                            </svg>
                        </button>
                    </div>
                    <p className="input-disclaimer">
                        Chemo Companion provides information from verified medical sources. Always consult your oncologist for personalized advice.
                    </p>
                </form>
            </div>
        </div>
    )
}
