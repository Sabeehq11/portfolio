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
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 animate-fade-up">
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-primary-900 dark:text-primary-100 mb-8">
            Projects
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed max-w-3xl">
            A showcase of my technical projects, ranging from AI-powered applications to 
            full-stack web development and mobile solutions.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-16 animate-fade-in">
          <div className="flex flex-wrap gap-4 lg:gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-all rounded-sm ${
                  activeFilter === category.id
                    ? 'bg-primary-900 dark:bg-primary-100 text-white dark:text-primary-900'
                    : 'text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block animate-fade-up bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Card */}
              <div className="aspect-video bg-primary-100 dark:bg-primary-800 relative overflow-hidden">
                {project.images && project.images[0] ? (
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} preview`}
                    className="absolute inset-0 w-full h-full object-contain bg-gray-50 dark:bg-gray-800"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-primary-400 dark:text-primary-600">
                    <span className="text-sm tracking-wide">Project Preview</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-sm">
                    {project.year}
                  </span>
                  <span className="text-xs text-primary-500 dark:text-primary-500 capitalize">
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
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-sm"
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

        {/* Call to Action */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-light text-primary-900 dark:text-primary-100 mb-8">
            Interested in my work?
          </h2>
          <Link to="/contact" className="btn-primary">
            Let's connect
          </Link>
        </div>
      </div>
    </div>
  )
} 