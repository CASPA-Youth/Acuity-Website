import { useEffect, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { MousePointerClick, X } from 'lucide-react'
import { Reveal, SectionHeader } from './primitives'
import { event } from '../data/site'
import { sponsorTiers } from '../data/content'
import {
  sponsorPodiumSettings,
  type ResponsivePodiumPlacement,
} from '../data/sponsorPodiumSettings'

// Keep the original sponsorship copy and cards ready for the next iteration.
const showSponsorDetails = false

type PodiumPieceStyle = CSSProperties & Record<`--piece-${string}`, string>

function pieceStyle(placement: ResponsivePodiumPlacement): PodiumPieceStyle {
  return {
    '--piece-x-mobile': `${placement.mobile.x}%`,
    '--piece-bottom-mobile': `${placement.mobile.bottom}%`,
    '--piece-width-mobile': `${placement.mobile.width}%`,
    '--piece-x-tablet': `${placement.tablet.x}%`,
    '--piece-bottom-tablet': `${placement.tablet.bottom}%`,
    '--piece-width-tablet': `${placement.tablet.width}%`,
    '--piece-x-desktop': `${placement.desktop.x}%`,
    '--piece-bottom-desktop': `${placement.desktop.bottom}%`,
    '--piece-width-desktop': `${placement.desktop.width}%`,
  }
}

export default function Sponsors() {
  const reduce = useReducedMotion()
  const [activeTier, setActiveTier] = useState<(typeof sponsorTiers)[number] | null>(null)

  useEffect(() => {
    if (!activeTier) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveTier(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [activeTier])

  const selectTier = (tier: string) => {
    setActiveTier((current) => {
      if (current?.tier === tier) return null
      return sponsorTiers.find((sponsor) => sponsor.tier === tier) ?? null
    })
  }

  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="section-line relative isolate overflow-hidden scroll-mt-24 bg-[#170b3b]"
    >
      <h2 id="sponsors-title" className="sr-only">
        Sponsors &amp; Partners
      </h2>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] h-[42vw] max-h-[560px] w-[72vw] max-w-[960px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/20 blur-[110px]"
      />

      <div className="shell relative z-10 py-[clamp(2rem,5vw,4.5rem)]">
        <div className="pointer-events-none absolute inset-x-5 top-[clamp(2.5rem,6vw,5rem)] z-10 sm:inset-x-10">
          <SectionHeader
            index="07"
            kicker="Sponsors & Partners"
            title={<>Help student ideas take shape.</>}
            intro="We’re welcoming financial and in-kind partners who want to support the next generation of builders with tools, food, prizes, swag, and event resources."
            className="mx-auto max-w-2xl text-center [&_.kicker]:justify-center [&_p]:mx-auto"
          />
          <div className="mx-auto mt-7 flex w-fit items-center gap-2 border border-indigo/30 bg-heart/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-soft">
            <MousePointerClick size={15} aria-hidden="true" />
            Click a fox or the podium to explore our sponsorship options
          </div>
        </div>

        <div
          className={`relative z-30 mx-auto mt-[clamp(7rem,11vw,10rem)] aspect-[1/1.08] w-full max-w-6xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:aspect-[4/3] lg:aspect-[16/11] ${
            activeTier
              ? '-translate-x-[18%] lg:-translate-x-[26%]'
              : 'translate-x-0'
          }`}
        >
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="View Gold sponsorship details"
            onClick={() => selectTier('Gold')}
            className="sponsor-podium-piece group z-30 cursor-pointer appearance-none border-0 bg-transparent p-0"
            style={pieceStyle(sponsorPodiumSettings.gold)}
          >
            <div className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-[1.035]">
              <motion.img
                src="/sponsors/gold.png"
                alt="Gold medal fox standing in first place"
                initial={reduce ? false : { opacity: 0, y: 90, scale: 0.86 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block w-full brightness-75 drop-shadow-[0_24px_30px_rgba(13,0,50,0.45)]"
              />
            </div>
          </button>

          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="View Silver sponsorship details"
            onClick={() => selectTier('Silver')}
            className="sponsor-podium-piece group z-30 cursor-pointer appearance-none border-0 bg-transparent p-0"
            style={pieceStyle(sponsorPodiumSettings.silver)}
          >
            <div className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-[1.035]">
              <motion.img
                src="/sponsors/silver.png"
                alt="Silver medal fox standing in second place"
                initial={reduce ? false : { opacity: 0, x: -55, y: 70, rotate: -5 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="block w-full brightness-75 drop-shadow-[0_22px_28px_rgba(13,0,50,0.42)]"
              />
            </div>
          </button>

          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="View Bronze sponsorship details"
            onClick={() => selectTier('Bronze')}
            className="sponsor-podium-piece group z-30 cursor-pointer appearance-none border-0 bg-transparent p-0"
            style={pieceStyle(sponsorPodiumSettings.bronze)}
          >
            <div className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-[1.035]">
              <motion.img
                src="/sponsors/bronze.png"
                alt="Bronze medal fox standing in third place"
                initial={reduce ? false : { opacity: 0, x: 55, y: 70, rotate: 5 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="block w-full brightness-75 drop-shadow-[0_22px_28px_rgba(13,0,50,0.42)]"
              />
            </div>
          </button>

          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="View In-kind or Friend sponsorship details"
            onClick={() => selectTier('In-kind / Friend')}
            className="sponsor-podium-piece group z-20 cursor-pointer appearance-none border-0 bg-transparent p-0"
            style={pieceStyle(sponsorPodiumSettings.podium)}
          >
            <div className="transition-transform duration-300 group-hover:scale-[1.015]">
              <motion.img
                src="/sponsors/podium.png"
                alt=""
                initial={reduce ? false : { opacity: 0, y: 65, scale: 0.96 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block w-full brightness-75 drop-shadow-[0_30px_38px_rgba(5,0,25,0.55)]"
              />
            </div>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTier && (
            <motion.aside
              key={activeTier.tier}
              role="region"
              aria-live="polite"
              aria-labelledby="active-sponsor-title"
              initial={reduce ? false : { opacity: 0, x: 70, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: 45 }}
              transition={{ duration: reduce ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="clip-sharp absolute inset-x-5 bottom-6 z-20 border border-indigo/45 bg-midnight/95 p-7 shadow-[0_28px_80px_rgba(5,0,25,0.62)] backdrop-blur-md sm:inset-x-10 sm:bottom-10 sm:p-9 lg:bottom-auto lg:left-auto lg:right-[-2rem] lg:top-[54%] lg:-mt-36 lg:w-[min(46vw,590px)] lg:p-11"
            >
              <button
                type="button"
                aria-label="Close sponsorship details"
                onClick={() => setActiveTier(null)}
                className="absolute right-5 top-5 grid h-10 w-10 place-items-center border border-line text-muted transition-colors hover:border-indigo/60 hover:text-seashell"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div className="flex items-center gap-3 pr-14 font-mono text-[12px] uppercase tracking-[0.16em] text-indigo">
                <span className="diamond" />
                {activeTier.tier} sponsor
              </div>
              <h3
                id="active-sponsor-title"
                className="mt-5 font-display text-5xl font-bold text-seashell sm:text-6xl"
              >
                {activeTier.price}
              </h3>
              <p className="mt-5 font-body text-lg leading-relaxed text-muted text-pretty sm:text-xl">
                {activeTier.benefits}
              </p>
              <a
                href={event.contactLink}
                className="mt-7 inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.12em] text-indigo transition-colors hover:text-indigo-soft"
              >
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </motion.aside>
          )}
        </AnimatePresence>

        {showSponsorDetails && (
          <div className="section-pad">
            <SectionHeader
              index="07"
              kicker="Sponsors & Partners"
              title={<>Help student ideas take shape.</>}
              intro="We’re welcoming financial and in-kind partners who want to support the next generation of builders with tools, food, prizes, swag, and event resources."
              className="max-w-2xl"
            />

            <div className="section-content-gap grid gap-4 md:grid-cols-2">
              {sponsorTiers.map((sponsor, index) => (
                <Reveal
                  key={sponsor.tier}
                  delay={index * 0.05}
                  className="clip-sharp border border-indigo/25 bg-heart/25 p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo">
                        {sponsor.tier} sponsor
                      </div>
                      <div className="mt-3 font-display text-3xl font-semibold text-seashell">
                        {sponsor.price}
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-faint">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-6 font-body leading-relaxed text-muted text-pretty">
                    {sponsor.benefits}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-6 flex flex-col items-start justify-between gap-5 border border-line bg-midnight/60 p-7 sm:flex-row sm:items-center sm:p-8">
              <p className="max-w-2xl font-body leading-relaxed text-muted">
                Interested in supporting student builders with funding, prizes, food, tools, or event resources?
              </p>
              <a href={event.contactLink} className="flex-shrink-0 font-mono text-[13px] uppercase text-indigo hover:text-indigo-soft">
                Get in touch →
              </a>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  )
}
