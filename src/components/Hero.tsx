import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Compass } from 'lucide-react'
import { event } from '../data/site'
import AgentTrace from './AgentTrace'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-[520px] w-[520px] rotate-45 border border-indigo/20"
      />

      <div className="shell relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
        {/* left: editorial identity */}
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="kicker flex flex-wrap items-center gap-x-3 gap-y-1"
          >
            <span className="inline-flex items-center gap-2">
              <span className="diamond" />
              Themes: {event.theme}
            </span>
            <span className="text-faint">·</span>
            <span className="text-faint">by {event.organizer}</span>
          </motion.div>

          <h1 className="mt-6 font-display font-bold leading-[0.92]">
            <motion.span
              className="block text-5xl sm:text-6xl lg:text-[5.6rem]"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              Acuity Hacks
            </motion.span>
            <motion.span
              className="mt-1 block text-5xl text-indigo sm:text-6xl lg:text-[5.6rem]"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
            >
              {event.tagline}
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-xl font-body text-lg leading-relaxed text-muted text-pretty"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            {event.subtagline} {event.description}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-[10px] bg-indigo px-7 py-3.5 font-display font-semibold text-midnight shadow-[0_14px_36px_-12px_rgba(144,91,244,0.8)] transition-all hover:-translate-y-0.5 hover:bg-indigo-soft"
            >
              {event.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#challenges"
              className="group inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-indigo/70 px-7 py-3.5 font-display font-semibold text-indigo transition-all hover:-translate-y-0.5 hover:border-indigo hover:bg-indigo/10"
            >
              <Compass size={18} />
              {event.ctaSecondary}
            </a>
          </motion.div>

          {/* floating event metadata */}
          <motion.dl
            className="mt-12 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
          >
            {[
              { k: 'Date', v: event.dateShort },
              { k: 'Location', v: event.location, href: event.mapsLink },
              { k: 'Deadline', v: event.registrationDeadline },
            ].map((m) => (
              <div key={m.k} className="bg-midnight px-4 py-4 sm:px-5">
                <dt className="font-mono text-[11px] uppercase text-faint">
                  {m.k}
                </dt>
                <dd className="mt-1.5 font-display text-sm font-semibold text-seashell sm:text-[15px]">
                  {m.href ? (
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-indigo/50 underline-offset-4 transition-colors hover:text-indigo"
                    >
                      {m.v}
                    </a>
                  ) : (
                    m.v
                  )}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* right: build terminal + mark */}
        <motion.div
          className="relative"
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto w-full max-w-xl">
            <AgentTrace />
            <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase text-faint">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo animate-blink" />
                {event.registrationStatus}
              </span>
              <span>2 days · hybrid</span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
