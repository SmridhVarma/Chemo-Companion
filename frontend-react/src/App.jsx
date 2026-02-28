import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import ChatView from './components/ChatView'
import GraphView from './components/GraphView'
import SourcesView from './components/SourcesView'

function App() {
  const [currentView, setCurrentView] = useState('chat')
  const [chatHistory, setChatHistory] = useState([])

  const handleAskQuestion = (question) => {
    // This will be called from Sidebar FAQs to populate chat
    setChatHistory(prev => [...prev, { role: 'trigger', content: question }])
  }

  return (
    <div className="app-container">
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        onAskQuestion={handleAskQuestion}
      />
      <main className="main-content">
        {currentView === 'chat' && (
          <ChatView
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
          />
        )}
        {currentView === 'graph' && <GraphView />}
        {currentView === 'sources' && <SourcesView />}
      </main>
    </div>
  )
}

export default App
