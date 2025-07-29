import { Link } from 'react-router-dom'

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Email', href: 'mailto:contact@example.com' },
  ]

  return (
    <footer className="bg-primary-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-display font-medium tracking-tight text-primary-900 dark:text-primary-100">
              Sabeeh Qureshi
            </Link>
            <p className="mt-4 text-sm text-primary-600 dark:text-primary-400 max-w-xs">
              Business Information Systems student at NJIT, passionate about technology and innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium tracking-wide text-primary-900 dark:text-primary-100 mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-100 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-medium tracking-wide text-primary-900 dark:text-primary-100 mb-4">
              Follow
            </h3>
            <nav className="flex flex-col space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-200 dark:border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-500 dark:text-primary-500">
              © {new Date().getFullYear()} Sabeeh Qureshi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-primary-500 dark:text-primary-500 hover:text-primary-900 dark:hover:text-primary-100">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-primary-500 dark:text-primary-500 hover:text-primary-900 dark:hover:text-primary-100">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 