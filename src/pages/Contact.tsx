import { useState } from 'react'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      // In a real app, this would send to your backend/Firebase Cloud Function
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'sabeehq11@gmail.com',
      href: 'mailto:sabeehq11@gmail.com',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Teaneck, NJ',
      href: null,
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: 'Available upon request',
      href: null,
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Sabeehq11',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/sabeeh-qureshi',
      icon: FaLinkedin,
    },
  ]

  const subjects = [
    'General Inquiry',
    'Project Collaboration',
    'Job Opportunity',
    'Consulting Services',
    'Speaking Engagement',
    'Other',
  ]

  return (
    <div className="pt-32 pb-16 relative">
      {/* Subtle chaos overlay */}
      <div className="chaos-overlay" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="inline-block hover:animate-glitch">Get In Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and 
            <span className="inline-block mx-2 hover:text-accent-600 hover:animate-tilt transition-all">interesting projects</span>. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info with joker-card effects */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm joker-card">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's <span className="hover:text-primary-600 transition-colors duration-300">Connect</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I typically respond within 24 hours. For urgent matters, feel free to call directly.
              </p>

              {/* Contact Methods with enhanced hover effects */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  const content = (
                    <div className="flex items-center space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary-100 group-hover:to-accent-100 dark:group-hover:from-primary-900/30 dark:group-hover:to-accent-900/30 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-accent-600 transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-2 -m-2 transition-all duration-300 hover:scale-[1.02]"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      {content}
                    </div>
                  )
                })}
              </div>

              {/* Social Links with enhanced effects */}
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                  Follow me on social media
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
                        aria-label={link.name}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with enhanced interactions */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm relative overflow-hidden">
              {/* Subtle gradient effect when form is focused */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary-600/0 via-transparent to-accent-600/0 transition-all duration-500 pointer-events-none ${focusedField ? 'from-primary-600/5 to-accent-600/5' : ''}`} />
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Me a <span className="hover:text-accent-600 transition-colors duration-300">Message</span>
                </h2>

                {/* Success/Error Messages with enhanced styling */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-fade-in">
                    <p className="text-green-800 dark:text-green-200">
                      Thank you for your message! I'll get back to you within 24 hours. 
                      <span className="inline-block ml-2 animate-float">🎉</span>
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-fade-in">
                    <p className="text-red-800 dark:text-red-200">
                      Something went wrong. Please try again or contact me directly via email.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-600"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-600"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-600"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-600"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-600"
                      placeholder="Tell me about your project, question, or how I can help you..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Fields marked with * are required
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed chaos-hover"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle floating element */}
        <div className="absolute -bottom-20 -left-20 w-32 h-48 opacity-5 animate-float hidden xl:block">
          <img src="/images/joker/joker3.jpg" alt="" className="w-full h-full object-cover rounded transform rotate-12" />
        </div>
      </div>
    </div>
  )
} 