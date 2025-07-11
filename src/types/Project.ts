export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  media: {
    cadModel?: {
      type: 'glb' | 'images';
      url?: string;
      images?: string[];
      description?: string;
    };
    drawings?: {
      type: 'pdf' | 'images';
      url?: string;
      images?: string[];
      title?: string;
    };
    video?: {
      url: string;
      title?: string;
      duration?: string;
    };
    photos?: {
      images: string[];
      captions?: string[];
    };
  };
}