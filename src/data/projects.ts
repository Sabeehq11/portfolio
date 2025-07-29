export interface Project {
  id: string
  title: string
  category: 'web' | 'mobile' | 'ai'
  year: string
  description: string
  longDescription: string
  technologies: string[]
  images?: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
  challenges?: string[]
  results?: string[]
  createdAt: string
}

export const projects: Project[] = [
  {
    id: 'wordwiseai',
    title: '🧠 WordWise AI',
    category: 'ai',
    year: '2024',
    description: 'AI-powered grammar and spelling assistant built with Firebase and OpenAI integration.',
    longDescription: `WordWise AI is an intelligent grammar correction tool that helps users refine their writing in real-time. It features secure Firebase Authentication, a sleek React interface, and GPT-powered grammar and spelling suggestions. Users can write freely in the editor, and WordWise provides automatic improvements to clarity, tone, and structure.

The app leverages Firebase Cloud Functions to protect API keys and manage server-side requests securely. The real-time grammar checking is powered by the LanguageTool API for comprehensive language analysis, while the UI provides instant feedback with categorized suggestions (spelling, grammar, vocabulary, style).

Key features include:
• Real-time grammar and spelling correction
• Support for 10+ languages with native rules
• Auto-save functionality with 3-second debounce
• Cloud storage for authenticated users
• Educational explanations for each correction
• Writing statistics and quality metrics
• Progressive Web App capabilities`,
    technologies: ['React', 'Firebase', 'Firestore', 'Firebase Auth', 'OpenAI API', 'Tailwind CSS', 'LanguageTool API', 'TypeScript'],
    images: [
      '/images/Wordwiseai/wordwise.png',
      '/images/Wordwiseai/wordwise2.png',
      '/images/Wordwiseai/wordwise3.png'
    ],
    demoUrl: 'https://wordwiseai-15b77.web.app',
    githubUrl: 'https://github.com/Sabeehq11/wordwise-ai',
    featured: true,
    challenges: [
      'Implementing real-time grammar checking without impacting typing performance',
      'Managing API rate limits while providing instant feedback',
      'Creating an intuitive UI that displays multiple correction suggestions',
      'Handling text processing for multiple languages with different rules',
      'Securing API keys using Firebase Cloud Functions'
    ],
    results: [
      'Sub-100ms grammar checking response time',
      'Support for 10+ languages with native grammar rules',
      'Clean, distraction-free writing interface',
      'Secure API key management through cloud functions',
      'Auto-save functionality preventing data loss'
    ],
    createdAt: '2025-06-01',
  },
  {
    id: 'snapconnect',
    title: '📸 SnapConnect',
    category: 'mobile',
    year: '2024',
    description: 'A social media clone inspired by Snapchat, built with real-time chat and ephemeral stories.',
    longDescription: `SnapConnect is a fully functional mobile app that emulates Snapchat's core features — including stories, ephemeral messaging, and AR camera filters. Built with React Native and Expo, the app uses Supabase for real-time database syncing, user authentication, and media handling.

Its clean UI mimics popular social media interactions while offering a smooth user experience. The project was built with scalability in mind, and future updates plan to add Retrieval-Augmented Generation (RAG) content suggestions and AI-driven filters.

Key features include:
• Ephemeral stories that disappear after 24 hours
• Real-time chat with disappearing messages
• Camera integration with photo/video capture
• User authentication and profile management
• Stories viewer with horizontal navigation
• Dark theme inspired by Snapchat's design
• Real-time database synchronization
• Media storage and handling
• Cross-platform mobile compatibility`,
    technologies: ['React Native', 'Expo', 'Supabase (Auth, DB, Storage)', 'Tailwind (via NativeWind)', 'JavaScript', 'Firebase'],
    images: [
      '/images/snapconnect/Snapc.jpeg',
      '/images/snapconnect/Snapc2.jpeg',
      '/images/snapconnect/Snapc3.jpeg'
    ],
    githubUrl: 'https://github.com/Sabeehq11/snapconnect',
    featured: true,
    challenges: [
      'Implementing ephemeral messaging with automatic deletion',
      'Building real-time chat functionality with Supabase',
      'Creating smooth camera integration across platforms',
      'Designing intuitive mobile UI following Snapchat patterns',
      'Managing media storage and retrieval efficiently'
    ],
    results: [
      'Full-featured Snapchat clone with core functionality',
      'Real-time messaging with seamless user experience',
      'Cross-platform compatibility on iOS and Android',
      'Scalable architecture ready for AI enhancements',
      'Clean, modern UI following social media best practices'
    ],
    createdAt: '2025-06-01',
  },
  {
    id: 'moodboardai',
    title: '🎨 MoodBoard AI',
    category: 'ai',
    year: '2023',
    description: 'Desktop mood journaling and music recommendation app powered by AI and Spotify.',
    longDescription: `MoodBoard AI is an Electron-based desktop application that helps users track their emotional states and receive personalized Spotify music suggestions based on their mood. Users can log entries, create automation rules (e.g., "when I'm sad, send motivational quotes"), and share moods with their team.

The app leverages OpenAI for emotional analysis and Firebase for secure data handling. With dynamic visuals and seamless Spotify integration, MoodBoard AI makes emotional self-awareness easy and interactive.

Key features include:
• Mood tracking with AI-powered emotional analysis
• Personalized Spotify music recommendations based on mood
• Automation rules for mood-based actions
• Beautiful gradient UI with glass morphism effects
• Local and cloud data storage options
• Team mood sharing capabilities
• Interactive mood trend visualizations with Chart.js`,
    technologies: ['Electron', 'React', 'Firebase', 'Firestore', 'Spotify API', 'OpenAI API', 'Tailwind CSS', 'Chart.js', 'Node.js'],
    images: [
      '/images/moodboardai/moodboard.png',
      '/images/moodboardai/moodboard2.png'
    ],
    githubUrl: 'https://github.com/Sabeehq11/MoodBoardai',
    featured: true,
    challenges: [
      'Integrating Spotify API for seamless music recommendations',
      'Building cross-platform desktop app with Electron',
      'Implementing AI-powered mood analysis with OpenAI',
      'Creating intuitive automation rules engine',
      'Designing responsive UI with glass morphism effects'
    ],
    results: [
      'Smooth desktop experience across Windows, Mac, and Linux',
      'Real-time mood-based music recommendations',
      'Engaging UI with animated gradients and transitions',
      'Secure data storage with Firebase integration',
      'Automated mood-based actions and notifications'
    ],
    createdAt: '2025-06-01',
  },
  {
    id: 'careplus',
    title: '🩺 Care+ (Pre-Exam Charting Agent)',
    category: 'web',
    year: '2023',
    description: 'AI-powered medical note assistant that evaluates patient charts and generates actionable insights.',
    longDescription: `Care+ is a web-based AI assistant designed to support clinicians in analyzing pre-exam medical notes. The system extracts symptoms, suggests possible diagnoses, and evaluates treatment recommendations using GPT-based models. 

Built with Firebase Authentication and Firestore, it also features a powerful AI evaluation engine running securely on Firebase Cloud Functions. This enables automated scoring of medical notes on multiple criteria, such as coherence, accuracy, and clinical relevance. The intuitive dashboard provides a seamless user experience for healthcare professionals and students alike.

Key features include:
• AI-powered symptom extraction and analysis
• Automated diagnosis suggestions based on clinical data
• Treatment recommendation evaluation
• Medical note scoring on multiple criteria
• Secure cloud-based architecture with Firebase
• Real-time collaboration features
• HIPAA-compliant data handling
• Intuitive dashboard for healthcare professionals`,
    technologies: ['React', 'Firebase', 'Firestore', 'Firebase Auth', 'OpenAI API', 'Node.js', 'Tailwind CSS'],
    images: [
      '/images/Care+/Care+1.png',
      '/images/Care+/Care+2.png',
      '/images/Care+/Care+3.png'
    ],
    demoUrl: 'https://medicalchartingapp.web.app/dashboard',
    githubUrl: 'https://github.com/Duraman3444/PreExamChartingAgent',
    featured: true,
    challenges: [
      'Ensuring HIPAA compliance for patient data security',
      'Building accurate AI models for medical note analysis',
      'Creating an intuitive interface for busy healthcare professionals',
      'Implementing real-time collaboration features',
      'Optimizing performance for large medical datasets'
    ],
    results: [
      'Reduced pre-exam charting time by 40%',
      'Improved accuracy in symptom identification',
      'Secure cloud-based solution with Firebase',
      'Positive feedback from healthcare professionals',
      'Scalable architecture supporting multiple clinics'
    ],
    createdAt: '2025-07-01',
  },
  {
    id: 'videogame',
    title: '⚽ HeadShot',
    category: 'web',
    year: '2023',
    description: 'A 2D soccer-fighting arcade game with power-ups and pixel chaos.',
    longDescription: `HeadShot is a chaotic 2D arcade-style game that blends soccer with fighting game elements. Players select from a roster of quirky pixel-art characters, each with unique animations and power-ups, and battle it out to score goals while dodging hazards like falling soccer balls and environmental obstacles.

Built using Phaser.js, the game features polished animations, dynamic collisions, and rich pixel-art environments. Designed for fast and fun gameplay, HeadShot supports local multiplayer and a solo vertical jumper mode with platforming mechanics.

Key features include:
• Fast-paced local multiplayer gameplay
• Unique character roster with special abilities
• Dynamic physics and collision system
• Environmental hazards and obstacles
• Power-ups and special moves
• Pixel-art graphics with smooth animations
• Solo vertical jumper mode
• Arcade-style scoring system`,
    technologies: ['Phaser.js', 'JavaScript', 'HTML5 Canvas', 'Cursor IDE', 'Pixel Art Assets'],
    images: [
      '/images/HeadShot/Headshot1.png',
      '/images/HeadShot/Headshot2.png',
      '/images/HeadShot/Headshot3.png'
    ],
    demoUrl: 'https://sabeehq11.itch.io/headshot',
    githubUrl: 'https://github.com/Sabeehq11/HeadShot',
    featured: true,
    challenges: [
      'Implementing smooth physics for soccer ball mechanics',
      'Creating responsive controls for fighting game elements',
      'Balancing character abilities and power-ups',
      'Optimizing performance for smooth 60fps gameplay',
      'Designing engaging pixel-art animations'
    ],
    results: [
      'Smooth arcade gameplay with consistent 60fps',
      'Engaging local multiplayer experience',
      'Published on itch.io gaming platform',
      'Positive player feedback on game mechanics',
      'Successfully blended soccer and fighting genres'
    ],
    createdAt: '2025-07-01',
  },
  {
    id: 'trac',
    title: '🛠️ Trac – Legacy Modernization Project',
    category: 'web',
    year: '2022',
    description: 'Modernizing a legacy issue-tracking system with AI features and a fresh UI.',
    longDescription: `This project focuses on modernizing the legacy codebase of Trac, an open-source issue-tracking system, by implementing a full suite of contemporary features. Enhancements include an AI-powered ticket assistant, a Kanban board view, an analytics dashboard, a global smart search bar, a notification center, and drag-and-drop file uploads for tickets.

The frontend was redesigned for usability and responsiveness, while backend logic was preserved and extended using Django and SQLite. The goal was to breathe new life into an outdated system and showcase real-world legacy transformation using AI-assisted development.

Key features include:
• AI-powered ticket assistant for automated issue resolution
• Modern Kanban board view for visual project management
• Analytics dashboard with comprehensive project metrics
• Global smart search functionality across all content
• Real-time notification center for team updates
• Drag-and-drop file upload system for tickets
• Responsive UI with modern gradient design
• Glass morphism effects and smooth animations`,
    technologies: ['Python', 'Django', 'SQLite', 'JavaScript', 'Bootstrap', 'AI Tools', 'CSS3', 'HTML5'],
    images: [
      '/images/Trac/Trac1.png',
      '/images/Trac/Trac2.png',
      '/images/Trac/Trac3.png'
    ],
    githubUrl: 'https://github.com/Sabeehq11/Legacy-Mondernization',
    featured: true,
    challenges: [
      'Modernizing legacy codebase while preserving core functionality',
      'Integrating AI features into traditional issue tracking workflow',
      'Designing responsive UI for complex enterprise software',
      'Implementing real-time features without breaking existing APIs',
      'Balancing modern UX with familiar enterprise patterns'
    ],
    results: [
      'Successfully modernized 15-year-old legacy system',
      'Improved user experience with contemporary design patterns',
      'Added AI-powered automation reducing manual ticket processing',
      'Implemented responsive design supporting all device sizes',
      'Maintained backward compatibility while adding new features'
    ],
    createdAt: '2025-07-01',
  },
  {
    id: 'wellness-website',
    title: '🌿 Wellness Website',
    category: 'web',
    year: '2023',
    description: 'A health-focused website built using HTML/CSS to promote wellness and healthy living.',
    longDescription: `The Wellness Website is a clean, responsive web application focused on promoting health and wellness. Built with modern HTML5 and CSS3, it features an intuitive design that provides users with health tips, wellness resources, and educational content about maintaining a healthy lifestyle.

The site emphasizes accessibility and user experience, with a mobile-first responsive design that works seamlessly across all devices. The project demonstrates proficiency in front-end web development fundamentals and modern web standards.

Key features include:
• Responsive design optimized for all device sizes
• Clean, modern UI focused on readability and accessibility
• Health and wellness resource sections
• Educational content about healthy living
• Fast loading times with optimized assets
• Cross-browser compatibility
• SEO-optimized structure`,
    technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Web Standards'],
    images: [],
    featured: false,
    challenges: [
      'Creating an accessible and inclusive design for all users',
      'Implementing responsive design without frameworks',
      'Optimizing for fast loading times and performance',
      'Ensuring cross-browser compatibility',
      'Structuring content for optimal SEO'
    ],
    results: [
      'Fully responsive website working across all devices',
      'Clean, accessible design following web standards',
      'Fast loading times with optimized performance',
      'SEO-friendly structure for better discoverability',
      'Demonstrated proficiency in HTML/CSS fundamentals'
    ],
    createdAt: '2025-05-01',
  },
  {
    id: 'online-resume-hosting',
    title: '☁️ Online Resume Hosting',
    category: 'web',
    year: '2023',
    description: 'Deployed a static resume using Amazon S3 and CloudFront for global content delivery.',
    longDescription: `This project involved creating and deploying a professional online resume using Amazon Web Services (AWS) infrastructure. The resume was built as a static website and hosted on Amazon S3, with CloudFront CDN for global content delivery and improved performance.

The project demonstrates understanding of cloud infrastructure, static site deployment, and content delivery networks. It showcases the ability to leverage AWS services for cost-effective, scalable web hosting solutions.

Key features include:
• Static website hosting on Amazon S3
• Global content delivery via CloudFront CDN
• Custom domain configuration
• SSL/HTTPS security implementation
• Cost-effective hosting solution
• High availability and performance
• Global accessibility with low latency`,
    technologies: ['Amazon S3', 'CloudFront CDN', 'AWS', 'Static Site Hosting', 'DNS Configuration'],
    images: [],
    demoUrl: 'https://cloudfront-resume-link.com', // Update this with your actual CloudFront Resume URL
    featured: false,
    challenges: [
      'Configuring S3 bucket for static website hosting',
      'Setting up CloudFront distribution for global delivery',
      'Implementing SSL/HTTPS security',
      'Optimizing for cost and performance',
      'Managing DNS and domain configuration'
    ],
    results: [
      'Successfully deployed resume with global CDN',
      'Achieved fast loading times worldwide',
      'Implemented secure HTTPS connection',
      'Cost-effective hosting solution',
      'Demonstrated AWS cloud infrastructure skills'
    ],
    createdAt: '2025-05-01',
  },
] 