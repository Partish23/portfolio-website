import React from 'react';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-white/10 hover:border-white/20"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-blue-400/30">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          <span className="text-gray-400 text-sm">{project.year}</span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-4 flex items-center gap-3">
          <div className="text-xs text-gray-400">
            {project.year}
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          {project.media.cadModel && (
            <div className="flex items-center gap-1 text-blue-400 text-xs">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              3D Model
            </div>
          )}
          {project.media.drawings && (
            <div className="flex items-center gap-1 text-green-400 text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Drawings
            </div>
          )}
          {project.media.video && (
            <div className="flex items-center gap-1 text-purple-400 text-xs">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Video
            </div>
          )}
          {project.media.photos && (
            <div className="flex items-center gap-1 text-orange-400 text-xs">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              Photos
            </div>
          )}
        </div>
      </div>
    </div>
  );
};