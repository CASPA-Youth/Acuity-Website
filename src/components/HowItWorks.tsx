import { SectionHeader, Reveal } from './primitives'
import { howItWorks } from '../data/content'

export default function HowItWorks() {
  return (
    <section id="how" className="section-line relative scroll-mt-24">
      <div className="shell py-24 lg:py-36">
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
          className="timeline-scroll -mr-[clamp(20px,5vw,72px)] mt-16 overflow-x-auto overscroll-x-contain pb-7"
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
                className="relative w-[78vw] max-w-[340px] shrink-0 snap-start pr-10 sm:w-[320px] sm:pr-14 lg:w-[350px]"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <span aria-hidden className="h-3 w-3 rotate-45 bg-indigo" />
                  <span className="bg-midnight pr-4 font-mono text-[11px] text-indigo">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="pt-10">
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
