import React from 'react';

const skills = [
  {
    name: 'HTML',
    level: 'Fluent',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'CSS',
    level: 'Fluent',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'JavaScript',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'from-yellow-400 to-yellow-500'
  },
  {
    name: 'TypeScript',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: 'PHP',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    name: 'Python',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'from-blue-500 to-yellow-500'
  },
  {
    name: 'Java',
    level: 'Fluent',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: 'from-red-500 to-orange-600'
  },
  {
    name: 'Laravel',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'MySQL',
    level: 'Fluent',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'MongoDB',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: 'from-green-600 to-green-700'
  },
  {
    name: 'Supabase',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    color: 'from-emerald-500 to-teal-600'
  }
];

export default function Skills() {
  return (
    <div className="py-20 bg-white dark:bg-gray-800 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Programming Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Technologies I work with
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full"></div>
            <div className="h-1.5 w-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 dark:border-gray-600 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative text-center">
                <div className="mb-5 flex items-center justify-center">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${skill.color} shadow-md`}>
                  {skill.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
