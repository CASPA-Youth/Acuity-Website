import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion } from 'framer-motion'

type Shot = {
  id: number
  x: number
  y: number
}

const CURSOR_SIZE = 75

export default function CursorReticle() {
  const reduce = useReducedMotion()
  const pointerX = useMotionValue(-100)
  const pointerY = useMotionValue(-100)
  const [visible, setVisible] = useState(false)
  const [shots, setShots] = useState<Shot[]>([])
  const shotId = useRef(0)
  const hasPosition = useRef(false)

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return

    document.documentElement.classList.add('has-custom-cursor')

    const move = (event: PointerEvent) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)

      if (!hasPosition.current) {
        pointerX.jump(event.clientX)
        pointerY.jump(event.clientY)
        hasPosition.current = true
      }

      setVisible(true)
    }
    const hide = () => {
      hasPosition.current = false
      setVisible(false)
    }
    const fire = (event: PointerEvent) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
      pointerX.jump(event.clientX)
      pointerY.jump(event.clientY)

      const id = shotId.current++
      setShots((current) => [...current, { id, x: event.clientX, y: event.clientY }])
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
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [pointerX, pointerY, reduce])

  if (reduce) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[55] hidden md:block">
      <motion.div
        className="fixed"
        style={{
          left: pointerX,
          top: pointerY,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          marginLeft: -CURSOR_SIZE / 2,
          marginTop: -CURSOR_SIZE / 2,
        }}
        animate={{ opacity: visible ? 0.9 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <img
          src="/scope.png"
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_0_7px_rgba(144,91,244,0.45)]"
        />
      </motion.div>

      {shots.map((shot) => (
        <span
          key={shot.id}
          className="fixed h-5 w-5"
          style={{ left: shot.x, top: shot.y, marginLeft: -10, marginTop: -10 }}
        >
          <motion.span
            className="block h-full w-full rounded-full border border-indigo shadow-[0_0_12px_rgba(144,91,244,0.75)]"
            initial={{ opacity: 1, scale: 0.25 }}
            animate={{ opacity: 0, scale: 4.5 }}
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
