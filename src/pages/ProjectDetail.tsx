import { useParams, Link } from 'react-router-dom'
import { HiArrowLeft, HiExternalLink, HiCode } from 'react-icons/hi'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()

  // Find the project based on the ID from the URL
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Project not found</h1>
        <Link to="/projects" className="text-primary-600 dark:text-primary-400 hover:underline mt-4 inline-block">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8"
        >
          <HiArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <HiExternalLink className="w-5 h-5 mr-2" />
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <HiCode className="w-5 h-5 mr-2" />
                View Source Code
              </a>
            )}
          </div>
        </div>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <div className="grid gap-6">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={`${project.title} main image`}
                  className="w-full h-full object-contain"
                />
              </div>
              {project.images.length > 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                                     {project.images.slice(1, 3).map((image, index) => (
                     <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                       <img 
                         src={image} 
                         alt={`${project.title} screenshot ${index + 1}`}
                         className="w-full h-full object-contain"
                       />
                     </div>
                   ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              About This Project
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Project Info
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</dt>
                  <dd className="text-sm text-gray-900 dark:text-white capitalize">{project.category === 'ai' ? 'AI/ML' : project.category}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Completed</dt>
                  <dd className="text-sm text-gray-900 dark:text-white">
                    {new Date(project.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies</dt>
                  <dd className="text-sm text-gray-900 dark:text-white">
                    {project.technologies.join(', ')}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        {(project.challenges || project.results) && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {project.challenges && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Challenges
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.results && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Results & Impact
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Other Projects CTA */}
        <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to See More?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Check out my other projects and case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 