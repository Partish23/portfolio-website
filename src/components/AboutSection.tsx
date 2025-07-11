import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">About Me</h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-2xl">
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate about 3D modeling and turning ideas into precise, manufacturable products.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Enthusiastic about learning new tools and techniques to solve real-world engineering problems and contribute to efficient, innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};