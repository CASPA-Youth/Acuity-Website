import { SectionHeader, Reveal } from './primitives'
import { howItWorks } from '../data/content'

export default function HowItWorks() {
  return (
    <section id="how" className="section-line relative scroll-mt-24">
      <div className="shell py-24 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              index="04"
              kicker="How It Works"
              title={<>From sign-up to demo.</>}
              intro="Seven clear checkpoints take you from registration to the final presentation."
            />
          </div>

          <ol className="grid border-t border-line sm:grid-cols-2">
            {howItWorks.map((step, index) => (
              <Reveal
                as="li"
                key={step.step}
                delay={index * 0.05}
                className={`group min-h-56 border-b border-line py-8 ${
                  index % 2 === 0 ? 'sm:border-r sm:pr-9' : 'sm:pl-9'
                } ${index === howItWorks.length - 1 ? 'sm:col-span-2 sm:border-r-0 sm:pr-0' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[12px] text-indigo">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 max-w-sm font-body leading-relaxed text-muted text-pretty">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
