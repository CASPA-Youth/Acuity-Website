import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventOverview from './components/EventOverview'
import ChallengeTracks from './components/ChallengeTracks'
import ProjectIdeas from './components/ProjectIdeas'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Schedule from './components/Schedule'
import Prizes from './components/Prizes'
import Sponsors from './components/Sponsors'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import CursorReticle from './components/CursorReticle'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const finishLoading = useCallback(() => setIsLoading(false), [])

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={finishLoading} />}
      </AnimatePresence>

      <motion.div
        aria-hidden={isLoading || undefined}
        initial={false}
        animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 1.01 : 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo focus:px-4 focus:py-2 focus:font-display focus:font-semibold focus:text-midnight"
        >
          Skip to content
        </a>
        {!isLoading && <CursorReticle />}
        <Navbar />
        <main>
          <Hero />
          <EventOverview />
          <ChallengeTracks />
          <ProjectIdeas />
          <Benefits />
          <HowItWorks />
          <Schedule />
          <Prizes />
          <Sponsors />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
