import yhThumb from '../assets/projects/yh/yh-1.png'
import yhThumbD from '../assets/projects/yh/yh-1.png'

import foreverThumb from '../assets/projects/forever/forever-1.png'
import foreverThumbD from '../assets/projects/forever/forever-1.png'

import klimateThumb from '../assets/projects/klimate/klimate-thumb.webp'
import klimateThumbD from '../assets/projects/klimate/klimate-thumb-d.webp'

import ezThumb from '../assets/projects/ez/ez-1.png'
import ezThumbD from '../assets/projects/ez/ez-1.png'

import wccThumb from '../assets/projects/wcc/wcc-1.png'
import wccThumbD from '../assets/projects/wcc/wcc-1.png'

import wcmThumb from '../assets/projects/wcm/wcm-1.png'
import wcmThumbD from '../assets/projects/wcm/wcm-1.png'

import pmsThumb from '../assets/projects/pms/pms-1.png'
import pmsThumbD from '../assets/projects/pms/pms-1.png'

import { ProjectType } from '../types/data';

export const Projects: ProjectType[] = [
  {
    category:'personal',
    section: 'projects',
    year:'2025',
    thumbnail: foreverThumb,
    thumbnailDesktop: foreverThumbD,
    name: "Forever - Fashion Ecommerce",
    desc1: "Forever is a feature-rich, scalable e-commerce platform tailored for the fashion industry. It features dynamic product filtering, inventory management, and order tracking. Offering a comprehensive solution for multi-vendor operations.",
    frontend: ['React', 'Tailwind.css', 'Vite'],
    backend: ['MongoDB', 'ExpressJS', 'NodeJS', 'Vercel'],
    url:"https://forever-frontend-eight-blush.vercel.app/",
    github:"https://github.com/Chillpill23/Forever"
  },
  {
    category:'personal',
    section: 'projects',
    year:'2025',
    thumbnail: yhThumb,
    thumbnailDesktop: yhThumbD,
    name: "York Hamilton - Landing Page",
    desc1: "A homepage concept design for York Hamilton featuring a sleek, modern layout with a professional aesthetic that showcases projects and services effectively.",
    frontend: ['React', 'Typescript', 'Sass / Scss', 'Vite'],
    url:"https://chillpill23.github.io/YorkHamilton/",
    github:"https://github.com/Chillpill23/YorkHamilton"
  },
  {
    category:'work',
    section: 'projects',
    year:'2024',
    thumbnail: ezThumb,
    thumbnailDesktop: ezThumbD,
    name: "EZ Oil - Automotive Ecommerce",
    desc1: "I developed a custom e-commerce solution for an oil drain valve manufacturer, handling tailored design implementation, feature development, and Core Web Vitals optimization to enhance performance and boost user engagement.",
    frontend: ['HTML', 'CSS', 'Javascript','JQuery', 'Bootstrap'],
    backend: ['PHP'],
  },
  {
    category:'work',
    section: 'projects',
    year:'2024',
    thumbnail: wccThumb,
    thumbnailDesktop: wccThumbD,
    name: "Wizard Cooling - Automotive Ecommerce",
    desc1: "I engineered a performance-optimized e-commerce platform for a high-performance radiator manufacturer, delivering custom design integration, advanced feature development, and SEO to ensure fast load times and improved user experience.",
    frontend: ['HTML', 'CSS', 'Javascript','JQuery', 'Bootstrap'],
    backend: ['PHP'],
  },
  {
    category:'work',
    section: 'projects',
    year:'2024',
    thumbnail: wcmThumb,
    thumbnailDesktop: wcmThumbD,
    name: "Westcoast Metric - Automotive Ecommerce",
    desc1: "I built a customized e-commerce solution for West Coast Metric, a classic Volkswagen parts provider, focusing on personalized design, feature-rich development, and performance tuning through Search Engine Optimization to improve speed, usability, and customer engagement.",
    frontend: ['HTML', 'CSS', 'Javascript','JQuery', 'Bootstrap'],
    backend: ['PHP'],
  },
    {
    category:'work',
    section: 'projects',
    year:'2024',
    thumbnail: pmsThumb,
    thumbnailDesktop: pmsThumbD,
    name: "Prestige Motorsportss - Automotive Ecommerce",
    desc1: "I engineered a custom e-commerce solution for Prestige Motorsports, delivering tailored design integration, robust feature development, and SEO enhancements to boost search visibility and increase user engagement.",
    frontend: ['HTML', 'CSS', 'Javascript','JQuery', 'Bootstrap'],
    backend: ['PHP'],
  },
  {
    category:'personal',
    section: 'projects',
    year:'2025',
    thumbnail: klimateThumb as string,
    thumbnailDesktop:klimateThumbD as string,
    name: "Klimate Weather App",
    desc1: "A Weather forecast application that provides comprehensive information sourced from OpenWeatherMap, including 5-day forecasts, weather data, temperatures, search feature, and a favorites list for quick access to your preferred cities.",
    frontend: ['React', 'Tailwind.css', 'Typescript', 'Shadcn UI'],
    backend: ['MongoDB', 'ExpressJS', 'NodeJS','Tanstack Query', 'Vercel'],
    url:"https://klimate-mu.vercel.app/",
    github:"https://github.com/Chillpill23/Klimate"
  },
];
