import { ReactNode, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [showJokerMode, setShowJokerMode] = useState(false)

  useEffect(() => {
    // Easter egg: Type "JOKER" to activate special mode
    let keySequence: string[] = []
    
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase()
      const jokerSequence = ['J', 'O', 'K', 'E', 'R']
      
      keySequence = [...keySequence, key].slice(-5)
      
      if (JSON.stringify(keySequence) === JSON.stringify(jokerSequence)) {
        setShowJokerMode(true)
        setTimeout(() => setShowJokerMode(false), 10000) // Show for 10 seconds
        keySequence = []
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [])

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Joker Mode Easter Egg */}
      {showJokerMode && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Floating Joker cards */}
          <div className="absolute top-10 left-10 w-20 h-28 animate-float opacity-20">
            <img src="/images/joker/Joker1.jpg" alt="" className="w-full h-full object-cover rounded shadow-2xl" />
          </div>
          <div className="absolute bottom-20 right-20 w-16 h-24 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            <img src="/images/joker/joker2.jpg" alt="" className="w-full h-full object-cover rounded shadow-2xl" />
          </div>
          <div className="absolute top-1/2 left-1/3 w-12 h-18 animate-float opacity-15" style={{ animationDelay: '4s' }}>
            <img src="/images/joker/joker3.jpg" alt="" className="w-full h-full object-cover rounded shadow-2xl" />
          </div>
          
          {/* "Why so serious?" text */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-2xl font-chaos text-primary-600 opacity-30 animate-glitch">
            Why so serious?
          </div>
        </div>
      )}
    </div>
  )
} 