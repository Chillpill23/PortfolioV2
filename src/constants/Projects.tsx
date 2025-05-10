const ezImages: Record<string, { default: string }> = import.meta.glob('../assets/projects/ez/*.webp', { eager: true });
const wcmImages: Record<string, { default: string }> = import.meta.glob('../assets/projects/wcm/*.webp', { eager: true });

const formatImages = (imageSet: Record<string, { default: string }>) => 
  Object.fromEntries(
    Object.entries(imageSet).map(([path, module]) => {
      const fileName = path.split('/').pop()?.replace('.webp', '');
      return [fileName, module.default];
    })
  );


// Processed image objects
const ez = formatImages(ezImages);
// const wcm = formatImages(wcmImages);

import yhThumb from '../assets/projects/yh/yh-thumb-m.webp'
import yhThumbD from '../assets/projects/yh/yh-thumb-d.webp'

import klimateThumb from '../assets/projects/klimate/klimate-thumb.webp'
import klimateThumbD from '../assets/projects/klimate/klimate-thumb-d.webp'
import { ProjectType } from '../types/data';

export const Projects: ProjectType[] = [
  {
    category:'personal',
    section: 'projects',
    thumbnail: yhThumb as string,
    thumbnailDesktop: yhThumbD as string,
    name: "York Hamilton",
    desc1: "A homepage concept design for York Hamilton featuring a sleek, modern layout with a professional aesthetic that showcases projects and services effectively.",
    stack: ['React', 'Typescript', 'SASS/SCSS', 'Vite'],
    url:"https://chillpill23.github.io/YorkHamilton/",
    github:"https://github.com/Chillpill23/YorkHamilton"
  },
  {
    category:'personal',
    section: 'projects',
    thumbnail: klimateThumb as string,
    thumbnailDesktop:klimateThumbD as string,
    name: "Klimate Weather App",
    desc1: "A Weather forecast application that provides comprehensive information sourced from OpenWeatherMap, including 5-day forecasts, weather data, temperatures, search feature, and a favorites list for quick access to your preferred cities.",
    stack: ['React', 'Tailwind.css', 'Typescript', 'TanStack Query', 'Shadcn UI', 'Vercel'],
    url:"https://klimate-mu.vercel.app/",
    github:"https://github.com/Chillpill23/Klimate"
  },
  {
    category:'work',
    section: 'projects',
    thumbnail: ez['ez-thumb'] as string,
    thumbnailDesktop: ez['ez-thumb-d'] as string,
    images: [
      ez['ez-hero'], ez['ez-s2'], ez['ez-s3'], ez['ez-s4'],
      ez['ez-s5'], ez['ez-s6'], ez['ez-s7'], ez['ez-s8'],
      ez['ez-s9'], ez['ez-s10'], ez['ez-s11']
    ] as string[],
    name: "Ez Oil Drain Valve",
    desc1: "I engineered an e-commerce solution for an oil drain valve manufacturer.",
    desc2: "This involved custom design implementation, feature development, and core web vital optimization to maximize performance and user engagement.",
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'JQuery'],
  }
];
