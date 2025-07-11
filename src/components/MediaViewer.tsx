import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, Download, X } from 'lucide-react';
import { Project } from '../types/Project';

interface MediaViewerProps {
  project: Project;
  activeMediaType: 'cadModel' | 'drawings' | 'video' | 'photos';
}

export const MediaViewer: React.FC<MediaViewerProps> = ({ project, activeMediaType }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const renderCADModel = () => {
    const cadModel = project.media.cadModel;
    if (!cadModel) return null;

    if (cadModel.type === 'images' && cadModel.images) {
      return (
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">3D CAD Model</h3>
            {cadModel.description && (
              <p className="text-gray-300 text-sm">{cadModel.description}</p>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {cadModel.images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-lg overflow-hidden"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsImageModalOpen(true);
                }}
              >
                <img
                  src={image}
                  alt={`CAD Model ${index + 1}`}
                  className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="p-6 text-center">
        <p className="text-gray-400">3D Model viewer integration would go here</p>
      </div>
    );
  };

  const renderDrawings = () => {
    const drawings = project.media.drawings;
    if (!drawings) return null;

    return (
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">
            {drawings.title || 'Technical Drawings'}
          </h3>
        </div>
        
        {drawings.type === 'images' && drawings.images ? (
          <div className="grid grid-cols-1 gap-4">
            {drawings.images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-lg overflow-hidden bg-white p-4"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsImageModalOpen(true);
                }}
              >
                <img
                  src={image}
                  alt={`Drawing ${index + 1}`}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-black/50 text-white p-2 rounded-full">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400">
            <p>PDF viewer integration would go here</p>
          </div>
        )}
      </div>
    );
  };

  const renderVideo = () => {
    const video = project.media.video;
    if (!video) return null;

    return (
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">
            {video.title || 'Video Walkthrough'}
          </h3>
          {video.duration && (
            <p className="text-gray-400 text-sm">Duration: {video.duration}</p>
          )}
        </div>
        <div className="relative rounded-lg overflow-hidden bg-black">
          <video
            src={video.url}
            controls
            className="w-full h-auto"
            poster={project.thumbnail}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };

  const renderPhotos = () => {
    const photos = project.media.photos;
    if (!photos) return null;

    return (
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">Photo Gallery</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-lg overflow-hidden"
              onClick={() => {
                setCurrentImageIndex(index);
                setIsImageModalOpen(true);
              }}
            >
              <img
                src={image}
                alt={`Photo ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white" size={24} />
              </div>
              {photos.captions && photos.captions[index] && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm">{photos.captions[index]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getCurrentImages = () => {
    switch (activeMediaType) {
      case 'cadModel':
        return project.media.cadModel?.images || [];
      case 'drawings':
        return project.media.drawings?.images || [];
      case 'photos':
        return project.media.photos?.images || [];
      default:
        return [];
    }
  };

  const currentImages = getCurrentImages();

  const renderContent = () => {
    switch (activeMediaType) {
      case 'cadModel':
        return renderCADModel();
      case 'drawings':
        return renderDrawings();
      case 'video':
        return renderVideo();
      case 'photos':
        return renderPhotos();
      default:
        return null;
    }
  };

  return (
    <>
      {renderContent()}
      
      {/* Image Modal */}
      {isImageModalOpen && currentImages.length > 0 && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <img
              src={currentImages[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {currentImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) => 
                    prev === 0 ? currentImages.length - 1 : prev - 1
                  )}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => 
                    prev === currentImages.length - 1 ? 0 : prev + 1
                  )}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
            
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};