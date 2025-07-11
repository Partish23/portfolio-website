import React from 'react';
import { Linkedin, Mail, Wrench, User } from 'lucide-react';
import { useScrollGradient } from './hooks/useScrollGradient';
import { ProjectGrid } from './components/ProjectGrid';
import { CTASection } from './components/CTASection';
import { projects } from './data/projects';
import { About } from './components/About';

function App() {
  const { getGradientStyle } = useScrollGradient();
  const [currentPage, setCurrentPage] = React.useState<'home' | 'about'>('home');

  return (
    <div className="min-h-screen" style={getGradientStyle()}>
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Wrench className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">PARTISH PEDNEKAR</h1>
                <p className="text-gray-400 text-sm">MECHANICAL DESIGN ENGINEER</p>
              </div>
            </div>
            
            <nav className="flex items-center gap-4">
              <button
                onClick={() => setCurrentPage(currentPage === 'home' ? 'about' : 'home')}
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 flex items-center gap-2"
              >
                <User size={20} />
                <span className="hidden sm:inline">{currentPage === 'home' ? 'About' : 'Home'}</span>
              </button>
              <a
                href="https://www.linkedin.com/in/partish-pednekar-391229260"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:partish2331@gmail.com"
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <Mail size={20} />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Precision Engineering
                <span className="block text-blue-500">Made Visual</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore a comprehensive collection of CAD models, technical drawings, and design solutions 
                tailored for precision engineering and advanced mechanical systems.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-white mb-4">Featured Projects</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Each project showcases different aspects of the design process, from initial CAD modeling 
                  to final technical documentation and visualization.
                </p>
              </div>
              
              <ProjectGrid projects={projects} />
            </div>
          </section>

          {/* Call to Action Section */}
          <CTASection />

          {/* Footer */}
          <footer className="border-t border-gray-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <Wrench className="text-white" size={20} />
                    </div>
                    <span className="text-lg font-bold text-white">CAD Portfolio</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Professional engineering design portfolio showcasing innovative solutions 
                    across multiple industries and applications.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4">Contact</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400">Ready to collaborate on your next project?</p>
                    <div className="space-y-1">
                      <p className="text-gray-400">LinkedIn: <a href="https://www.linkedin.com/in/partish-pednekar-391229260" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">partish-pednekar-391229260</a></p>
                      <p className="text-gray-400">Email: <a href="mailto:partish2331@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">partish2331@gmail.com</a></p>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <a
                        href="mailto:partish2331@gmail.com"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-400 text-sm">
                  © 2025 PARTISH. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;