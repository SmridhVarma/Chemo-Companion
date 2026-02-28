import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Plus, Menu, Moon, AlertTriangle, BookOpen, Loader2 } from 'lucide-react';
import imgAIRobot from "figma:asset/560d128b6eac85af1f65c399aaea62fe094353a4.png";

// ── Types ────────────────────────────────────────────
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
  isStreaming?: boolean;
}

interface ChatHistoryEntry {
  role: 'user' | 'assistant';
  content: string;
}

// ── Simple Markdown Renderer ─────────────────────────
function renderMarkdown(text: string): string {
  return text
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Headers
    .replace(/^### (.*$)/gm, '<h4 class="font-semibold text-gray-800 mt-3 mb-1">$1</h4>')
    .replace(/^## (.*$)/gm, '<h3 class="font-semibold text-gray-800 mt-4 mb-2">$1</h3>')
    // Bullet lists
    .replace(/^[-•] (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
    // Numbered lists
    .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 list-decimal">$1</li>')
    // Line breaks
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');
}

// ── Component ────────────────────────────────────────
export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamStage, setStreamStage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamStage]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = async (customQuery?: string) => {
    const query = customQuery || inputText.trim();
    if (!query || isLoading) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now(),
      text: query,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);
    setStreamStage('🧠 Analyzing your question...');

    // Build chat history for context retention
    const historyForAPI = [...chatHistory, { role: 'user' as const, content: query }];

    // Load user profile context from localStorage
    const userProfile = localStorage.getItem('chemo_companion_profile');
    let contextQuery = query;
    if (userProfile) {
      try {
        const profile = JSON.parse(userProfile);
        const ctx = [];
        if (profile.name) ctx.push(`Patient: ${profile.name}`);
        if (profile.cancerType) ctx.push(`Cancer type: ${profile.cancerType}`);
        if (profile.treatmentStage) ctx.push(`Treatment stage: ${profile.treatmentStage}`);
        if (profile.allergies?.length) ctx.push(`Allergies: ${profile.allergies.join(', ')}`);
        if (profile.conditions?.length) ctx.push(`Conditions: ${profile.conditions.join(', ')}`);
        if (profile.medications?.length) ctx.push(`Medications: ${profile.medications.join(', ')}`);
        if (ctx.length > 0) {
          contextQuery = `[Patient Context: ${ctx.join('; ')}]\n\n${query}`;
        }
      } catch { /* ignore parse errors */ }
    }

    try {
      const response = await fetch('/api/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: contextQuery,
          chat_history: historyForAPI,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response stream');

      const decoder = new TextDecoder();
      let aiText = '';
      const aiMsgId = Date.now() + 1;

      // Add placeholder AI message
      setMessages(prev => [...prev, {
        id: aiMsgId,
        text: '',
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true,
      }]);

      // Read SSE stream
      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') continue;

          try {
            const event = JSON.parse(data);

            if (event.stage && event.stage !== 'complete') {
              // Stream stage updates
              const stageMap: Record<string, string> = {
                planner: '🧠 Analyzing your question...',
                lookup: '📚 Searching knowledge base...',
                relevance: '🔍 Evaluating relevance...',
                browser: '🌐 Searching verified sources...',
                writer: '✍️ Composing response...',
                citation: '📝 Finalizing...',
                guardrail: '⚠️ Safety check...',
              };
              setStreamStage(stageMap[event.stage] || `Working: ${event.stage}`);
            }

            // Final result from backend: {stage: 'complete', result: {answer: '...', ...}}
            if (event.stage === 'complete' && event.result) {
              aiText = event.result.answer || '';
              setMessages(prev => prev.map(m =>
                m.id === aiMsgId ? { ...m, text: aiText, isStreaming: false } : m
              ));
            }

            // Direct answer (fallback for other formats)
            if (event.answer && !event.result) {
              aiText = event.answer;
              setMessages(prev => prev.map(m =>
                m.id === aiMsgId ? { ...m, text: aiText, isStreaming: false } : m
              ));
            }
          } catch { /* skip non-JSON lines */ }
        }
      }

      // Finalize AI message
      if (aiText) {
        setMessages(prev => prev.map(m =>
          m.id === aiMsgId ? { ...m, text: aiText, isStreaming: false } : m
        ));

        // Update chat history for context retention
        setChatHistory([
          ...historyForAPI,
          { role: 'assistant', content: aiText },
        ]);
      }

    } catch (error) {
      // Fallback to non-streaming endpoint
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: contextQuery,
            chat_history: historyForAPI,
          }),
        });

        const data = await response.json();
        const aiMsg: Message = {
          id: Date.now() + 1,
          text: data.answer || 'I apologize, but I was unable to process your question. Please try again.',
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        // Remove any streaming placeholder and add final message
        setMessages(prev => {
          const withoutPlaceholder = prev.filter(m => !m.isStreaming);
          return [...withoutPlaceholder, aiMsg];
        });

        setChatHistory([
          ...historyForAPI,
          { role: 'assistant', content: data.answer || '' },
        ]);

      } catch {
        setMessages(prev => {
          const withoutPlaceholder = prev.filter(m => !m.isStreaming);
          return [...withoutPlaceholder, {
            id: Date.now() + 1,
            text: "I'm sorry, I'm having trouble connecting right now. Please make sure the backend server is running and try again.",
            sender: 'ai',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          }];
        });
      }
    } finally {
      setIsLoading(false);
      setStreamStage('');
      inputRef.current?.focus();
    }
  };

  return (
    <div className="h-screen flex flex-col max-w-4xl mx-auto">
      {/* Header */}
      <div className="backdrop-blur-xl bg-white/80 border-b border-white/40 shadow-lg relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/20 to-purple-100/20" />
        <div className="relative p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">OncoCare AI Assistant</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
                <span className="text-sm text-indigo-600 font-medium">Online & Ready</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="backdrop-blur-md bg-red-50/90 hover:bg-red-100/90 px-4 py-2 rounded-xl shadow border border-red-200/60 transition-all flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-sm font-semibold text-red-600">Urgent Help</span>
            </button>
            <button className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all">
              <Moon className="w-5 h-5 text-gray-600" />
            </button>
            <button className="backdrop-blur-md bg-amber-50/90 p-3 rounded-xl shadow border border-amber-200/60 hover:bg-amber-100/90 transition-all">
              <BookOpen className="w-5 h-5 text-amber-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* AI Introduction Card (shown when no messages) */}
        {messages.length === 0 && (
          <>
            <div className="flex justify-center mb-8">
              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/60 text-center max-w-md relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden bg-white/50 p-4">
                    <img
                      src={imgAIRobot}
                      alt="AI Assistant"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Hello, I'm your Oncology Assistant
                  </h3>
                  <p className="text-sm text-gray-600">
                    I'm here to help with symptom tracking, resources, and support throughout your journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3 justify-center flex-wrap">
              <QuickActionButton label="What is chemo brain?" color="purple" onClick={() => handleSend("What is chemo brain?")} />
              <QuickActionButton label="How to manage nausea?" color="indigo" onClick={() => handleSend("How to manage nausea during chemotherapy?")} />
              <QuickActionButton label="Tips for fatigue" color="blue" onClick={() => handleSend("Tips for managing fatigue during cancer treatment")} />
            </div>
          </>
        )}

        {/* Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            <div className={`max-w-lg ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
              {message.sender === 'ai' && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 backdrop-blur-md bg-indigo-100/80 rounded-full flex items-center justify-center shadow border border-white/50">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">AI Assistant</span>
                  {message.timestamp && (
                    <span className="text-xs text-gray-400">{message.timestamp}</span>
                  )}
                </div>
              )}

              <div
                className={`
                  backdrop-blur-xl rounded-2xl p-4 shadow-lg border
                  ${message.sender === 'user'
                    ? 'bg-indigo-50/60 border-indigo-200/50 text-gray-800'
                    : 'bg-white/70 border-white/60 text-gray-700'
                  }
                `}
              >
                {message.sender === 'ai' ? (
                  <div
                    className="text-sm leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text || '') }}
                  />
                ) : (
                  <p className="text-sm leading-relaxed">{message.text}</p>
                )}
                {message.isStreaming && (
                  <div className="flex items-center gap-2 mt-2">
                    <Loader2 className="w-3 h-3 animate-spin text-indigo-500" />
                    <span className="text-xs text-indigo-500">{streamStage}</span>
                  </div>
                )}
              </div>

              {message.sender === 'user' && message.timestamp && (
                <div className="text-right mt-1">
                  <span className="text-xs text-gray-400">{message.timestamp}</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Loading indicator when waiting for AI with no streaming message yet */}
        {isLoading && messages[messages.length - 1]?.sender === 'user' && (
          <div className="flex justify-start">
            <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-4 shadow-lg border border-white/60">
              <div className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 animate-spin text-indigo-500" />
                <span className="text-sm text-indigo-600 font-medium">{streamStage}</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="backdrop-blur-xl bg-white/80 border-t border-white/40 p-6 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto flex items-center gap-3">
          <button className="backdrop-blur-md bg-white/70 p-3.5 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all hover:scale-105">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex-1 backdrop-blur-md bg-white/70 rounded-2xl shadow-lg border border-white/60 flex items-center px-4 py-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask about symptoms, treatments, or get support..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
              disabled={isLoading}
              className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 disabled:opacity-50"
            />
            <button className="p-2 hover:bg-white/60 rounded-lg transition-all">
              <Mic className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <button
            onClick={() => handleSend()}
            disabled={isLoading || !inputText.trim()}
            className="backdrop-blur-md bg-gradient-to-br from-indigo-600/90 to-purple-600/90 hover:from-indigo-600 hover:to-purple-600 p-3.5 rounded-xl shadow-xl border border-white/30 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 text-white animate-spin" />
            ) : (
              <Send className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function QuickActionButton({ label, color, onClick }: { label: string; color: string; onClick: () => void }) {
  const colorClasses: Record<string, string> = {
    purple: 'bg-purple-50/80 border-purple-200/60 text-purple-600 hover:bg-purple-100/80',
    indigo: 'bg-indigo-50/80 border-indigo-200/60 text-indigo-600 hover:bg-indigo-100/80',
    blue: 'bg-blue-50/80 border-blue-200/60 text-blue-600 hover:bg-blue-100/80',
  };

  return (
    <button
      onClick={onClick}
      className={`backdrop-blur-md ${colorClasses[color] || colorClasses.indigo} px-4 py-2 rounded-xl text-sm font-medium shadow border transition-all hover:scale-105`}
    >
      {label}
    </button>
  );
}
