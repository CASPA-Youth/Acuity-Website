import { useReducedMotion } from 'framer-motion'
import { SectionHeader, Reveal } from './primitives'
import { howItWorks } from '../data/content'

export default function HowItWorks() {
  const reduce = useReducedMotion()

  return (
    <section
      id="how"
      className="section-line relative isolate min-h-[700px] overflow-hidden scroll-mt-24 sm:min-h-[760px] lg:min-h-[840px]"
      style={{ backgroundColor: '#111B3D' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center"
      >
        <div className="relative w-[82%] max-w-[1080px]">
          <video
            className="h-auto w-full object-contain object-bottom"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
            autoPlay={!reduce}
            loop={!reduce}
            muted
            playsInline
            preload="metadata"
            tabIndex={-1}
          >
            <source src="/footer.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, #0D0032 0%, rgba(13, 2, 50, 0.82) 20%, rgba(14, 8, 54, 0.60) 40%, rgba(16, 18, 58, 0.32) 60%, rgba(17, 27, 61, 0.08) 78%, rgba(17, 27, 61, 0) 92%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-midnight/40"
      />

      <div className="shell section-pad relative z-10 pb-24 sm:pb-28 lg:pb-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            index="03"
            kicker="How It Works"
            title={<>From sign-up to demo.</>}
            intro="Seven checkpoints carry your project from the first form to the final presentation."
          />
          <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            Scroll to explore <span aria-hidden className="ml-2 text-indigo">→</span>
          </p>
        </div>

        <div
          className="timeline-scroll section-content-gap relative left-1/2 w-screen -translate-x-1/2 overflow-x-auto overscroll-x-contain px-[clamp(20px,5vw,72px)] pb-7"
          role="region"
          aria-label="Hackathon process timeline"
          tabIndex={0}
        >
          <ol className="relative flex w-max min-w-full snap-x snap-mandatory pt-5">
            <span
              aria-hidden
              className="absolute left-0 right-0 top-[1.7rem] h-px bg-line"
            />
            {howItWorks.map((step, index) => (
              <Reveal
                as="li"
                key={step.step}
                delay={index * 0.04}
                className="group relative w-[78vw] max-w-[340px] shrink-0 snap-start pr-4 sm:w-[320px] sm:pr-5 lg:w-[350px]"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <span aria-hidden className="h-3 w-3 rotate-45 bg-indigo" />
                  <span className="bg-midnight pr-4 font-mono text-[11px] text-indigo">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-8 min-h-[230px] rounded-lg border border-line bg-midnight/85 p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md transition-colors group-hover:border-indigo/40 group-hover:bg-midnight/95">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                    Step {step.step}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-seashell">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[18rem] font-body leading-relaxed text-muted text-pretty">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <li aria-hidden className="w-[clamp(20px,5vw,72px)] shrink-0" />
          </ol>
        </div>
      </div>
    </section>
  )
}
