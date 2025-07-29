import { HiDownload } from 'react-icons/hi'

export default function Experience() {
  const skills = {
    'Technical Skills': ['Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'React.js', 'GitHub', 'Playwright'],
    'Business Tools': ['Excel', 'SAP', 'Figma'],
    'Soft Skills': ['Teamwork', 'Adaptability', 'Public Speaking', 'Sales', 'Memorization'],
  }

  const experience = [
    {
      company: 'Archon Inc.',
      position: 'Inventory & Accounting Intern',
      startDate: '2024-05',
      endDate: null,
      location: 'Nutley, NJ',
      description: 'Managed inventory tracking and accounting processes to improve operational efficiency.',
      achievements: [
        'Reduced inventory discrepancies by 20% using Excel',
        'Managed tracking labels and records to improve shipping accuracy',
        'Streamlined inventory management processes',
        'Collaborated with accounting team on financial record keeping',
      ],
      technologies: ['Excel', 'Inventory Management Systems', 'Accounting Software'],
    },
    {
      company: 'Sillage of Hejaz',
      position: 'CEO & Fragrance Sales Specialist',
      startDate: '2024-09',
      endDate: null,
      location: 'Teaneck, NJ',
      description: 'Launched and managed a fragrance business, driving sales through community engagement and social media marketing.',
      achievements: [
        'Launched and managed a fragrance business from inception',
        'Drove 100+ product sales via community events and targeted social media',
        'Tracked inventory and sales trends to guide purchasing decisions',
        'Developed brand identity and marketing strategies',
      ],
      technologies: ['Social Media Marketing', 'Inventory Management', 'Sales Analytics'],
    },
    {
      company: 'East Coast Parking',
      position: 'Valet Driver',
      startDate: '2023-09',
      endDate: '2024-05',
      location: 'Belleville, NJ',
      description: 'Provided high-end customer service in fast-paced valet operations.',
      achievements: [
        'Delivered high-end customer service and ensured vehicle safety',
        'Operated efficiently in fast-paced environments with professionalism',
        'Maintained excellent safety record with zero incidents',
        'Built strong customer relationships through consistent service',
      ],
      technologies: ['Customer Service', 'Time Management', 'Safety Protocols'],
    },
    {
      company: 'Bergen County Islamic Center',
      position: 'Instructor',
      startDate: '2021-10',
      endDate: '2022-01',
      location: 'Hackensack, NJ',
      description: 'Taught Islamic studies to children ages 5-15, creating engaging and inclusive learning environments.',
      achievements: [
        'Taught ages 5–15, simplifying Islamic teachings for young learners',
        'Created engaging, inclusive class environments',
        'Developed age-appropriate curriculum and teaching materials',
        'Maintained high student engagement and participation rates',
      ],
      technologies: ['Teaching', 'Curriculum Development', 'Classroom Management'],
    },
  ]

  const leadership = [
    {
      organization: 'Various Mosques',
      position: 'Imam / Faith-Based Leader',
      startDate: '2017-01',
      endDate: null,
      location: 'Various Locations',
      description: 'Leading religious services and providing spiritual guidance to diverse communities.',
      achievements: [
        'Led Taraweeh prayers for congregations of 100+ people',
        'Consistently invited for leadership roles based on trust and recitation',
        'Developed discipline, public speaking, and reliability skills',
        'Provided spiritual guidance and community support',
      ],
    },
  ]

  const education = [
    {
      institution: 'New Jersey Institute of Technology',
      degree: 'Bachelor of Science in Business Information Systems',
      startDate: '2022-09',
      endDate: '2026-05',
      location: 'Newark, NJ',
      gpa: null,
      coursework: [
        'Information Systems',
        'Financial Accounting', 
        'Web Applications',
        'Database Design',
        'E-Commerce Technology',
        'Systems Analysis',
      ],
    },
  ]

  const achievements = [
    {
      name: 'Black Belt in TaeKwonDo',
      issuer: 'Kukkiwon Certified',
      date: null,
      description: 'Achieved black belt certification in traditional TaeKwonDo',
    },
    {
      name: 'Hifz Graduate',
      issuer: 'Islamic Studies',
      date: '2014-2017',
      description: 'Memorized the entire Quran',
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-up">
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-primary-900 dark:text-primary-100 mb-4">
            Resume
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-400 mb-2">
            Business Information Systems Student at NJIT
          </p>
          <p className="text-lg text-primary-500 dark:text-primary-500 mb-6">
            📍 Teaneck, NJ | 📧 sabeehq11@gmail.com
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/resume.pdf"
              download
              className="btn-primary inline-flex items-center"
            >
              <HiDownload className="w-5 h-5 mr-2" />
              Download PDF
            </a>
            <a
              href="https://linkedin.com/in/sabeeh-qureshi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://cloudfront-resume-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              CloudFront Resume
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.position}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                      {job.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {job.location}
                    </p>
                  </div>
                  <div className="mt-2 lg:mt-0 text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {job.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Leadership Experience
          </h2>
          <div className="space-y-8">
            {leadership.map((role, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {role.position}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                      {role.organization}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {role.location}
                    </p>
                  </div>
                  <div className="mt-2 lg:mt-0 text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(role.startDate)} - {role.endDate ? formatDate(role.endDate) : 'Present'}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {role.description}
                </p>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {role.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.location}
                    </p>
                  </div>
                  <div className="mt-2 lg:mt-0 text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)} (Expected)
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {achievement.issuer}
                </p>
                {achievement.date && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {achievement.date}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 