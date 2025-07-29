import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoHover, setLogoHover] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActivePage = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-primary-950/80 backdrop-blur-md border-b border-primary-100/10 dark:border-primary-800/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with subtle transformation */}
          <Link 
            to="/" 
            className="relative text-2xl font-display font-medium tracking-tight text-primary-900 dark:text-primary-100 transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <span className={`transition-all duration-300 ${logoHover ? 'text-primary-600' : ''}`}>S</span>
            <span className={`transition-all duration-300 ${logoHover ? 'text-accent-600' : ''}`}>Q</span>
            {logoHover && (
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-xs opacity-50 animate-fade-in">
                🃏
              </span>
            )}
          </Link>

          {/* Desktop Navigation with enhanced effects */}
          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActivePage(item.href) ? 'nav-link-active' : 'nav-link'
                } hover:animate-float`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button with rotation effect */}
          <button
            className="md:hidden p-2 text-primary-900 dark:text-primary-100 transition-transform duration-300 hover:rotate-180"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation with slide effect */}
        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-primary-200 dark:border-primary-800 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`py-2 ${
                    isActivePage(item.href)
                      ? 'text-primary-900 dark:text-primary-100 font-medium'
                      : 'text-primary-600 dark:text-primary-400'
                  } transition-all hover:translate-x-2`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 