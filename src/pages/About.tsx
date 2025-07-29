export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 animate-fade-up">
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-primary-900 dark:text-primary-100 mb-8">
            About Me
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            A passionate Business Information Systems student from Teaneck, NJ, focused on bridging the gap between technology and business solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="aspect-square bg-primary-100 dark:bg-primary-800 rounded-sm overflow-hidden">
              <img 
                src="/images/me/me.JPG" 
                alt="Sabeeh Qureshi - Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          <div className="lg:col-span-2 space-y-8 animate-fade-up">
            <div>
              <h2 className="text-3xl font-light text-primary-900 dark:text-primary-100 mb-6">
                Hello, I'm Sabeeh Qureshi
              </h2>
              <div className="space-y-4 text-primary-600 dark:text-primary-400 leading-relaxed">
                <p>
                  I am currently pursuing my Bachelor's degree in Business Information Systems at 
                  the New Jersey Institute of Technology, with an expected graduation in May 2026. 
                  Based in Teaneck, NJ, my academic journey has equipped me with 
                  a unique blend of business acumen and technical expertise.
                </p>
                <p>
                  My coursework includes Information Systems, Financial Accounting, Web Applications, 
                  Database Design, E-Commerce Technology, and Systems Analysis. I'm passionate about 
                  leveraging technology to solve complex business problems and create innovative 
                  solutions that drive organizational success.
                </p>
                <p>
                  Beyond academics, I have experience as an Imam and Faith-Based Leader, having led 
                  Taraweeh prayers for congregations of 100+ people since 2017. I'm also a Hifz Graduate, 
                  having memorized the entire Quran from 2014-2017, and hold a Black Belt in TaeKwonDo 
                  (Kukkiwon Certified).
                </p>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-sm font-medium tracking-widest text-primary-500 dark:text-primary-500 uppercase mb-6">
                Interests & Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Database Design',
                  'Web Applications',
                  'E-Commerce Technology',
                  'Systems Analysis',
                  'Public Speaking',
                  'Leadership',
                  'Martial Arts',
                  'Faith-Based Community Work',
                ].map((interest) => (
                  <p key={interest} className="text-primary-700 dark:text-primary-300">
                    {interest}
                  </p>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div>
              <h3 className="text-sm font-medium tracking-widest text-primary-500 dark:text-primary-500 uppercase mb-6">
                Achievements & Recognition
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-primary-900 dark:text-primary-100 font-medium">Black Belt in TaeKwonDo</p>
                  <p className="text-sm text-primary-500 dark:text-primary-500">Kukkiwon Certified</p>
                </div>
                <div>
                  <p className="text-primary-900 dark:text-primary-100 font-medium">Hifz Graduate</p>
                  <p className="text-sm text-primary-500 dark:text-primary-500">Memorized the entire Quran (2014-2017)</p>
                </div>
                <div>
                  <p className="text-primary-900 dark:text-primary-100 font-medium">Faith-Based Leader</p>
                  <p className="text-sm text-primary-500 dark:text-primary-500">Leading congregations since 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 