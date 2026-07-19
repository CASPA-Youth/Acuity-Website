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
          title={<>Two themes. Revealed at kickoff.</>}
          intro="We’ll share hints as the event gets closer. Two final challenges will be selected from this pool, and every team will discover them together when building begins."
          className="max-w-2xl"
        />

        <div
          className="mt-16 overflow-hidden rounded-lg border border-indigo/25 bg-heart/25"
          role="region"
          aria-roledescription="carousel"
          aria-label="Possible hackathon themes"
        >
          <div className="relative min-h-[390px] overflow-hidden p-7 sm:p-10 lg:min-h-[430px] lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute right-4 top-0 font-display text-[12rem] font-bold leading-none text-indigo/[0.055] sm:right-10 sm:text-[18rem]"
            >
              {current.index}
            </div>

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
                className="relative z-10 flex min-h-[310px] cursor-grab flex-col justify-between active:cursor-grabbing lg:min-h-[320px]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[13px] text-indigo">{current.index}</span>
                  <span className="font-mono text-[11px] uppercase text-faint">
                    Possible theme
                  </span>
                </div>

                <div className="max-w-3xl py-10">
                  <span className="inline-flex rounded-full border border-indigo/50 px-3 py-1 font-mono text-[11px] uppercase text-muted">
                    {current.tag}
                  </span>
                  <h3 className="mt-5 font-display text-4xl font-semibold leading-tight text-seashell text-balance sm:text-5xl lg:text-6xl">
                    {current.title}
                  </h3>
                  <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-muted text-pretty">
                    {current.description}
                  </p>
                </div>

                <a
                  href="/themes#ideas"
                  className="group inline-flex w-fit items-center gap-2 font-mono text-[12px] uppercase text-indigo transition-colors hover:text-indigo-soft"
                >
                  Explore project formats
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-5 border-t border-line px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
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
                {String(active + 1).padStart(2, '0')} / {String(tracks.length).padStart(2, '0')}
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
