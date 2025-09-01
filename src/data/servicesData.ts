export type ServiceCategory = 'digital_marketing' | 'development' | 'design' | 'consulting';

export interface Service {
  title: string;
  category: ServiceCategory;
  blurb: string;
  short_description: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  starting_price: string;
  technologies?: string[];
  tools?: string[];
  platforms?: string[];
  certifications?: string[];
  benefits?: string[];
  equipment?: string[];
  expertise?: string[];
}

export interface ServicesData {
  [key: string]: Service;
}

// Icon mapping for service categories
export const categoryIcons = {
  digital_marketing: 'Target',
  development: 'Code2',
  design: 'Palette',
  consulting: 'MessageCircle',
} as const;

// Icon mapping for individual services
export const serviceIcons = {
  animation_video: 'Clapperboard',
  social_media: 'Share2',
  web_development: 'Code2',
  google_ads: 'Target',
  seo: 'Search',
  google_maps: 'MapPin',
  media_production: 'Camera',
  branding: 'BadgeCheck',
  consultation: 'MessagesSquare',
} as const;

// Service order for display
export const serviceOrder = [
  'web_development',
  'social_media',
  'google_ads',
  'seo',
  'animation_video',
  'media_production',
  'branding',
  'google_maps',
  'consultation',
] as const;

// Category order for filters
export const categoryOrder: ServiceCategory[] = [
  'digital_marketing',
  'development', 
  'design',
  'consulting',
];

// Utility functions
export const getServicesByCategory = (services: ServicesData, category: ServiceCategory): [string, Service][] => {
  return Object.entries(services).filter(([_, service]) => service.category === category);
};

export const searchServices = (services: ServicesData, searchTerm: string): [string, Service][] => {
  const searchLower = searchTerm.toLowerCase();
  return Object.entries(services).filter(([_, service]) => 
    service.title.toLowerCase().includes(searchLower) ||
    service.blurb.toLowerCase().includes(searchLower) ||
    service.short_description.toLowerCase().includes(searchLower) ||
    service.features.some(feature => feature.toLowerCase().includes(searchLower))
  );
};

export const getServiceCounts = (services: ServicesData): Record<ServiceCategory, number> => {
  const counts: Record<ServiceCategory, number> = {
    digital_marketing: 0,
    development: 0,
    design: 0,
    consulting: 0,
  };

  Object.values(services).forEach(service => {
    if (counts[service.category] !== undefined) {
      counts[service.category]++;
    }
  });

  return counts;
};

// Service validation utility
export const validateService = (service: Partial<Service>): service is Service => {
  const requiredFields: (keyof Service)[] = [
    'title', 'category', 'blurb', 'short_description', 'description',
    'features', 'deliverables', 'timeline', 'starting_price'
  ];

  return requiredFields.every(field => service[field] !== undefined);
};

// Helper to get service key from title (useful for programmatic access)
export const getServiceKeyFromTitle = (services: ServicesData, title: string): string | null => {
  const entry = Object.entries(services).find(([_, service]) => 
    service.title.toLowerCase() === title.toLowerCase()
  );
  return entry ? entry[0] : null;
};
