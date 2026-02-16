import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Kenai Borough',
  title: 'Kenai Borough - Your Gateway to the Kenai Peninsula',
  description: 'Official directory and portal for Kenai Peninsula Borough services, communities, and resources',
  url: 'https://kenaiborough.com',
  ogImage: '/og-image.jpg',
  phone: '(907) 555-0101',
  email: 'info@kenaiborough.com',
  address: 'Kenai Peninsula Borough, Alaska',
  businessType: 'GovernmentOrganization',
  primaryColor: '#003f87',
  relatedSites: [
    { name: 'Kenai Borough Realty', url: 'https://kenaiboroughrealty.com', description: 'Full-service real estate for homes, land, and commercial properties' },
    { name: 'Kenai Peninsula Rentals', url: 'https://kenaipeninsularentals.com', description: 'Long-term and short-term rental listings' },
    { name: 'Kenai Land Sales', url: 'https://kenailandsales.com', description: 'Acreage, lots, and development opportunities' },
    { name: 'Kenai Home Sales', url: 'https://kenaihomesales.com', description: 'Residential home sales experts' },
    { name: 'Kenai Auto Sales', url: 'https://kenaiautosales.com', description: 'Quality vehicles for Alaska living' }
  ],
  listingTypes: ['all']
};
