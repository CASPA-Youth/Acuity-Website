import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const LINES = [
  { p: '›', t: 'acuity start "themes revealed"', c: 'in' },
  { p: '↳', t: 'find a problem worth solving', c: 'out' },
  { p: '↳', t: 'sketch · choose tools · divide work', c: 'out' },
  { p: '↳', t: 'build · test · credit sources', c: 'out' },
  { p: '✓', t: 'prototype ready — present.', c: 'ok' },
]

const color: Record<string, string> = {
  in: 'text-seashell',
  out: 'text-muted',
  ok: 'text-indigo',
}

export default function AgentTrace() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(reduce ? LINES.length : 0)
  const [typed, setTyped] = useState(reduce ? 999 : 0)
  const timer = useRef<number>()
  const effectiveVisible = reduce ? LINES.length : visible

  useEffect(() => {
    if (reduce) return
    // Type out the current line, then reveal the next, looping gently.
    const current = LINES[visible % LINES.length]
    if (visible >= LINES.length) {
      timer.current = window.setTimeout(() => {
        setVisible(0)
        setTyped(0)
      }, 2600)
      return
    }
    if (typed < current.t.length) {
      timer.current = window.setTimeout(() => setTyped((n) => n + 1), 34)
    } else {
      timer.current = window.setTimeout(() => {
        setVisible((v) => v + 1)
        setTyped(0)
      }, 420)
    }
    return () => window.clearTimeout(timer.current)
  }, [visible, typed, reduce])

  return (
    <div
      className="clip-sharp w-full overflow-hidden rounded-lg border border-line bg-midnight font-mono text-[14px] shadow-[0_30px_80px_-40px_rgba(15,3,45,0.9)] sm:text-[15px]"
      role="img"
      aria-label="A hackathon team planning, building, testing, and presenting a prototype."
    >
      <div className="flex items-center gap-2 border-b border-line px-5 py-4">
        <span className="h-2.5 w-2.5 rounded-full bg-heart" />
        <span className="h-2.5 w-2.5 rounded-full bg-indigo/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-indigo/30" />
        <span className="ml-2 text-[11px] text-faint">build.trace</span>
      </div>
      <div className="min-h-[230px] space-y-3 px-6 py-6" aria-hidden="true">
        {LINES.map((line, i) => {
          const isCurrent = i === effectiveVisible
          const isDone = i < effectiveVisible
          if (!isCurrent && !isDone) {
            return (
              <div key={i} className="h-[22px]" />
            )
          }
          const text = isDone ? line.t : line.t.slice(0, typed)
          return (
            <div key={i} className="flex items-start gap-2 leading-[22px]">
              <span className="text-indigo">{line.p}</span>
              <span className={color[line.c]}>
                {text}
                {isCurrent && !reduce && (
                  <span className="ml-0.5 inline-block h-[13px] w-[7px] translate-y-[1px] animate-blink bg-indigo align-middle" />
                )}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
