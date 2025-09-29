import yhThumb from '../assets/projects/yh/yh-1.png'
import yhHover from '../assets/projects/yh/yh-2.png'

import foreverThumb from '../assets/projects/forever/forever-1.png'
import foreverHover from '../assets/projects/forever/forever-2.png'

import klimateThumb from '../assets/projects/klimate/klimate-thumb.webp'
import klimateHover from '../assets/projects/klimate/klimate-thumb-d.webp'

import ezThumb from '../assets/projects/ez/ez-1.png'
import ezHover from '../assets/projects/ez/ez-2.png'

import wccThumb from '../assets/projects/wcc/wcc-1.png'
import wccHover from '../assets/projects/wcc/wcc-2.png'

import wcmThumb from '../assets/projects/wcm/wcm-1.png'
import wcmHover from '../assets/projects/wcm/wcm-2.png'

import pmsThumb from '../assets/projects/pms/pms-1.png'
import pmsHover from '../assets/projects/pms/pms-2.png'

import exeThumb from '../assets/projects/exe/exe-1.png'
import exeHover from '../assets/projects/exe/exe-2.png'

import { ProjectType } from '../types/data';

export const Projects: ProjectType[] = [
  {
    category:'personal',
    section: 'projects',
    type:'Fashion Ecommerce',
    year:'2025',
    featured:true,
    thumbnail: foreverThumb,
    thumbnailHover: foreverHover,
    name: "Forever",
    desc1: "Forever is a feature-rich, scalable e-commerce platform tailored for the fashion industry. It features dynamic product filtering, inventory management, and order tracking. Offering a comprehensive solution for multi-vendor operations.",
    frontend: ['React', 'Tailwind.css', 'Vite'],
    backend: ['MongoDB', 'ExpressJS', 'NodeJS', 'Vercel'],
    url:"https://forever-frontend-eight-blush.vercel.app/",
    github:"https://github.com/Chillpill23/Forever"
  },
  {
    category:'work',
    section: 'projects',
    type:'Automotive Ecommerce',
    year:'2024',
    featured:false,
    thumbnail: ezThumb,
    thumbnailHover: ezHover,
    name: "EZ Oil",
    desc1: "I developed a custom e-commerce solution for an oil drain valve manufacturer, handling tailored design implementation, feature development, and Core Web Vitals optimization to enhance performance and boost user engagement.",
    frontend: ['HTML', 'CSS', 'Javascript','JQuery', 'Bootstrap'],
    backend: ['PHP'],
    url:"https://ezoildrainvalve.com/",
  },
  {
    category:'work',
    section: 'projects',
    type:'Automotive Ecommerce',
    year:'2024',
    featured:true,
    thumbnail: wccThumb,
    thumbnailHover: wccHover,
    name: "Wizard Cooling",
    desc1: "I engineered a performance-optimized e-commerce platform for a high-performance radiator manufacturer, delivering custom design integration, advanced feature development, and SEO to ensure fast load times and improved user experience.",
    frontend: ['HTML', 'CSS', 'Javascript','JQuery', 'Bootstrap'],
    backend: ['PHP'],
    url:"https://wizardcooling.com/",
  },
  {
    category:'work',
    section: 'projects',
    type:'Automotive Ecommerce',
    year:'2024',
    featured:false,
    thumbnail: wcmThumb,
    thumbnailHover: wcmHover,
    name: "Westcoast Metric",
    desc1: "I built a customized e-commerce solution for West Coast Metric, a classic Volkswagen parts provider, focusing on personalized design, feature-rich development, and performance tuning through Search Engine Optimization to improve speed, usability, and customer engagement.",
    frontend: ['HTML', 'CSS', 'Javascript','JQuery', 'Bootstrap'],
    backend: ['PHP'],
    url:"https://www.westcoastmetric.com/",
  },
    {
    category:'work',
    section: 'projects',
    type:'Automotive Ecommerce',
    year:'2024',
    featured:false,
    thumbnail: pmsThumb,
    thumbnailHover: pmsHover,
    name: "Prestige Motorsports",
    desc1: "I engineered a custom e-commerce solution for Prestige Motorsports, delivering tailored design integration, robust feature development, and SEO enhancements to boost search visibility and increase user engagement.",
    frontend: ['HTML', 'CSS', 'Javascript','JQuery', 'Bootstrap'],
    backend: ['PHP'],
    url:"https://shop.prestigemoto.com/",
  },
  {
    category:'client',
    section: 'projects',
    type:'Automotive Ecommerce',
    year:'2023',
    featured:false,
    thumbnail: exeThumb,
    thumbnailHover:exeHover,
    name: "ExergyPerformance",
    desc1: "An ecommerce website built as the platform for ExergyPerformance one of the leading retailes/manufacturers of high performance diesel parts in the U.S.",
    frontend: ['HTML', 'CSS', 'Javascript', 'JQuery', 'Bootstrap'],
    backend: ['PHP'],
    url:"https://www.exergyperformance.com/",
  },
  // {
  //   category:'personal',
  //   section: 'projects',
  //   type:'Weather App',
  //   year:'2025',
  //   featured:false,
  //   thumbnail: klimateThumb as string,
  //   thumbnailHover:klimateHover as string,
  //   name: "Klimate",
  //   desc1: "A Weather forecast application that provides comprehensive information sourced from OpenWeatherMap, including 5-day forecasts, weather data, temperatures, search feature, and a favorites list for quick access to your preferred cities.",
  //   frontend: ['React', 'Tailwind.css', 'Typescript', 'Shadcn UI'],
  //   backend: ['MongoDB', 'ExpressJS', 'NodeJS','Tanstack Query', 'Vercel'],
  //   url:"https://klimate-mu.vercel.app/",
  //   github:"https://github.com/Chillpill23/Klimate"
  // },
  // {
  //   category:'personal',
  //   section: 'projects',
  //   type:'Landing Page Concept',
  //   year:'2025',
  //   featured:false,
  //   thumbnail: yhThumb,
  //   thumbnailHover: yhHover,
  //   name: "York Hamilton",
  //   desc1: "A homepage concept design for York Hamilton featuring a sleek, modern layout with a professional aesthetic that showcases projects and services effectively.",
  //   frontend: ['React', 'Typescript', 'Sass / Scss', 'Vite'],
  //   url:"https://chillpill23.github.io/YorkHamilton/",
  //   github:"https://github.com/Chillpill23/YorkHamilton"
  // },
];
