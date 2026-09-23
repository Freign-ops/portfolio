export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  summary: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  client: string;
  challenge: string;
  solution: string;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
}

export type ViewportMode = 'fluid' | 'desktop-1440' | 'mobile-390' | 'side-by-side';
