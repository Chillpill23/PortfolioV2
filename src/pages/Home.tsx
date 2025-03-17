// Styles import
import '../styles/Home.css'
import '../styles/animations/Stars.css'

// Utils import
import { ScrollToTop } from '../utils';

// Section imports
import { Suspense, lazy } from "react";

import Hero from "../components/section/Hero"

const AboutSection = lazy(() => import("../components/section/About"))
const ExperienceSection = lazy(() => import("../components/section/Experience"))
const Projects = lazy(() => import("../components/section/Projects"))

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutSection />
        <ExperienceSection />
        <Projects />
      </Suspense>
      <ScrollToTop />
    </main>
  )
}
