import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'mechanical-assembly',
    title: 'Precision Mechanical Assembly',
    description: 'Complex multi-part mechanical assembly featuring precision bearings, custom brackets, and integrated cooling system.',
    thumbnail: '/images/projects/mechanical-assembly/thumbnail.jpg',
    category: 'Design Assembly',
    tags: ['SolidWorks', 'Assembly', 'Precision Engineering'],
    media: {
      cadModel: {
        type: 'images',
        images: [
          '/images/BOLT-v1.glb',
          '/images/ASSEMBLY-v1.png',
          '/images/projects/mechanical-assembly/cad-model-3.jpg'
        ],
        description: '3D CAD model showcasing precision mechanical assembly with detailed part relationships and tolerances.'
      },
      drawings: {
        type: 'images',
        images: [
          '/images/projects/mechanical-assembly/drawing-1.jpg',
          '/images/projects/mechanical-assembly/drawing-2.jpg'
        ],
        title: 'Technical Drawings & Specifications'
      },
      video: {
        url: 'videos/FORK-MP4',
        title: 'Assembly Process Walkthrough',
        duration: '3:24'
      },
      photos: {
        images: [
          '/images/sample-image.png',
          '/images/ASSEMBLY-v1.png',
          '/images/projects/mechanical-assembly/photo-3.jpg'
        ],
        captions: ['Final assembled product', 'Component detail view', 'Manufacturing setup']
      }
    }
  },
  {
    id: 'brake-caliper-part',
    title: 'High-Performance Brake Caliper',
    description: 'Individual brake caliper component designed for racing applications with advanced thermal management features.',
    thumbnail: '/images/projects/brake-caliper/thumbnail.jpg',
    category: 'Mechanical Part',
    tags: ['AutoCAD', 'Performance', 'Thermal Analysis'],
    media: {
      cadModel: {
        type: 'images',
        images: [
          '/images/projects/brake-caliper/cad-model-1.jpg',
          '/images/projects/brake-caliper/cad-model-2.jpg'
        ],
        description: 'Detailed CAD model of high-performance brake caliper with thermal analysis visualization.'
      },
      drawings: {
        type: 'images',
        images: [
          '/images/projects/brake-caliper/drawing-1.jpg'
        ],
        title: 'Manufacturing Drawings'
      },
      video: {
        url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        title: 'Design Process Overview',
        duration: '2:45'
      },
      photos: {
        images: [
          '/images/projects/brake-caliper/photo-1.jpg',
          '/images/projects/brake-caliper/photo-2.jpg'
        ],
        captions: ['Rendered caliper component', 'Performance testing setup']
      }
    }
  },
  {
    id: 'gear-assembly',
    title: 'Planetary Gear Assembly',
    description: 'Complete planetary gear system with sun gear, planet gears, and ring gear for high-torque applications.',
    thumbnail: '/images/projects/gear-assembly/thumbnail.jpg',
    category: 'Design Assembly',
    tags: ['SolidWorks', 'Gear Design', 'Power Transmission'],
    media: {
      cadModel: {
        type: 'images',
        images: [
          '/images/projects/gear-assembly/cad-model-1.jpg',
          '/images/projects/gear-assembly/cad-model-2.jpg'
        ],
        description: 'Complete gear assembly with motion simulation and stress analysis.'
      },
      drawings: {
        type: 'images',
        images: [
          '/images/projects/gear-assembly/drawing-1.jpg'
        ],
        title: 'Assembly Drawings & Tolerances'
      },
      photos: {
        images: [
          '/images/projects/gear-assembly/photo-1.jpg',
          '/images/projects/gear-assembly/photo-2.jpg'
        ],
        captions: ['Gear assembly rendering', 'Exploded view']
      }
    }
  },
  {
    id: 'bearing-housing',
    title: 'Precision Bearing Housing',
    description: 'Custom bearing housing component designed for high-speed applications with integrated lubrication system.',
    thumbnail: '/images/projects/bearing-housing/thumbnail.jpg',
    category: 'Mechanical Part',
    tags: ['Fusion 360', 'Precision Machining', 'Lubrication'],
    media: {
      cadModel: {
        type: 'images',
        images: [
          '/images/projects/bearing-housing/cad-model-1.jpg',
          '/images/projects/bearing-housing/cad-model-2.jpg'
        ],
        description: 'Detailed bearing housing with internal oil channels and mounting features.'
      },
      drawings: {
        type: 'images',
        images: [
          '/images/projects/bearing-housing/drawing-1.jpg'
        ],
        title: 'Technical Specifications'
      },
      video: {
        url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        title: 'Machining Process',
        duration: '4:12'
      },
      photos: {
        images: [
          '/images/projects/bearing-housing/photo-1.jpg'
        ],
        captions: ['Finished bearing housing']
      }
    }
  },
  {
    id: 'pump-assembly',
    title: 'Centrifugal Pump Assembly',
    description: 'Complete centrifugal pump design with impeller, volute casing, and shaft assembly for industrial applications.',
    thumbnail: '/images/projects/pump-assembly/thumbnail.jpg',
    category: 'Design Assembly',
    tags: ['SolidWorks', 'Fluid Dynamics', 'Industrial'],
    media: {
      cadModel: {
        type: 'images',
        images: [
          '/images/projects/pump-assembly/cad-model-1.jpg',
          '/images/projects/pump-assembly/cad-model-2.jpg'
        ],
        description: 'Complete pump assembly with flow analysis and performance optimization.'
      },
      drawings: {
        type: 'images',
        images: [
          '/images/projects/pump-assembly/drawing-1.jpg'
        ],
        title: 'Assembly & Installation Drawings'
      },
      video: {
        url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        title: 'Pump Operation Simulation',
        duration: '3:15'
      },
      photos: {
        images: [
          '/images/projects/pump-assembly/photo-1.jpg',
          '/images/projects/pump-assembly/photo-2.jpg'
        ],
        captions: ['Pump assembly rendering', 'Cross-section view']
      }
    }
  },
  {
    id: 'shaft-component',
    title: 'High-Strength Drive Shaft',
    description: 'Precision-machined drive shaft component with keyways and bearing surfaces for power transmission systems.',
    thumbnail: '/images/projects/shaft-component/thumbnail.jpg',
    category: 'Mechanical Part',
    tags: ['AutoCAD', 'Shaft Design', 'Power Transmission'],
    media: {
      cadModel: {
        type: 'images',
        images: [
          '/images/projects/shaft-component/cad-model-1.jpg',
          '/images/projects/shaft-component/cad-model-2.jpg'
        ],
        description: 'Detailed shaft design with stress concentration analysis and surface finish specifications.'
      },
      drawings: {
        type: 'images',
        images: [
          '/images/projects/shaft-component/drawing-1.jpg'
        ],
        title: 'Manufacturing Drawings'
      },
      photos: {
        images: [
          '/images/projects/shaft-component/photo-1.jpg'
        ],
        captions: ['Finished drive shaft']
      }
    }
  }
];