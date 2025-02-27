const ezImages = import.meta.glob('../assets/projects/ez/*.webp', { eager: true, import: 'default' });
const wcmImages = import.meta.glob('../assets/projects/wcm/*.webp', { eager: true, import: 'default' });

// Convert import.meta.glob() output into an object for easier access
const formatImages = (imageSet) => Object.fromEntries(
  Object.entries(imageSet).map(([path, module]) => {
    const fileName = path.split('/').pop().replace('.webp', '');
    return [fileName, module];
  })
);

// Processed image objects
const ez = formatImages(ezImages);
const wcm = formatImages(wcmImages);

import klimateThumb from '../assets/projects/klimate/klimate-thumb.webp'
import klimateThumbD from '../assets/projects/klimate/klimate-thumb-d.webp'

export const Projects = [
  {
    category:'personal',
    section: 'projects',
    thumbnail: klimateThumb,
    thumbnailDesktop:klimateThumbD,
    name: "Klimate Weather App",
    desc1: "A weather forecast web application that showcases data fetched from Openweathermap.org",
    desc2: "This involved features such as 5-day weather forecasts, Weather details, Today's Temperature, Search Queries and histories, as well as Favorite cities.",
    stack: ['React', 'Tailwind.css', 'Typescript', 'TanStack Query', 'Shadcn UI', 'Vercel'],
    url:"https://klimate-mu.vercel.app/"
  },
  {
    category:'work',
    section: 'projects',
    thumbnail: ez['ez-thumb'],
    thumbnailDesktop: ez['ez-thumb-d'],
    images: [
      ez['ez-hero'], ez['ez-s2'], ez['ez-s3'], ez['ez-s4'],
      ez['ez-s5'], ez['ez-s6'], ez['ez-s7'], ez['ez-s8'],
      ez['ez-s9'], ez['ez-s10'], ez['ez-s11']
    ],
    name: "Ez Oil Drain Valve",
    desc1: "I engineered an e-commerce solution for an oil drain valve manufacturer.",
    desc2: "This involved custom design implementation, feature development, and core web vital optimization to maximize performance and user engagement.",
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'JQuery'],
  },
  {
    category:'work',
    section: 'projects',
    thumbnail: wcm['wcm-thumb'],
    thumbnailDesktop: wcm['wcm-thumb-d'],
    images: [
      wcm['wcm-hero'], wcm['wcm-s2'], wcm['wcm-s3'], wcm['wcm-s4'],
      wcm['wcm-s5'], wcm['wcm-s6'], wcm['wcm-s7']
    ],
    name: "Westcoast Metric",
    desc1: "An e-commerce website specializing in Volkswagen automotive parts.",
    desc2: "The project involved implementing custom designs and features based on client specifications. I also optimized the site's core web vitals to improve user experience and drive conversions.",
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'JQuery'],
  },
];
