import { useReducedMotion } from 'framer-motion'
import { Reveal, SectionHeader } from './primitives'
import { event } from '../data/site'
import { foxVideoSettings } from '../data/videoSettings'

const principles = [
  {
    n: '01',
    title: 'Start with the person',
    body: 'Choose a specific everyday need, understand who experiences it, and build something genuinely useful rather than technology for its own sake.',
  },
  {
    n: '02',
    title: 'Open to every level',
    body: 'Middle and high school students can build solo or in a team of up to four. Team matching helps students connect before the clock starts.',
  },
  {
    n: '03',
    title: 'Original work, clearly shown',
    body: 'AI and third-party tools can support the build, but the project should reflect your team’s own thinking. Credit what you use and show the panel what you made.',
  },
]

export default function EventOverview() {
  const reduce = useReducedMotion()
  const thinkingFox = foxVideoSettings.sitting

  return (
    <section
      id="about"
      className="section-line relative scroll-mt-24"
      style={{ backgroundColor: '#170C37' }}
    >
      <div className="shell section-pad">
        <div className="relative lg:min-h-[640px]">
          <div className="relative z-10 lg:w-[49%]">
            <SectionHeader
              index="00"
              kicker="The Event"
              title={
                <>
                  Two days to build
                  <br />
                  something <span className="text-indigo">sharp</span>.
                </>
              }
              intro={`${event.name} is a student-run build sprint by ${event.organizer}. Turn an original idea into a working submission, meet other young builders, and present the result to a professional panel.`}
              className="max-w-xl"
            />

            <div className="mt-10 divide-y divide-line overflow-hidden rounded-lg border border-line bg-line">
              {principles.map((p) => (
                <Reveal key={p.n}>
                  <div className="group grid grid-cols-[34px_1fr] gap-3 bg-midnight p-5 transition-colors hover:bg-heart/10 sm:p-6">
                    <span className="pt-0.5 font-mono text-[12px] text-indigo">{p.n}</span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-muted text-pretty">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal
            className="pointer-events-none relative z-0 mt-8 h-[380px] sm:h-[500px] lg:absolute lg:inset-0 lg:mt-0 lg:h-full"
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `translate(${thinkingFox.x}%, ${thinkingFox.y}%) scale(${thinkingFox.zoom})`,
                transformOrigin: 'right bottom',
              }}
            >
              <video
                className="absolute inset-y-0 right-0 h-full w-full origin-bottom-right translate-x-[130px] translate-y-[70px] object-contain object-right-bottom sm:translate-x-[170px] sm:translate-y-[85px] lg:w-[75%] lg:translate-x-[180px] lg:translate-y-[90px] lg:scale-[1.3]"
                style={{
                  clipPath: `inset(${thinkingFox.crop.top}% ${thinkingFox.crop.right}% ${thinkingFox.crop.bottom}% ${thinkingFox.crop.left}%)`,
                }}
                autoPlay={!reduce}
                loop={!reduce}
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
              >
                <source src="/sitting-fox-v3.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-[#170C37] from-[5%] via-[#170C37]/80 via-[48%] to-[#170C37]/5"
      />
    </section>
  )
}
