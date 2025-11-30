import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
            >
              Gi
            </button>

            <div className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="relative text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium pb-1"
              >
                Home
                {activeSection === 'home' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="relative text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium pb-1"
              >
                About
                {activeSection === 'about' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="relative text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium pb-1"
              >
                Skills
                {activeSection === 'skills' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="relative text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium pb-1"
              >
                Blog
                {activeSection === 'blog' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>

              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Egi</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">eginazmumuqtapi98@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone number</p>
                  <p className="text-white">+62 838 1652 7379</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex items-start justify-end gap-4">
              <a
                href="https://www.linkedin.com/in/eginazmu/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all font-semibold"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/eginazmu1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>

          <hr className="border-gray-800 mb-6" />

          {/* Tech Stack Pills */}
          <div>
            <p className="text-gray-400 text-sm mb-4">During this time I have studied</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold flex items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-5 h-5" alt="HTML" />
                HTML
              </span>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold flex items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-5 h-5" alt="CSS" />
                CSS
              </span>
              <span className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg text-sm font-semibold flex items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-5 h-5" alt="Python" />
                Python
              </span>
              <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="w-5 h-5" alt="PHP" />
                PHP
              </span>
              <span className="px-4 py-2 bg-yellow-300 text-gray-900 rounded-lg text-sm font-semibold flex items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-5 h-5" alt="MySQL" />
                MySQL
              </span>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-5 h-5" alt="TypeScript" />
                TypeScript
              </span>
              <span className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-5 h-5" alt="MongoDB" />
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
