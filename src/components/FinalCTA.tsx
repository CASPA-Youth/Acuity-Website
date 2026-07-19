import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { event } from '../data/site'

export default function FinalCTA() {
  const reduce = useReducedMotion()
  return (
    <section id="register" className="section-line relative overflow-hidden scroll-mt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-indigo/25"
      />

      <div className="shell section-pad relative text-center">
        <motion.img
          src="/logo.png"
          alt=""
          aria-hidden
          className="mx-auto h-20 w-auto drop-shadow-[0_12px_42px_rgba(144,91,244,0.3)]"
          initial={reduce ? false : { opacity: 0, y: 16, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="kicker mt-8 justify-center">{event.registrationStatus}</div>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[0.98] text-balance sm:text-5xl lg:text-[4.5rem]">
          Bring the idea.
          <br />
          <span className="text-indigo">We’ll bring the build sprint.</span>
        </h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-[10px] bg-indigo px-8 py-4 font-display text-lg font-semibold text-midnight transition-all hover:-translate-y-0.5 hover:bg-indigo-soft"
          >
            {event.ctaPrimary}
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={event.contactLink}
            className="font-mono text-[13px] uppercase text-muted transition-colors hover:text-indigo"
          >
            Need help? {event.contactEmail}
          </a>
        </div>
        <p id="registration-link" className="mt-4 font-mono text-[11px] uppercase text-faint">
          Registration is hosted securely on Luma.
        </p>
      </div>
    </section>
  )
}
