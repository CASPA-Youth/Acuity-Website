import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

/** Scroll-triggered reveal that quietly no-ops under prefers-reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

/** Mono numbered kicker — the brand's structural device. */
export function Kicker({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <div className="kicker flex items-center gap-2">
      {index && <span className="text-faint">{index}</span>}
      {index && <span className="text-faint">/</span>}
      <span>{children}</span>
    </div>
  )
}

export function SectionHeader({
  index,
  kicker,
  title,
  intro,
  className = '',
}: {
  index?: string
  kicker: string
  title: ReactNode
  intro?: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <Reveal>
        <Kicker index={index}>{kicker}</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] text-balance sm:text-4xl lg:text-[3.25rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-muted text-pretty">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  )
}

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
  external?: boolean
}

export function CTA({ children, href, variant = 'primary', className = '', external }: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-[10px] font-display font-semibold text-base px-7 py-3.5 transition-all duration-200 focus-visible:outline-2'
  const styles =
    variant === 'primary'
      ? 'bg-indigo text-midnight hover:bg-indigo-soft hover:-translate-y-0.5 active:translate-y-0 shadow-[0_10px_30px_-12px_rgba(144,91,244,0.5)]'
      : 'border-[1.5px] border-indigo/70 text-indigo hover:border-indigo hover:bg-indigo/10 hover:-translate-y-0.5 active:translate-y-0'
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
