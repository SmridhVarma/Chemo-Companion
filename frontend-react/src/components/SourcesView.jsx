import { useState, useEffect } from 'react'

export default function SourcesView() {
    const [sources, setSources] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/sources')
            .then(r => r.json())
            .then(data => {
                setSources(data.sources || [])
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <header className="view-header">
                <h1>📚 Source Documents</h1>
                <p>{sources.length} medical documents powering our knowledge base</p>
            </header>

            <div className="sources-grid">
                {loading ? (
                    <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>
                        Loading sources...
                    </div>
                ) : sources.length === 0 ? (
                    <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>
                        No sources found. Add PDFs to the RAG_Data folder.
                    </div>
                ) : sources.map((src, i) => (
                    <div key={i} className="source-card">
                        <div className="source-card-icon">📄</div>
                        <div className="source-card-name">{src.name}</div>
                        <div className="source-card-size">{src.size_kb} KB</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
