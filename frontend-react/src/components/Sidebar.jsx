import { useState, useEffect } from 'react'

const DEFAULT_FAQS = [
    { question: "What are common chemotherapy side effects?", category: "Side Effects" },
    { question: "How can I manage nausea during treatment?", category: "Side Effects" },
    { question: "What is chemo brain?", category: "Side Effects" },
    { question: "What foods should I eat during chemo?", category: "Lifestyle" },
    { question: "When should I call my doctor?", category: "Emergency" },
    { question: "How do I manage fatigue?", category: "Side Effects" },
    { question: "Can I exercise during treatment?", category: "Lifestyle" },
    { question: "How does chemo affect immune system?", category: "Medical Info" },
]

export default function Sidebar({ currentView, onViewChange, onAskQuestion }) {
    const [faqs, setFaqs] = useState(DEFAULT_FAQS)

    useEffect(() => {
        fetch('/api/faqs')
            .then(r => r.json())
            .then(data => { if (data.faqs?.length) setFaqs(data.faqs.slice(0, 8)) })
            .catch(() => { })
    }, [])

    const navItems = [
        { id: 'chat', icon: '💬', label: 'Chat' },
        { id: 'graph', icon: '🧬', label: 'Knowledge Graph' },
        { id: 'sources', icon: '📚', label: 'Sources' },
    ]

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <div className="logo-icon">💜</div>
                    <div>
                        <span className="logo-title">Chemo Companion</span>
                        <span className="logo-subtitle">AI Support Partner</span>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                {navItems.map(item => (
                    <button
                        key={item.id}
                        className={`nav-item ${currentView === item.id ? 'active' : ''}`}
                        onClick={() => onViewChange(item.id)}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="sidebar-section">
                <h3 className="sidebar-section-title">❓ Frequently Asked</h3>
                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <button
                            key={i}
                            className="faq-item"
                            onClick={() => {
                                onViewChange('chat')
                                onAskQuestion(faq.question)
                            }}
                        >
                            <span className="faq-category">{faq.category || 'General'}</span>
                            <div>{faq.question}</div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="sidebar-footer">
                <div className="sidebar-info">
                    <span className="info-dot"></span>
                    <span>Powered by GraphRAG + PubMedBERT</span>
                </div>
            </div>
        </aside>
    )
}
