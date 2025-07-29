import { Link } from 'react-router-dom'
import { HiArrowRight, HiDocumentText, HiCode, HiMail } from 'react-icons/hi'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="animate-fade-up">
            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-800">
              <img 
                src="/images/me/me.JPG" 
                alt="Sabeeh Qureshi"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight text-primary-900 dark:text-primary-100 mb-6">
              Hi, I'm Sabeeh Qureshi
            </h1>
            <p className="text-xl lg:text-2xl text-primary-600 dark:text-primary-400 mb-4">
              Business Information Systems Student at NJIT
            </p>
            <p className="text-lg text-primary-600 dark:text-primary-400 leading-relaxed mb-12 max-w-2xl mx-auto">
              Passionate about leveraging technology to solve business challenges and create innovative solutions.
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects" 
                className="inline-flex items-center px-6 py-3 bg-primary-900 dark:bg-primary-100 text-white dark:text-primary-900 rounded-sm hover:bg-primary-800 dark:hover:bg-primary-200 transition-colors duration-200 group"
              >
                <HiCode className="mr-2 w-5 h-5" />
                View Projects
                <HiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/experience" 
                className="inline-flex items-center px-6 py-3 border border-primary-900 dark:border-primary-100 text-primary-900 dark:text-primary-100 rounded-sm hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-200"
              >
                <HiDocumentText className="mr-2 w-5 h-5" />
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 px-6 lg:px-8 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-sm mx-auto mb-4 flex items-center justify-center">
                <HiCode className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 dark:text-primary-100 mb-2">
                Technical Skills
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                Proficient in modern web technologies and business systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-sm mx-auto mb-4 flex items-center justify-center">
                <HiDocumentText className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-medium text-primary-900 dark:text-primary-100 mb-2">
                Academic Excellence
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                Pursuing BIS degree with focus on innovation and technology
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-sm mx-auto mb-4 flex items-center justify-center">
                <HiMail className="w-8 h-8 text-primary-600 dark:text-primary-400" />
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
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-primary-900 dark:text-primary-100 mb-6">
            Ready to work together?
          </h2>
          <p className="text-lg text-primary-600 dark:text-primary-400 mb-8">
            I'm always interested in new opportunities and projects.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  )
} 