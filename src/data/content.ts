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
    id: 'ml',
    index: '01',
    title: 'Machine Learning',
    tag: 'Models & Data',
    level: 'Any level',
    description:
      'Train or fine-tune a model, or build a data-driven system that solves a problem someone actually has. Show the model earns its place in the product.',
  },
  {
    id: 'agents',
    index: '02',
    title: 'Autonomous Agents',
    tag: 'Planning & Tools',
    level: 'Intermediate',
    description:
      'Build an agent that plans, reasons, calls tools, and finishes a multi-step task on its own — not a chatbot with a prompt taped on.',
  },
  {
    id: 'collab',
    index: '03',
    title: 'Human–AI Collaboration',
    tag: 'Interfaces',
    level: 'Any level',
    description:
      'Design a system where a person and a model each do what they are good at. The handoffs between them should feel obvious and in the user’s control.',
  },
  {
    id: 'devtools',
    index: '04',
    title: 'Developer Tools',
    tag: 'Workflows',
    level: 'Intermediate',
    description:
      'Make coding, debugging, testing, or deploying measurably faster. The best entries feel like a tool you would keep using after the weekend ends.',
  },
  {
    id: 'open',
    index: '05',
    title: 'Open Innovation',
    tag: 'Wildcard',
    level: 'Ambitious',
    description:
      'Something that doesn’t fit a box. Bring the ambitious idea you couldn’t stop thinking about — if it’s sharp, it belongs here.',
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
    title: 'Group-chat moderator',
    meta: 'agent · summarize',
    description:
      'Reads a busy thread, summarizes what happened, assigns follow-ups, and tracks which decisions actually got made.',
    trace: ['scan 214 messages', 'cluster → 4 topics', 'assign 3 tasks', 'log 2 decisions'],
  },
  {
    title: 'LLM council',
    meta: 'multi-model',
    description:
      'Asks several models to debate the same question, surfaces where they disagree, then synthesizes one grounded answer.',
    trace: ['query 4 models', 'diff positions', 'flag 1 conflict', 'synthesize'],
  },
  {
    title: 'Inbox-to-checklist',
    meta: 'agent · parse',
    description:
      'Turns a wall of email into an interactive checklist — every ask becomes a task you can check off or delegate.',
    trace: ['parse 9 emails', 'extract 12 asks', 'dedupe → 8', 'build checklist'],
  },
  {
    title: 'Context-aware IDE',
    meta: 'devtools',
    description:
      'A coding environment that reads your repo, remembers past changes, and suggests edits that fit how your project is actually built.',
    trace: ['index repo', 'load 3 conventions', 'draft patch', 'run tests'],
  },
  {
    title: 'Research agent',
    meta: 'agent · retrieve',
    description:
      'Gathers sources on a question, compares their claims, and explains what to trust — with citations you can click through.',
    trace: ['fetch 18 sources', 'rank by relevance', 'compare claims', 'cite 6'],
  },
  {
    title: 'Adaptive accessibility',
    meta: 'human–AI',
    description:
      'Reshapes an interface or a page on the fly — simplifying, re-captioning, or re-laying-out content for how someone reads.',
    trace: ['read layout', 'detect density', 'restructure DOM', 'recaption 4 imgs'],
  },
]

export type Benefit = {
  stat: string
  label: string
  body: string
}

export const benefits: Benefit[] = [
  {
    stat: '48h',
    label: 'idea → prototype',
    body: 'Turn a maybe into a working demo in a single focused weekend.',
  },
  {
    stat: '1:1',
    label: 'mentor time',
    body: 'Sit with engineers and researchers who have shipped real ML systems.',
  },
  {
    stat: '5',
    label: 'challenge tracks',
    body: 'Pick the lane that fits your idea — or take the wildcard.',
  },
  {
    stat: '∞',
    label: 'people to meet',
    body: 'Builders, designers, and researchers who care about the same problems.',
  },
]

export const howItWorks = [
  { step: '1', title: 'Register', body: 'One form per person. Lock your spot before the deadline.' },
  { step: '2', title: 'Form a team', body: 'Team up with up to four, or go solo — both win prizes.' },
  { step: '3', title: 'Choose a challenge', body: 'Pick a track that fits the idea you want to chase.' },
  { step: '4', title: 'Build', body: '48 hours, mentors on call, and a room full of momentum.' },
  { step: '5', title: 'Submit', body: 'Ship a demo and a short write-up before the deadline.' },
  { step: '6', title: 'Present', body: 'Walk a panel of judges through what you made and why.' },
  { step: '7', title: 'Win', body: 'Take home prizes across every track — plus the portfolio piece.' },
]

export type ScheduleItem = {
  day: string
  time: string
  title: string
  detail: string
  highlight?: boolean
}

export const schedule: ScheduleItem[] = [
  { day: 'Pre-event', time: '[DATE]', title: 'Registration opens', detail: 'Applications go live.' },
  { day: 'Pre-event', time: '[DEADLINE]', title: 'Registration closes', detail: 'Last call to sign up.' },
  { day: 'Day 1', time: '[TIME]', title: 'Team formation', detail: 'Find teammates, form squads.' },
  { day: 'Day 1', time: '[TIME]', title: 'Opening ceremony', detail: 'Kickoff, themes, and rules.', highlight: true },
  { day: 'Day 1', time: '[TIME]', title: 'Building begins', detail: 'The clock starts. Go.' },
  { day: 'Day 1', time: '[TIME]', title: 'Mentor sessions', detail: 'Office hours across every track.' },
  { day: 'Day 2', time: '[TIME]', title: 'Submission deadline', detail: 'Demos and write-ups due.', highlight: true },
  { day: 'Day 2', time: '[TIME]', title: 'Judging', detail: 'Panels review every project.' },
  { day: 'Day 2', time: '[TIME]', title: 'Final presentations', detail: 'Top teams present live.' },
  { day: 'Day 2', time: '[TIME]', title: 'Awards ceremony', detail: 'Winners announced. Prizes handed out.', highlight: true },
]

export type Prize = {
  title: string
  amount: string
  note: string
  size: 'grand' | 'major' | 'standard'
}

export const prizes: Prize[] = [
  { title: 'Grand Prize', amount: '[PRIZE AMOUNT]', note: 'Best overall project across every track.', size: 'grand' },
  { title: 'Best Use of AI Agents', amount: '[PRIZE AMOUNT]', note: 'Sharpest agentic system.', size: 'major' },
  { title: 'Best Technical Execution', amount: '[PRIZE AMOUNT]', note: 'Cleanest, most complete build.', size: 'major' },
  { title: 'Most Creative Project', amount: '[PRIZE AMOUNT]', note: 'The idea no one else had.', size: 'standard' },
  { title: 'Best Human–AI Collaboration', amount: '[PRIZE AMOUNT]', note: 'People and models, working as one.', size: 'standard' },
  { title: 'Best Beginner Team', amount: '[PRIZE AMOUNT]', note: 'Strongest first-time build.', size: 'standard' },
  { title: 'Audience Choice', amount: '[PRIZE AMOUNT]', note: 'Voted by everyone in the room.', size: 'standard' },
]

export type Criterion = {
  index: string
  title: string
  weight: string
  body: string
}

export const criteria: Criterion[] = [
  { index: '01', title: 'Technical execution', weight: '25%', body: 'Does it work, and is it built well under the hood?' },
  { index: '02', title: 'Originality', weight: '20%', body: 'A fresh angle, not a wrapper on an obvious idea.' },
  { index: '03', title: 'Usefulness', weight: '20%', body: 'Would a real person reach for this again?' },
  { index: '04', title: 'Effective use of ML / agents', weight: '15%', body: 'The intelligence earns its place — not a bolted-on feature.' },
  { index: '05', title: 'Design & usability', weight: '10%', body: 'Clear, considered, and pleasant to actually use.' },
  { index: '06', title: 'Completeness', weight: '5%', body: 'A working prototype beats a bigger idea half-built.' },
  { index: '07', title: 'Presentation', weight: '5%', body: 'You can explain what you made and why it matters.' },
]

export type Judge = {
  name: string
  role: string
  org: string
  expertise: string
  bio: string
}

export const judges: Judge[] = [
  {
    name: '[JUDGE NAME]',
    role: 'Staff ML Engineer',
    org: '[ORGANIZATION]',
    expertise: 'Applied ML',
    bio: 'Ships production models at scale and mentors first-time builders on the parts that actually break.',
  },
  {
    name: '[JUDGE NAME]',
    role: 'Research Scientist',
    org: '[ORGANIZATION]',
    expertise: 'Agents & reasoning',
    bio: 'Studies multi-step agents and how they plan — and how they fail — in the real world.',
  },
  {
    name: '[JUDGE NAME]',
    role: 'Founding Engineer',
    org: '[ORGANIZATION]',
    expertise: 'Developer tools',
    bio: 'Built the kind of tooling other engineers quietly refuse to work without.',
  },
  {
    name: '[MENTOR NAME]',
    role: 'Product Designer',
    org: '[ORGANIZATION]',
    expertise: 'Human–AI UX',
    bio: 'Designs the seams where people and models hand work back and forth.',
  },
  {
    name: '[MENTOR NAME]',
    role: 'PhD Candidate',
    org: '[UNIVERSITY]',
    expertise: 'NLP',
    bio: 'Researches language models and loves turning a rough prototype into a sharp one.',
  },
  {
    name: '[MENTOR NAME]',
    role: 'Software Engineer',
    org: '[ORGANIZATION]',
    expertise: 'Infra & data',
    bio: 'Keeps data pipelines fast and honest — and helps teams do the same overnight.',
  },
]

export type SponsorTier = {
  tier: string
  note: string
  logos: string[]
}

export const sponsorTiers: SponsorTier[] = [
  { tier: 'Presenting Sponsor', note: 'Powering Acuity Hacks 2026', logos: ['[PRESENTING SPONSOR]'] },
  { tier: 'Gold Sponsors', note: '', logos: ['[GOLD SPONSOR]', '[GOLD SPONSOR]', '[GOLD SPONSOR]'] },
  { tier: 'Silver Sponsors', note: '', logos: ['[SILVER]', '[SILVER]', '[SILVER]', '[SILVER]'] },
  { tier: 'Community Partners', note: '', logos: ['[PARTNER]', '[PARTNER]', '[PARTNER]', '[PARTNER]', '[PARTNER]'] },
]

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  { q: 'Who can participate?', a: 'Acuity Hacks is built for high school students and open to middle schoolers. Whether it’s your first hackathon or your tenth, you belong here.' },
  { q: 'Do I need a team? Can I go solo?', a: 'Both work. Form a team of up to four, or build solo — every prize track is open to solo hackers and teams alike.' },
  { q: 'Is the event beginner-friendly?', a: 'Yes. Mentors run office hours all weekend, and there’s a Best Beginner Team prize specifically for first-time builders.' },
  { q: 'Is it in person or online?', a: 'Both. Join us in Santa Clara or participate fully online — the schedule and mentorship work either way.' },
  { q: 'What can I build?', a: 'Anything on the Machine Learning & Agents theme, across five tracks. Strong execution matters far more than using AI as a surface-level feature.' },
  { q: 'Are there restrictions on APIs or tools?', a: 'Use any language, framework, or model API you like. We only ask that the core work is built during the event.' },
  { q: 'Can I use existing code?', a: 'You can use open-source libraries and starter templates, but the project itself should be built during the hackathon. Bringing a finished app is not in the spirit of it.' },
  { q: 'How are projects judged?', a: 'A panel scores each submission on technical execution, originality, usefulness, effective use of ML or agents, design, completeness, and presentation.' },
  { q: 'What do I need to submit?', a: 'A working demo and a short write-up explaining what you built, how it works, and what you’d do next.' },
  { q: 'Is there a participation fee?', a: 'No. Acuity Hacks is free to enter.' },
  { q: 'Who owns the project?', a: 'You do. You keep full ownership of everything you build.' },
]
