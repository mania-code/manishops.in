import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useState } from 'react'

function Home() {
    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
    }

    // Effect to sync state with DOM class on mount/updates if needed
    // But given App.jsx structure, we might need to lift state up or keep it here.
    // The original App.jsx handled the dark mode class on the body/html.
    // Let's keep logic here but we might need to move the class toggling to a Layout or Context if it affects other pages.
    // For now, let's assume the dark mode toggle is part of the layout.

    return (
        <>
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="network-bg absolute inset-0 opacity-50"></div>
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Navigation */}
            <Header />

            {/* Main Content */}
            <main className="relative z-10 w-full">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </>
    )
}

export default Home
