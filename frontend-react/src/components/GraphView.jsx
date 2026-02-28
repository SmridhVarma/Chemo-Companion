import { useState, useEffect, useRef } from 'react'

const TYPE_COLORS = {
    MEDICATION: '#7c3aed',
    SIDE_EFFECT: '#ef4444',
    TREATMENT: '#06b6d4',
    RECOMMENDATION: '#10b981',
    BODY_SYSTEM: '#f59e0b',
    CONDITION: '#ec4899',
    UNKNOWN: '#64748b',
}

const LEGEND = [
    { label: 'Medication', color: '#7c3aed' },
    { label: 'Side Effect', color: '#ef4444' },
    { label: 'Treatment', color: '#06b6d4' },
    { label: 'Recommendation', color: '#10b981' },
    { label: 'Body System', color: '#f59e0b' },
    { label: 'Condition', color: '#ec4899' },
]

export default function GraphView() {
    const [graphData, setGraphData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [hoveredNode, setHoveredNode] = useState(null)
    const canvasRef = useRef(null)
    const nodesRef = useRef([])

    useEffect(() => {
        fetch('/api/graph')
            .then(r => r.json())
            .then(data => {
                setGraphData(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (!graphData?.nodes?.length || !canvasRef.current) return
        renderGraph()
    }, [graphData])

    const renderGraph = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const container = canvas.parentElement
        const rect = container.getBoundingClientRect()

        canvas.width = rect.width * window.devicePixelRatio
        canvas.height = rect.height * window.devicePixelRatio
        canvas.style.width = rect.width + 'px'
        canvas.style.height = rect.height + 'px'
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

        const { nodes: rawNodes, links } = graphData
        const nodes = rawNodes.map(n => ({
            ...n,
            x: rect.width / 2 + (Math.random() - 0.5) * rect.width * 0.6,
            y: rect.height / 2 + (Math.random() - 0.5) * rect.height * 0.6,
            vx: 0, vy: 0,
            radius: Math.min(8 + (n.frequency || 1) * 2, 20),
        }))

        const nodeMap = {}
        nodes.forEach(n => nodeMap[n.id] = n)
        const validLinks = links.filter(l => nodeMap[l.source] && nodeMap[l.target])

        // Force simulation
        for (let iter = 0; iter < 120; iter++) {
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[j].x - nodes[i].x
                    const dy = nodes[j].y - nodes[i].y
                    const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 10)
                    const force = 500 / (dist * dist)
                    nodes[i].vx -= dx / dist * force
                    nodes[i].vy -= dy / dist * force
                    nodes[j].vx += dx / dist * force
                    nodes[j].vy += dy / dist * force
                }
            }
            for (const link of validLinks) {
                const s = nodeMap[link.source], t = nodeMap[link.target]
                if (!s || !t) continue
                const dx = t.x - s.x, dy = t.y - s.y
                const dist = Math.sqrt(dx * dx + dy * dy) || 1
                const force = (dist - 80) * 0.01
                s.vx += dx / dist * force; s.vy += dy / dist * force
                t.vx -= dx / dist * force; t.vy -= dy / dist * force
            }
            for (const n of nodes) {
                n.vx += (rect.width / 2 - n.x) * 0.001
                n.vy += (rect.height / 2 - n.y) * 0.001
                n.vx *= 0.85; n.vy *= 0.85
                n.x += n.vx; n.y += n.vy
                n.x = Math.max(30, Math.min(rect.width - 30, n.x))
                n.y = Math.max(30, Math.min(rect.height - 30, n.y))
            }
        }

        nodesRef.current = nodes

        // Draw
        ctx.clearRect(0, 0, rect.width, rect.height)

        // Edges
        ctx.strokeStyle = 'rgba(255,255,255,0.06)'
        ctx.lineWidth = 1
        for (const l of validLinks) {
            const s = nodeMap[l.source], t = nodeMap[l.target]
            if (!s || !t) continue
            ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(t.x, t.y); ctx.stroke()
        }

        // Nodes
        for (const n of nodes) {
            const color = TYPE_COLORS[n.type] || TYPE_COLORS.UNKNOWN
            ctx.beginPath(); ctx.arc(n.x, n.y, n.radius + 4, 0, Math.PI * 2)
            ctx.fillStyle = color + '20'; ctx.fill()
            ctx.beginPath(); ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)
            ctx.fillStyle = color; ctx.fill()

            if (n.frequency > 1 || nodes.length < 60) {
                ctx.fillStyle = '#e2e8f0'
                ctx.font = '10px Inter, sans-serif'
                ctx.textAlign = 'center'
                const label = n.label.length > 20 ? n.label.slice(0, 18) + '…' : n.label
                ctx.fillText(label, n.x, n.y + n.radius + 14)
            }
        }
    }

    const handleMouseMove = (e) => {
        if (!nodesRef.current.length) return
        const canvas = canvasRef.current
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const hovered = nodesRef.current.find(n => {
            const dx = n.x - x, dy = n.y - y
            return Math.sqrt(dx * dx + dy * dy) < n.radius + 5
        })
        setHoveredNode(hovered || null)
    }

    if (loading) return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <header className="view-header"><h1>🧬 Knowledge Graph</h1></header>
            <div className="graph-placeholder"><div className="graph-loading">
                <div className="pulse-ring"></div><span>Loading knowledge graph...</span>
            </div></div>
        </div>
    )

    if (error || !graphData?.nodes?.length) return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <header className="view-header">
                <h1>🧬 Knowledge Graph</h1>
                <p>Interactive visualization of medical knowledge</p>
            </header>
            <div className="graph-placeholder"><div className="graph-loading">
                <span style={{ fontSize: '2rem' }}>🧬</span>
                <span>{error || 'Knowledge graph not yet built.'}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Run the data pipeline first.</span>
            </div></div>
        </div>
    )

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <header className="view-header">
                <h1>🧬 Knowledge Graph</h1>
                <p>{graphData.nodes.length} entities • {graphData.links.length} relationships extracted from medical documents</p>
            </header>

            <div className="graph-container" style={{ flex: 1, position: 'relative' }}>
                <canvas ref={canvasRef} onMouseMove={handleMouseMove} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
                {hoveredNode && (
                    <div style={{
                        position: 'absolute', top: 10, right: 10,
                        background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-md)', padding: '12px 16px',
                        fontSize: '0.85rem', maxWidth: 250,
                    }}>
                        <div style={{ fontWeight: 600, color: TYPE_COLORS[hoveredNode.type] || '#fff', marginBottom: 4 }}>
                            {hoveredNode.label}
                        </div>
                        <div style={{ color: 'var(--text-muted)' }}>
                            Type: {hoveredNode.type}<br />
                            Frequency: {hoveredNode.frequency}
                        </div>
                    </div>
                )}
            </div>

            <div className="graph-legend">
                {LEGEND.map(l => (
                    <div key={l.label} className="legend-item">
                        <span className="legend-dot" style={{ background: l.color }}></span>
                        {l.label}
                    </div>
                ))}
            </div>
        </div>
    )
}
