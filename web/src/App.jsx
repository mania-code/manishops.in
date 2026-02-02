import { useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const PipelineGenerator = lazy(() => import('./pages/PipelineGenerator'))
const K8sAutoScaler = lazy(() => import('./pages/K8sAutoScaler'))
const CostAnalyzer = lazy(() => import('./pages/CostAnalyzer'))
const LogAggregator = lazy(() => import('./pages/LogAggregator'))

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-600 dark:text-slate-400 font-medium">Loading...</p>
      </div>
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 min-h-screen">

        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pipeline-generator" element={<PipelineGenerator />} />
            <Route path="/k8s-auto-scaler" element={<K8sAutoScaler />} />
            <Route path="/cost-analyzer" element={<CostAnalyzer />} />
            <Route path="/log-aggregator" element={<LogAggregator />} />
          </Routes>
        </Suspense>

        {/* Dark mode toggle button - Global */}
        <button
          onClick={toggleDarkMode}
          className="fixed bottom-8 right-8 w-16 h-16 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 z-50 hover:scale-110 transition-transform cursor-pointer"
        >
          {darkMode ? (
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default App
