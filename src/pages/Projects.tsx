import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Applications' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML Projects' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      {/* Subtle chaos overlay */}
      <div className="chaos-overlay" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20 animate-fade-up">
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-primary-900 dark:text-primary-100 mb-8">
            <span className="inline-block hover:animate-glitch">Projects</span>
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed max-w-3xl">
            A showcase of my technical projects, ranging from AI-powered applications to 
            full-stack web development and <span className="inline-block hover:text-accent-600 hover:animate-tilt transition-all">mobile solutions</span>.
          </p>
        </div>

        {/* Filter with enhanced effects */}
        <div className="mb-16 animate-fade-in">
          <div className="flex flex-wrap gap-4 lg:gap-8">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-all rounded-sm relative overflow-hidden ${
                  activeFilter === category.id
                    ? 'bg-primary-900 dark:bg-primary-100 text-white dark:text-primary-900'
                    : 'text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800'
                } hover:scale-105`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {category.name}
                {activeFilter === category.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with joker-card effects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block animate-fade-up joker-card bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle purple/green gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 via-transparent to-accent-600/0 group-hover:from-primary-600/5 group-hover:to-accent-600/5 transition-all duration-500 pointer-events-none z-10" />
              
              {/* Project Card */}
              <div className="aspect-video bg-primary-100 dark:bg-primary-800 relative overflow-hidden">
                {project.images && project.images[0] ? (
                  <>
                    <img 
                      src={project.images[0]} 
                      alt={`${project.title} preview`}
                      className="absolute inset-0 w-full h-full object-contain bg-gray-50 dark:bg-gray-800 transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle Joker card overlay effect */}
                    <div className="absolute top-2 right-2 w-8 h-12 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      <img src="/images/joker/joker6.jpg" alt="" className="w-full h-full object-cover rounded" />
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-primary-400 dark:text-primary-600">
                    <span className="text-sm tracking-wide">Project Preview</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 relative z-20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-sm group-hover:bg-gradient-to-r group-hover:from-primary-100 group-hover:to-accent-100 dark:group-hover:from-primary-800 dark:group-hover:to-accent-900 transition-all duration-300">
                    {project.year}
                  </span>
                  <span className="text-xs text-primary-500 dark:text-primary-500 capitalize group-hover:text-accent-600 transition-colors duration-300">
                    {project.category === 'ai' ? 'AI/ML' : project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-medium text-primary-900 dark:text-primary-100 mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-primary-600 dark:text-primary-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-sm transition-all duration-300 hover:scale-110"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action with chaos hover */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-light text-primary-900 dark:text-primary-100 mb-8">
            <span className="inline-block hover:animate-glitch">Interested</span> in my work?
          </h2>
          <Link to="/contact" className="btn-primary chaos-hover">
            Let's connect
          </Link>
        </div>
      </div>
    </div>
  )
} 