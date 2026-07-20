import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Compass } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { event } from '../data/site'

export default function Hero({ play = true }: { play?: boolean }) {
  const reduce = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (play && !reduce) {
      video.currentTime = 0
      void video.play().catch(() => {
        // Muted inline video should autoplay; the browser may still decline it.
      })
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [play, reduce])

  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <video
          ref={videoRef}
          className="absolute left-[60%] top-1/2 h-auto w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:w-[150%] lg:w-full"
          loop={!reduce}
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
        >
          <source src="/archer-fox-v4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight from-[5%] via-midnight/80 via-[48%] to-midnight/5" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-[520px] w-[520px] rotate-45 border border-indigo/20"
      />

      <div className="shell relative z-10 grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
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
              {event.theme}
            </span>
            <span className="text-faint">·</span>
            <span className="text-faint">by {event.organizer}</span>
          </motion.div>

          <h1 className="hero-glitch-title mt-6 font-display font-bold leading-[0.92]">
            <motion.span
              className="hero-glitch hero-glitch-primary block text-5xl sm:text-6xl lg:text-[5.6rem]"
              data-text="Acuity Hacks"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              Acuity Hacks
            </motion.span>
            <motion.span
              className="hero-glitch mt-1 block text-5xl text-indigo sm:text-6xl lg:text-[5.6rem]"
              data-text={event.tagline}
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
              className="group inline-flex items-center gap-2 rounded-[8px] bg-indigo px-7 py-3.5 font-display font-semibold text-midnight shadow-[0_14px_36px_-16px_rgba(144,91,244,0.55)] transition-all hover:-translate-y-0.5 hover:bg-indigo-soft"
            >
              {event.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/themes"
              className="group inline-flex items-center gap-2 rounded-[10px] bg-heart px-7 py-3.5 font-display font-semibold text-seashell transition-all hover:-translate-y-0.5 hover:bg-indigo hover:text-midnight"
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

      </div>

    </section>
  )
}
