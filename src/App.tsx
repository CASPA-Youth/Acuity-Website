import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
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
import { event, navLinks } from './data/site'

export default function App() {
  const path = window.location.pathname === '/'
    ? '/about'
    : window.location.pathname.replace(/\/$/, '')
  const page = ['/about', '/themes', '/schedule', '/prizes', '/faq'].includes(path)
    ? path
    : '/about'
  const [isLoading, setIsLoading] = useState(() => {
    try {
      return sessionStorage.getItem('acuity-intro-seen') !== 'true'
    } catch {
      return true
    }
  })
  const finishLoading = useCallback(() => {
    try {
      sessionStorage.setItem('acuity-intro-seen', 'true')
    } catch {
      // The site still works if storage is unavailable.
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const label = navLinks.find((link) => link.href === page)?.label ?? 'About'
    document.title = `${label} · ${event.name}`

    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(window.location.hash)?.scrollIntoView()
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [page])

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
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo focus:px-4 focus:py-2 focus:font-display focus:font-semibold focus:text-midnight"
        >
          Skip to content
        </a>
        {!isLoading && <CursorReticle />}
        <Navbar />
        <main id="main-content" className={page === '/about' ? undefined : 'pt-[72px]'}>
          {page === '/about' && (
            <>
              <Hero play={!isLoading} />
              <EventOverview />
              <Benefits />
              <HowItWorks />
            </>
          )}
          {page === '/themes' && (
            <>
              <ChallengeTracks />
              <ProjectIdeas />
            </>
          )}
          {page === '/schedule' && <Schedule />}
          {page === '/prizes' && (
            <>
              <Prizes />
              <Sponsors />
            </>
          )}
          {page === '/faq' && (
            <>
              <FAQ />
              <FinalCTA />
            </>
          )}
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
