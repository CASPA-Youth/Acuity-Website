export type Track = {
  id: string
  index: string
  title: string
  tag: string
  level: string
  icon: string
  description: string
}

export const tracks: Track[] = [
  {
    id: 'sustainability-social-good',
    index: '01',
    title: 'Sustainability & Social Good',
    tag: 'Possible theme',
    level: 'Theme pool',
    icon: '/theme-icons/sustainability.png',
    description:
      'Build for a more sustainable, accessible, or equitable future by focusing on a real need in a community.',
  },
  {
    id: 'machine-learning',
    index: '02',
    title: 'Machine Learning',
    tag: 'Possible theme',
    level: 'Theme pool',
    icon: '/theme-icons/machine-learning.png',
    description:
      'Apply machine learning to a meaningful problem and make the model useful, understandable, and purposeful.',
  },
  {
    id: 'productivity',
    index: '03',
    title: 'Productivity',
    tag: 'Possible theme',
    level: 'Theme pool',
    icon: '/theme-icons/productivity.png',
    description:
      'Rethink a frustrating task or workflow and build a tool that helps people spend their time more intentionally.',
  },
  {
    id: 'education',
    index: '04',
    title: 'Education',
    tag: 'Possible theme',
    level: 'Theme pool',
    icon: '/theme-icons/education.png',
    description:
      'Create a tool that makes learning, teaching, practice, or access to knowledge more effective.',
  },
  {
    id: 'health-wellbeing',
    index: '05',
    title: 'Medicine, Global Health & Mental Health',
    tag: 'Possible theme',
    level: 'Theme pool',
    icon: '/theme-icons/medicine.png',
    description:
      'Prototype a thoughtful way to support health, wellbeing, or access while treating safety and privacy seriously.',
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
    title: 'Web application',
    meta: 'browser-based',
    description:
      'Build a focused browser-based app that responds to one or both revealed themes and makes its core experience easy to demonstrate.',
    trace: ['name one user', 'define one problem', 'build the core flow', 'demo the result'],
  },
  {
    title: 'Mobile application',
    meta: 'on the go',
    description:
      'Design an app that helps someone wherever the problem happens. Keep the interaction focused and the solution purposeful.',
    trace: ['identify the moment', 'design the interaction', 'connect the model', 'test the result'],
  },
  {
    title: 'Personal assistant',
    meta: 'guided support',
    description:
      'Create an assistant that helps users understand information, organize a task, or make a routine easier without taking control away from them.',
    trace: ['define the request', 'set clear boundaries', 'generate useful help', 'verify the output'],
  },
  {
    title: 'Communication tool',
    meta: 'people & teams',
    description:
      'Help a group organize information, resolve confusion, or follow through on plans while keeping people in control.',
    trace: ['map the conversation', 'surface key decisions', 'assign follow-ups', 'keep users in control'],
  },
  {
    title: 'Workflow automation',
    meta: 'agents & tools',
    description:
      'Automate one difficult part of a real workflow. Show the steps, the guardrails, and why the approach improves the outcome.',
    trace: ['pick one bottleneck', 'plan the steps', 'connect the tools', 'verify the output'],
  },
  {
    title: 'Smart recommendation tool',
    meta: 'model & explain',
    description:
      'Turn useful signals into clear recommendations for an everyday decision. Explain what informed the result and let users stay in control.',
    trace: ['choose a decision', 'identify useful signals', 'produce a recommendation', 'explain the result'],
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
    stat: '$500',
    label: 'total prize pool',
    body: 'Compete for awards from the advertised $500 total prize pool.',
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
  { step: '3', title: 'Meet the themes', body: 'Two final themes are revealed at kickoff from the five possibilities announced in advance.' },
  { step: '4', title: 'Build', body: 'Create an original project with a focused user, a thoughtful solution, and a working demo.' },
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
  { day: 'Day 1 · Aug 6', time: '9:00–9:30 AM', title: 'Participant check-in', detail: 'In-person participants check in while online participants join through the event channels.' },
  { day: 'Day 1 · Aug 6', time: '9:30–10:00 AM', title: 'Welcome & CASPA introduction', detail: 'Meet the organizers and get an overview of the hackathon.' },
  { day: 'Day 1 · Aug 6', time: '10:00–10:15 AM', title: 'Sponsor recognition', detail: 'Meet the organizations helping make Acuity Hacks possible.' },
  { day: 'Day 1 · Aug 6', time: '10:15–10:30 AM', title: 'Rules & expectations', detail: 'Review team size, AI use, originality, attribution, conduct, and hybrid participation.' },
  { day: 'Day 1 · Aug 6', time: '10:30–10:45 AM', title: 'Theme reveal & kickoff', detail: 'Discover the two final themes and review the requirements and judging expectations before building begins.', highlight: true },
  { day: 'Day 1 · Aug 6', time: '10:45–11:30 AM', title: 'Team formation & brainstorming', detail: 'Find teammates, confirm teams of up to four, and shape the first idea.' },
  { day: 'Day 1 · Aug 6', time: '11:30 AM–9:00 PM', title: 'Open hacking block', detail: 'Build throughout the day with online and in-person support available.' },
  { day: 'Day 1 · Aug 6', time: '12:00–1:00 PM', title: 'Lunch available', detail: 'Grab-and-go lunch is available during the hacking block.' },
  { day: 'Day 1 · Aug 6', time: '6:00–7:00 PM', title: 'Dinner available', detail: 'Grab-and-go dinner is available while teams continue building.' },
  { day: 'Day 1 · Aug 6', time: '8:30–9:00 PM', title: 'Day 1 announcements', detail: 'Review the next day’s schedule and the noon submission deadline.' },
  { day: 'Day 2 · Aug 7', time: '9:00–9:30 AM', title: 'Participant check-in', detail: 'Teams return in person or online and get ready for the final build window.' },
  { day: 'Day 2 · Aug 7', time: '9:30–10:00 AM', title: 'Day 2 announcements', detail: 'Review the submission deadline and presentation process.' },
  { day: 'Day 2 · Aug 7', time: '10:00 AM–12:00 PM', title: 'Final hacking block', detail: 'Finish, test, document, and prepare the final submission.' },
  { day: 'Day 2 · Aug 7', time: '12:00 PM', title: 'Final submission deadline', detail: 'Project links, slides, source links, demo videos, and team information are due.', highlight: true },
  { day: 'Day 2 · Aug 7', time: '12:00–1:00 PM', title: 'Lunch available', detail: 'Grab lunch while submissions are organized for presentations.' },
  { day: 'Day 2 · Aug 7', time: '1:00–3:00 PM', title: 'Presentation preparation', detail: 'Rehearse demos and test slides, links, videos, and screen sharing.' },
  { day: 'Day 2 · Aug 7', time: '3:00–6:00 PM', title: 'Team presentations & demos', detail: 'Present in person, through Zoom, or by recorded demo when needed.', highlight: true },
  { day: 'Day 2 · Aug 7', time: '6:00–7:00 PM', title: 'Dinner & networking', detail: 'Eat, explore projects, and connect with participants and sponsors.' },
  { day: 'Day 2 · Aug 7', time: '7:00–7:30 PM', title: 'Awards ceremony', detail: 'Winners and special awards are announced.', highlight: true },
  { day: 'Day 2 · Aug 7', time: '7:30–8:00 PM', title: 'Closing remarks & group photo', detail: 'Wrap up the event and celebrate everyone who participated.' },
  { day: 'Day 2 · Aug 7', time: '8:00–9:00 PM', title: 'Optional showcase & networking', detail: 'Stay to share projects casually and meet sponsors and organizers.' },
]

export type Prize = {
  title: string
  amount: string
  note: string
  size: 'grand' | 'major' | 'standard'
}

export const prizes: Prize[] = [
  { title: 'Total Prize Pool', amount: '$500', note: 'The advertised total value available across event awards.', size: 'grand' },
  { title: 'Best Overall Project', amount: 'Allocation soon', note: 'The strongest complete project of the event.', size: 'major' },
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
  { q: 'Who can participate?', a: 'Acuity Hackathon is open to middle and high school students. Students at every experience level are welcome.' },
  { q: 'Do I need a team?', a: 'No. Build solo, register with teammates, or use team matching at the event. Teams may have up to four members.' },
  { q: 'Is the event in person or online?', a: 'Both. Join at 2933 Bunker Hill Ln in Santa Clara or participate online. Presentation details will keep both groups on the same event timeline.' },
  { q: 'What are the possible themes?', a: 'The five possibilities are Sustainability & Social Good, Machine Learning, Productivity, Education, and Medicine / Global Health / Mental Health. Two final themes will be revealed when the hackathon begins.' },
  { q: 'What can I build?', a: 'Build a web, mobile, communication, productivity, recommendation, or other application that responds to one or both revealed themes. Keep the audience and problem specific.' },
  { q: 'Can I use AI?', a: 'Yes, but AI should support your work—not produce the entire project for you. Judges will look for your team’s own thinking, technical decisions, and execution.' },
  { q: 'Can I use existing code or third-party tools?', a: 'Do not bring a premade project. Your submission should be mostly original work created for the hackathon, and every library, asset, model, source, or other third-party contribution must be credited.' },
  { q: 'How are projects judged?', a: 'A professional panel reviews creativity, impact, complexity, execution and functionality, and the presentation or demo. Final scoring details will be shared with participants.' },
  { q: 'What will I submit?', a: 'Plan to submit the project itself, attribution for third-party work, and a clear demo. Final submission instructions will be announced before building ends.' },
  { q: 'When do I need to register?', a: 'Plan to register through the linked Luma form at least one week before the event.' },
  { q: 'What conduct is expected?', a: 'Be professional and treat fellow participants, organizers, judges, and their work with respect. A complete code of conduct will be shared before the event.' },
]
