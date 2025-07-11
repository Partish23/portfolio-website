import React, { useState, useEffect } from 'react';
import { X, Monitor, FileText, Play, Camera } from 'lucide-react';
import { Project } from '../types/Project';
import { MediaViewer } from './MediaViewer';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

type MediaType = 'cadModel' | 'drawings' | 'video' | 'photos';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<MediaType>('cadModel');

  // Set default active tab based on available media
  useEffect(() => {
    if (project.media.cadModel) setActiveTab('cadModel');
    else if (project.media.drawings) setActiveTab('drawings');
    else if (project.media.video) setActiveTab('video');
    else if (project.media.photos) setActiveTab('photos');
  }, [project]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const tabs = [
    { key: 'cadModel' as MediaType, label: '3D Model', icon: Monitor, available: !!project.media.cadModel },
    { key: 'drawings' as MediaType, label: 'Drawings', icon: FileText, available: !!project.media.drawings },
    { key: 'video' as MediaType, label: 'Video', icon: Play, available: !!project.media.video },
    { key: 'photos' as MediaType, label: 'Photos', icon: Camera, available: !!project.media.photos },
  ].filter(tab => tab.available);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/20">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-300 text-sm">{project.description}</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
              <span className="text-gray-400 text-sm">{project.year}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 bg-black/20">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'text-blue-400 border-b-2 border-blue-400 bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="h-[calc(90vh-200px)] overflow-auto">
          <MediaViewer project={project} activeMediaType={activeTab} />
        </div>

        {/* Tags */}
        <div className="p-6 border-t border-white/10 bg-black/20">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-sm border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};