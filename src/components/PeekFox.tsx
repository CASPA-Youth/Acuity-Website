import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Peek = {
  id: number
  side: 'left' | 'right'
  top: number
}

export default function PeekFox() {
  const reduce = useReducedMotion()
  const [peek, setPeek] = useState<Peek | null>(null)
  const timerRef = useRef<number | null>(null)
  const nextSideRef = useRef<'left' | 'right'>('left')

  useEffect(() => {
    if (reduce) {
      setPeek(null)
      return
    }

    timerRef.current = window.setInterval(() => {
      const side = nextSideRef.current
      nextSideRef.current = side === 'left' ? 'right' : 'left'

      setPeek({
        id: Date.now(),
        side,
        top: 32 + Math.random() * 34,
      })
    }, 10000)

    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current)
    }
  }, [reduce])

  const finishPeek = () => {
    setPeek(null)
  }

  return (
    <AnimatePresence>
      {peek && (
        <motion.div
          key={peek.id}
          aria-hidden="true"
          className={`pointer-events-none absolute z-30 w-[clamp(188px,22.5vw,350px)] ${
            peek.side === 'left' ? 'left-0' : 'right-0'
          }`}
          style={{ top: `${peek.top}%` }}
          initial={{ x: peek.side === 'left' ? -80 : 80 }}
          animate={{ x: 0 }}
          exit={{ x: peek.side === 'left' ? -55 : 55 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="-translate-y-1/2">
            <video
              className={`block h-auto w-full ${peek.side === 'right' ? '-scale-x-100' : ''}`}
              autoPlay
              muted
              playsInline
              preload="auto"
              tabIndex={-1}
              onEnded={finishPeek}
              onError={finishPeek}
            >
              <source src="/peeking.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
