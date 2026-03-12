import { useState, useEffect } from 'react'
import { NAV, LESSONS } from './data.js'
import Sidebar from './components/Sidebar.jsx'
import HomePage from './components/HomePage.jsx'
import LessonPage from './components/LessonPage.jsx'
import QuizPage from './components/QuizPage.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

export default function App() {
  const [currentId, setCurrentId] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [theme, setTheme] = useState('default')

  useEffect(() => {
    if (window.innerWidth <= 820) {
      setSidebarOpen(false)
    }
    const savedTheme = localStorage.getItem('oop_theme') || 'default'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  function handleThemeChange(newTheme) {
    setTheme(newTheme)
    localStorage.setItem('oop_theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  function navigate(id) {
    setCurrentId(id)
    if (window.innerWidth <= 820) {
      setSidebarOpen(false)
    }
  }

  const lesson = LESSONS[currentId]

  return (
    <div className={`app ${sidebarOpen ? '' : 'sidebar-closed'}`}>
      <Sidebar nav={NAV} currentId={currentId} onNavigate={navigate} />
      <div className="top-controls">
        <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <ThemeToggle theme={theme} onThemeChange={handleThemeChange} />
      </div>
      <main className="main" id="mainScroll">
        <div className="page-wrap">
          {lesson && (
            lesson.type === 'home' ? (
              <HomePage lesson={lesson} onNavigate={navigate} />
            ) : lesson.type === 'quiz' ? (
              <QuizPage key={currentId} lesson={lesson} onNavigate={navigate} nav={NAV} />
            ) : (
              <LessonPage key={currentId} lesson={lesson} onNavigate={navigate} nav={NAV} />
            )
          )}
        </div>
      </main>
    </div>
  )
}
