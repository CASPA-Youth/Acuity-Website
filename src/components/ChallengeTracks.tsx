import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeader } from './primitives'
import { tracks } from '../data/content'

export default function ChallengeTracks() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const current = tracks[active]

  const go = (delta: number) => {
    setDirection(delta)
    setActive((index) => (index + delta + tracks.length) % tracks.length)
  }

  const select = (index: number) => {
    if (index === active) return
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  return (
    <section id="challenges" className="section-line relative scroll-mt-24">
      <div className="shell py-24 lg:py-36">
        <SectionHeader
          index="01"
          kicker="Possible Themes"
          title={<>Five possibilities. One final reveal.</>}
          intro="Prepare to think broadly. The final theme will be selected from this pool and revealed when the hackathon begins."
          className="max-w-2xl"
        />

        <div
          className="mt-16 overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Possible hackathon themes"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={current.id}
              custom={direction}
              role="group"
              aria-roledescription="slide"
              aria-label={`${active + 1} of ${tracks.length}: ${current.title}`}
              initial={reduce ? false : { opacity: 0, x: direction * 56 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: direction * -56 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              drag={reduce ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -55) go(1)
                if (info.offset.x > 55) go(-1)
              }}
              className="clip-sharp relative min-h-[460px] cursor-grab overflow-hidden border border-indigo/25 bg-heart/25 p-8 active:cursor-grabbing sm:p-12 lg:min-h-[500px] lg:p-16"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute right-4 top-0 font-display text-[13rem] font-bold leading-none text-indigo/[0.055] sm:right-10 sm:text-[20rem]"
              >
                {current.index}
              </div>

              <div className="relative max-w-4xl">
                <span className="inline-flex rounded-full border border-indigo/50 px-3 py-1 font-mono text-[11px] uppercase text-muted">
                  {current.tag}
                </span>
                <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] text-seashell text-balance sm:text-6xl lg:text-7xl">
                  {current.title}
                </h1>
                <p className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-muted text-pretty">
                  {current.description}
                </p>
                <a
                  href="#ideas"
                  className="group mt-10 inline-flex w-fit items-center gap-2 font-mono text-[12px] uppercase text-indigo transition-colors hover:text-indigo-soft"
                >
                  Explore project formats
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2" aria-label="Choose a theme slide">
              {tracks.map((track, index) => (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => select(index)}
                  aria-label={`Show ${track.title}`}
                  aria-current={index === active ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === active ? 'w-9 bg-indigo' : 'w-2.5 bg-indigo/30 hover:bg-indigo/60'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <span className="font-mono text-[11px] uppercase text-faint">
                {String(active + 1).padStart(2, '0')} / {String(tracks.length).padStart(2, '0')} · one revealed at kickoff
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous theme"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-indigo/60 hover:bg-indigo/10 hover:text-seashell"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next theme"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-indigo/60 hover:bg-indigo/10 hover:text-seashell"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
