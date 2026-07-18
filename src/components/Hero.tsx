import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, Compass } from 'lucide-react'
import { event } from '../data/site'
import AgentTrace from './AgentTrace'

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  // Cursor position drives the precision reticle (0–100% of the hero box).
  const mx = useMotionValue(58)
  const my = useMotionValue(42)
  const sx = useSpring(mx, { stiffness: 120, damping: 24, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 120, damping: 24, mass: 0.4 })

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set(((e.clientX - r.left) / r.width) * 100)
    my.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden pt-[72px]"
    >
      {/* precision field */}
      <div aria-hidden className="reticle-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-[520px] w-[520px] rotate-45 border border-indigo/20"
      />

      {/* precision reticle — the signature element */}
      <Reticle sx={sx} sy={sy} disabled={!!reduce} />

      <div className="shell relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
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
              { k: 'Location', v: event.location },
              { k: 'Deadline', v: event.registrationDeadline },
            ].map((m) => (
              <div key={m.k} className="bg-midnight px-4 py-4 sm:px-5">
                <dt className="font-mono text-[11px] uppercase text-faint">
                  {m.k}
                </dt>
                <dd className="mt-1.5 font-display text-sm font-semibold text-seashell sm:text-[15px]">
                  {m.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* right: agent terminal + mark */}
        <motion.div
          className="relative"
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-md">
            <img
              src="/logo-mark.png"
              alt=""
              aria-hidden
              className="absolute -right-4 -top-16 h-28 w-28 opacity-90 drop-shadow-[0_12px_48px_rgba(144,91,244,0.55)] sm:-top-20 sm:h-32 sm:w-32"
            />
            <AgentTrace />
            <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase text-faint">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo animate-blink" />
                registration open
              </span>
              <span>48h · 5 tracks</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* bottom hairline into next section */}
      <div aria-hidden className="section-line absolute inset-x-0 bottom-0" />
    </section>
  )
}

function Reticle({
  sx,
  sy,
  disabled,
}: {
  sx: ReturnType<typeof useSpring>
  sy: ReturnType<typeof useSpring>
  disabled: boolean
}) {
  const leftPct = useTransform(sx, (n) => `${n}%`)
  const topPct = useTransform(sy, (n) => `${n}%`)
  if (disabled) return null
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden md:block">
      <motion.div
        className="absolute inset-y-0 w-px bg-indigo/30"
        style={{ left: leftPct }}
      />
      <motion.div
        className="absolute inset-x-0 h-px bg-indigo/30"
        style={{ top: topPct }}
      />
      <motion.div
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-indigo/70"
        style={{ left: leftPct, top: topPct }}
      />
    </div>
  )
}
