import { Link } from 'react-router-dom'
import { HiArrowRight, HiDocumentText, HiCode, HiMail } from 'react-icons/hi'
import { useState, useEffect } from 'react'

export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    // Show easter egg after 5 clicks on the profile image
    if (clickCount >= 5) {
      setShowEasterEgg(true)
      setTimeout(() => setShowEasterEgg(false), 5000)
      setClickCount(0)
    }
  }, [clickCount])

  return (
    <div className="min-h-screen relative">
      {/* Subtle chaos overlay */}
      <div className="chaos-overlay" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="animate-fade-up">
            {/* Profile Image with subtle Joker hint */}
            <div 
              className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-800 relative group cursor-pointer"
              onClick={() => setClickCount(prev => prev + 1)}
            >
              <img 
                src="/images/me/me.JPG" 
                alt="Sabeeh Qureshi"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              {/* Subtle purple/green gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/0 via-transparent to-accent-600/0 group-hover:from-primary-600/20 group-hover:to-accent-600/20 transition-all duration-500" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight text-primary-900 dark:text-primary-100 mb-6 relative">
              <span className="inline-block hover:animate-glitch">Hi, I'm</span>{' '}
              <span className="inline-block hover:text-primary-600 transition-colors duration-300">Sabeeh Qureshi</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-600 dark:text-primary-400 mb-4">
              Business Information Systems Student at NJIT
            </p>
            <p className="text-lg text-primary-600 dark:text-primary-400 leading-relaxed mb-12 max-w-2xl mx-auto">
              Passionate about leveraging technology to solve business challenges and create 
              <span className="inline-block mx-2 hover:text-accent-600 hover:animate-tilt transition-all duration-300">innovative</span>
              solutions.
            </p>
            
            {/* Quick Links with subtle animations */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects" 
                className="inline-flex items-center px-6 py-3 bg-primary-900 dark:bg-primary-100 text-white dark:text-primary-900 rounded-sm hover:bg-primary-800 dark:hover:bg-primary-200 transition-all duration-200 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <HiCode className="mr-2 w-5 h-5" />
                  View Projects
                  <HiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              <Link 
                to="/experience" 
                className="inline-flex items-center px-6 py-3 border border-primary-900 dark:border-primary-100 text-primary-900 dark:text-primary-100 rounded-sm hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-200 hover:border-accent-600 dark:hover:border-accent-400"
              >
                <HiDocumentText className="mr-2 w-5 h-5" />
                View Resume
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating card element */}
        <div className="absolute top-20 right-10 w-16 h-24 opacity-5 animate-float hidden lg:block">
          <img src="/images/joker/joker6.jpg" alt="" className="w-full h-full object-cover rounded" />
        </div>
      </section>

      {/* Quick Info Section with joker-card effect */}
      <section className="py-20 px-6 lg:px-8 bg-primary-50 dark:bg-primary-900 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center joker-card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 rounded-sm mx-auto mb-4 flex items-center justify-center group hover:from-primary-200 hover:to-accent-100 dark:hover:from-primary-700 dark:hover:to-accent-900 transition-all duration-300">
                <HiCode className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 dark:text-primary-100 mb-2">
                Technical Skills
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                Proficient in modern web technologies and business systems
              </p>
            </div>
            <div className="text-center joker-card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 rounded-sm mx-auto mb-4 flex items-center justify-center group hover:from-primary-200 hover:to-accent-100 dark:hover:from-primary-700 dark:hover:to-accent-900 transition-all duration-300">
                <HiDocumentText className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 dark:text-primary-100 mb-2">
                Academic Excellence
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                Pursuing BIS degree with focus on innovation and technology
              </p>
            </div>
            <div className="text-center joker-card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 rounded-sm mx-auto mb-4 flex items-center justify-center group hover:from-primary-200 hover:to-accent-100 dark:hover:from-primary-700 dark:hover:to-accent-900 transition-all duration-300">
                <HiMail className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 dark:text-primary-100 mb-2">
                Let's Connect
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                Open to opportunities and collaborations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-primary-900 dark:text-primary-100 mb-6">
            Ready to <span className="inline-block hover:text-accent-600 hover:animate-tilt transition-all duration-300">work together</span>?
          </h2>
          <p className="text-lg text-primary-600 dark:text-primary-400 mb-8">
            I'm always interested in new opportunities and projects.
          </p>
          <Link to="/contact" className="btn-primary chaos-hover">
            Get in touch
          </Link>
        </div>
      </section>
      
      {/* Hidden Easter Egg */}
      {showEasterEgg && (
        <div className="joker-easter-egg" style={{ opacity: 1 }}>
          <img src="/images/joker/Joker1.jpg" alt="Why so serious?" title="Why so serious?" />
        </div>
      )}
    </div>
  )
} 