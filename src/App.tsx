import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventOverview from './components/EventOverview'
import ChallengeTracks from './components/ChallengeTracks'
import ProjectIdeas from './components/ProjectIdeas'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Schedule from './components/Schedule'
import Prizes from './components/Prizes'
import JudgingCriteria from './components/JudgingCriteria'
import Judges from './components/Judges'
import Sponsors from './components/Sponsors'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import CursorReticle from './components/CursorReticle'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo focus:px-4 focus:py-2 focus:font-display focus:font-semibold focus:text-midnight"
      >
        Skip to content
      </a>
      <CursorReticle />
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
        <JudgingCriteria />
        <Judges />
        <Sponsors />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
