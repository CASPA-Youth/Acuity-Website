import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion } from 'framer-motion'

type Shot = {
  id: number
  x: number
  y: number
}

export default function CursorReticle() {
  const reduce = useReducedMotion()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const [visible, setVisible] = useState(false)
  const [firing, setFiring] = useState(false)
  const [shots, setShots] = useState<Shot[]>([])
  const shotId = useRef(0)
  const recoilTimer = useRef<number>()

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return

    const move = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      setVisible(true)
    }
    const hide = () => setVisible(false)
    const fire = (event: PointerEvent) => {
      const id = shotId.current++
      setShots((current) => [...current, { id, x: event.clientX, y: event.clientY }])
      setFiring(true)
      window.clearTimeout(recoilTimer.current)
      recoilTimer.current = window.setTimeout(() => setFiring(false), 110)
    }

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', fire, { passive: true })
    document.documentElement.addEventListener('mouseleave', hide)
    window.addEventListener('blur', hide)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', fire)
      document.documentElement.removeEventListener('mouseleave', hide)
      window.removeEventListener('blur', hide)
      window.clearTimeout(recoilTimer.current)
    }
  }, [reduce, x, y])

  if (reduce) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[45] hidden md:block">
      <motion.div
        className="fixed inset-y-0 w-px bg-indigo/20"
        style={{ left: x, marginLeft: -0.5 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="fixed inset-x-0 h-px bg-indigo/20"
        style={{ top: y, marginTop: -0.5 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="fixed"
        style={{ left: x, top: y, width: 72, height: 72, marginLeft: -36, marginTop: -36 }}
        animate={{ opacity: visible ? 0.9 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <motion.img
          src="/scope.png"
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(144,91,244,0.5)]"
          animate={{
            scale: visible ? (firing ? 0.76 : 1) : 0.75,
            rotate: firing ? -8 : 0,
          }}
          transition={{ duration: firing ? 0.06 : 0.12, ease: 'easeOut' }}
        />
      </motion.div>

      {shots.map((shot) => (
        <span
          key={shot.id}
          className="fixed h-7 w-7"
          style={{ left: shot.x, top: shot.y, marginLeft: -14, marginTop: -14 }}
        >
          <motion.span
            className="block h-full w-full rounded-full border-2 border-indigo shadow-[0_0_18px_rgba(144,91,244,0.9)]"
            initial={{ opacity: 1, scale: 0.25 }}
            animate={{ opacity: 0, scale: 6 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() =>
              setShots((current) => current.filter((item) => item.id !== shot.id))
            }
          />
        </span>
      ))}
    </div>
  )
}
