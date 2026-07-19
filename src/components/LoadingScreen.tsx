import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

type LoadingScreenProps = {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const reduce = useReducedMotion()

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // The longer timeout is only a fallback if a browser cannot report playback ending.
    const timer = window.setTimeout(onComplete, reduce ? 350 : 10000)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [onComplete, reduce])

  return (
    <motion.div
      className="loading-screen fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-midnight px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0.01 : 0.55, ease: [0.76, 0, 0.24, 1] }}
      role="status"
      aria-live="polite"
      aria-label="Loading Acuity Hacks"
    >
      {reduce ? (
        <motion.img
          src="/logo.png"
          alt=""
          className="h-32 w-24 object-contain sm:h-40 sm:w-32"
        />
      ) : (
        <motion.video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={onComplete}
          initial={{ opacity: 0, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <source src="/acuity-intro-v3.mp4" type="video/mp4" />
        </motion.video>
      )}

      {!reduce && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-midnight/90 via-midnight/35 to-transparent"
        />
      )}

      <motion.div
        className={reduce
          ? 'relative flex flex-col items-center'
          : 'absolute inset-x-0 bottom-[clamp(1.75rem,6vh,4.5rem)] z-10 flex flex-col items-center px-6'
        }
        animate={reduce ? undefined : { y: [0, 0, 90], opacity: [1, 1, 0] }}
        transition={reduce ? undefined : {
          duration: 8.021,
          times: [0, 0.8753, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
      >

        <div className={reduce ? 'mt-9 overflow-hidden pb-1' : 'overflow-hidden pb-1'}>
          <motion.p
            className="font-display text-4xl font-bold tracking-[-0.04em] text-seashell sm:text-5xl"
            initial={reduce ? false : { y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Acuity <span className="text-indigo">Hacks</span>
          </motion.p>
        </div>

        <motion.div
          className="mt-7 w-52 sm:w-64"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: reduce ? 0 : 0.55 }}
        >
          <div className="h-px overflow-hidden bg-indigo/20">
            <motion.div
              className="h-full origin-left bg-indigo shadow-[0_0_12px_rgba(144,91,244,0.9)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduce ? 0.01 : 7.471, delay: reduce ? 0 : 0.55, ease: 'linear' }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            <span>System access</span>
            <motion.span
              animate={reduce ? undefined : { opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              Initializing
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
