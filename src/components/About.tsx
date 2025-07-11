import React from 'react';
import { Monitor, Target } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    {
      category: 'CAD Software',
      icon: Monitor,
      items: ['SolidWorks', 'AutoCAD', 'Fusion 360'],
      color: 'blue'
    },
    {
      category: 'Specializations',
      icon: Target,
      items: ['Product Design', 'Sheet Metal', 'Assembly Design', 'Part Design', 'Pipe Routing'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-2xl">
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about 3D modeling and turning ideas into precise, manufacturable products.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Enthusiastic about learning new tools and techniques to solve real-world engineering problems and contribute to efficient, innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Expertise Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">Technical Expertise</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive skill set in mechanical design and specialized engineering applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 shadow-2xl"
                >
                  <div className={`w-12 h-12 rounded-lg ${getColorClasses(skill.color)} flex items-center justify-center mb-6 border`}>
                    <Icon size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-6 text-lg">{skill.category}</h4>
                  <ul className="space-y-3">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};