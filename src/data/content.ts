export type Track = {
  id: string
  index: string
  title: string
  tag: string
  level: string
  description: string
}

export const tracks: Track[] = [
  {
    id: 'sustainability',
    index: '01',
    title: 'Sustainability & Social Good',
    tag: 'Planet & Access',
    level: 'Possible theme',
    description:
      'Build for a healthier planet or a more accessible community. Start with a real need and make the impact easy to understand.',
  },
  {
    id: 'ml',
    index: '02',
    title: 'Machine Learning',
    tag: 'Models & Data',
    level: 'Possible theme',
    description:
      'Use data, models, or agents to solve a meaningful problem. The technology should earn its place in the project.',
  },
  {
    id: 'productivity',
    index: '03',
    title: 'Productivity',
    tag: 'Tools & Workflows',
    level: 'Possible theme',
    description:
      'Rethink a frustrating routine, remove busywork, or help people focus. Fresh execution matters in a crowded space.',
  },
  {
    id: 'education',
    index: '04',
    title: 'Education',
    tag: 'Learning & Growth',
    level: 'Possible theme',
    description:
      'Make learning more engaging, understandable, or available. Build for a specific learner and show how your idea helps.',
  },
  {
    id: 'health',
    index: '05',
    title: 'Mental Health',
    tag: 'Wellness & Habits',
    level: 'Possible theme',
    description:
      'Support healthier habits, mental wellness, or everyday care with a thoughtful prototype that keeps safety and privacy in view.',
  },
]

export type Idea = {
  title: string
  meta: string
  description: string
  trace: string[]
}

export const ideas: Idea[] = [
  {
    title: 'Website or app',
    meta: 'digital product',
    description:
      'Turn the theme into a focused tool people can use. Keep the audience specific, the main workflow clear, and the demo reliable.',
    trace: ['name one user', 'define one problem', 'build the core flow', 'demo the result'],
  },
  {
    title: 'Game',
    meta: 'interactive',
    description:
      'Teach, motivate, or explore the theme through play. A small polished mechanic is stronger than a huge unfinished world.',
    trace: ['choose a mechanic', 'connect it to the theme', 'build one level', 'playtest and tune'],
  },
  {
    title: 'Hardware prototype',
    meta: 'bring components',
    description:
      'Connect code to the physical world with your own components. Record a clear demo so judges can evaluate the full experience.',
    trace: ['bring your parts', 'wire the interaction', 'test edge cases', 'record a clear demo'],
  },
  {
    title: 'Communication tool',
    meta: 'people & teams',
    description:
      'Help a group make decisions, resolve confusion, or follow through on plans without taking control away from the people involved.',
    trace: ['map the conversation', 'surface key decisions', 'assign follow-ups', 'keep users in control'],
  },
  {
    title: 'Workflow automation',
    meta: 'agents & tools',
    description:
      'Automate one difficult part of a real workflow. Show the steps, the guardrails, and why automation makes the outcome better.',
    trace: ['pick one bottleneck', 'plan the steps', 'connect the tools', 'verify the output'],
  },
  {
    title: 'Data simulation',
    meta: 'model & visualize',
    description:
      'Model a real system with changing inputs, realistic randomness, and a visual interface that makes complex behavior legible.',
    trace: ['choose a scenario', 'model source → transit → end', 'add variability', 'visualize outcomes'],
  },
]

export type Benefit = {
  stat: string
  label: string
  body: string
}

export const benefits: Benefit[] = [
  {
    stat: '2d',
    label: 'idea → prototype',
    body: 'Turn a promising idea into a demo across two focused days.',
  },
  {
    stat: '4',
    label: 'people per team',
    body: 'Build solo or bring together a team of up to four students.',
  },
  {
    stat: '5',
    label: 'possible themes',
    body: 'Watch for hints, then discover the final theme at kickoff.',
  },
  {
    stat: '2',
    label: 'ways to join',
    body: 'Take part with us in Santa Clara or join the event online.',
  },
]

export const howItWorks = [
  { step: '1', title: 'Register', body: 'Submit one form per student at least one week before the event.' },
  { step: '2', title: 'Form a team', body: 'Build solo, team up with as many as three others, or join team matching.' },
  { step: '3', title: 'Get the theme', body: 'The final theme is revealed at kickoff so everyone starts together.' },
  { step: '4', title: 'Build', body: 'Create an original game, app, website, hardware project, or another sharp prototype.' },
  { step: '5', title: 'Attribute', body: 'Credit every third-party library, asset, model, and source you use.' },
  { step: '6', title: 'Submit', body: 'Turn in your project and a demo that works for both online and in-person judging.' },
  { step: '7', title: 'Present', body: 'Show the panel what you built, how it works, and why it matters.' },
]

export type ScheduleItem = {
  day: string
  time: string
  title: string
  detail: string
  highlight?: boolean
}

export const schedule: ScheduleItem[] = [
  { day: 'Before the event', time: 'TBA', title: 'Registration closes', detail: 'Register at least one week before kickoff.' },
  { day: 'Day 1 · Aug 6', time: 'TBA', title: 'Check-in & team matching', detail: 'Online and in-person participants get set up.' },
  { day: 'Day 1 · Aug 6', time: 'TBA', title: 'Opening & theme reveal', detail: 'Meet the organizers, review the rules, and discover the theme.', highlight: true },
  { day: 'Day 1 · Aug 6', time: 'TBA', title: 'Building begins', detail: 'Choose a format, narrow the idea, and start making.' },
  { day: 'Day 2 · Aug 7', time: 'TBA', title: 'Project submissions', detail: 'Submit the project, credits, and a clear demo.', highlight: true },
  { day: 'Day 2 · Aug 7', time: 'TBA', title: 'Presentations & judging', detail: 'Teams present live or by recorded demo as directed.' },
  { day: 'Day 2 · Aug 7', time: 'TBA', title: 'Awards & closing', detail: 'The panel shares feedback and recognizes standout projects.', highlight: true },
]

export type Prize = {
  title: string
  amount: string
  note: string
  size: 'grand' | 'major' | 'standard'
}

export const prizes: Prize[] = [
  { title: 'Best Overall Project', amount: 'Details soon', note: 'The strongest complete project of the event.', size: 'grand' },
  { title: 'Category Awards', amount: 'Details soon', note: 'Recognition for standout work within the final theme.', size: 'major' },
  { title: 'Best Technical Execution', amount: 'Details soon', note: 'A reliable, thoughtful, and ambitious implementation.', size: 'major' },
  { title: 'Most Creative Project', amount: 'Details soon', note: 'An original idea with a distinctive point of view.', size: 'standard' },
  { title: 'Best Visual Design', amount: 'Details soon', note: 'The clearest and most polished visual experience.', size: 'standard' },
  { title: 'Greatest Impact', amount: 'Details soon', note: 'The project with the strongest potential to help people.', size: 'standard' },
  { title: 'Best Presentation', amount: 'Details soon', note: 'A memorable demo that makes the work easy to understand.', size: 'standard' },
]

export type Criterion = {
  index: string
  title: string
  body: string
}

export const criteria: Criterion[] = [
  { index: '01', title: 'Creativity', body: 'Does the project bring an original idea or a fresh visual and technical approach?' },
  { index: '02', title: 'Impact', body: 'Could this meaningfully help a person, a community, or a larger group?' },
  { index: '03', title: 'Complexity', body: 'Did the team take on a meaningful technical challenge and handle it thoughtfully?' },
  { index: '04', title: 'Execution & functionality', body: 'Does the prototype work, address the problem, and hold up in the demo?' },
  { index: '05', title: 'Presentation & demo', body: 'Can the team clearly explain the idea, the build, and the result?' },
]

export type Judge = {
  name: string
  role: string
  org: string
  expertise: string
  bio: string
}

export const judges: Judge[] = []

export type SponsorTier = {
  tier: string
  note: string
  logos: string[]
}

export const sponsorTiers: SponsorTier[] = [
  { tier: 'Gold Sponsors', note: 'Top-tier event support', logos: ['Your logo here'] },
  { tier: 'Silver Sponsors', note: 'Supporting student builders', logos: ['Your logo here', 'Your logo here', 'Your logo here'] },
  { tier: 'Bronze Sponsors', note: 'Helping ideas take shape', logos: ['Your logo here', 'Your logo here', 'Your logo here', 'Your logo here'] },
  { tier: 'In-kind Partners', note: 'Swag, tools, food & resources', logos: ['Your logo here', 'Your logo here', 'Your logo here', 'Your logo here'] },
]

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  { q: 'Who can participate?', a: 'Acuity Hacks is open to middle and high school students. Students at every experience level are welcome.' },
  { q: 'Do I need a team?', a: 'No. Build solo, register with teammates, or use team matching at the event. Teams may have up to four members.' },
  { q: 'Is the event in person or online?', a: 'Both. Join at 2933 Bunker Hill Ln in Santa Clara or participate online. Presentation details will keep both groups on the same event timeline.' },
  { q: 'When will the theme be announced?', a: 'At kickoff. We’ll share hints and a pool of possible themes beforehand, but the final theme stays secret so every team starts together.' },
  { q: 'What can I build?', a: 'A game, website, app, hardware prototype, data project, or another format that responds to the final theme. Hardware teams should bring their own components.' },
  { q: 'Can I use AI?', a: 'Yes, but AI should support your work—not produce the entire project for you. Judges will look for your team’s own thinking, technical decisions, and execution.' },
  { q: 'Can I use existing code or third-party tools?', a: 'Do not bring a premade project. Your submission should be mostly original work created for the hackathon, and every library, asset, model, source, or other third-party contribution must be credited.' },
  { q: 'How are projects judged?', a: 'A professional panel reviews creativity, impact, complexity, execution and functionality, and the presentation or demo. Final scoring details will be shared with participants.' },
  { q: 'What will I submit?', a: 'Plan to submit the project itself, attribution for third-party work, and a clear demo. Final submission instructions will be announced before building ends.' },
  { q: 'When do I need to register?', a: 'Plan to register at least one week before the event. The exact deadline and registration form will be posted here.' },
  { q: 'What conduct is expected?', a: 'Be professional and treat fellow participants, organizers, judges, and their work with respect. A complete code of conduct will be shared before the event.' },
]
