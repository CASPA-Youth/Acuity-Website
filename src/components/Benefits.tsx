import { Reveal } from './primitives'

const reasons = [
  'Turn an idea into a working prototype',
  'Work shoulder-to-shoulder with a team',
  'Build in person or join online',
  'Meet other student builders',
  'Present live to a professional panel',
  'Walk away with a portfolio project',
]

export default function Benefits() {
  return (
    <section id="why" className="section-line relative scroll-mt-24">
      <div className="shell section-pad">
        <div className="grid border-y border-line lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="flex flex-col justify-center bg-heart px-7 py-14 sm:px-10 lg:border-r lg:border-line lg:px-12 lg:py-20">
            <div className="kicker">03 / Why Participate</div>
            <h2 className="mt-8 max-w-xl font-display text-3xl font-semibold leading-[1.05] text-balance sm:text-4xl lg:text-[3rem]">
              Two focused days are enough to build something you’re proud to show.
            </h2>
            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-muted">
              Leave with a working project, sharper skills, people who build like you do, and a
              chance to put your work in front of a professional panel.
            </p>
          </Reveal>

          <ul className="grid sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal
                as="li"
                key={reason}
                delay={index * 0.04}
                className={`group flex min-h-28 items-center gap-5 p-7 transition-colors hover:bg-heart/20 sm:p-9 ${
                  index % 2 === 0 ? 'sm:border-r sm:border-line' : ''
                } ${index < reasons.length - 2 ? 'border-b border-line' : ''}`}
              >
                <span className="font-mono text-[11px] text-faint">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-base text-seashell">{reason}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
