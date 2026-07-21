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
    id: 'mental-health',
    index: '01',
    title: 'Mental Health',
    tag: 'Theme candidate',
    level: 'Theme pool',
    icon: '/theme-icons/medicine.png',
    description:
      'Create a consumer app that supports mental wellness or healthy habits. Projects are non-medical prototypes and should be grounded in thoughtful psychology and real user needs.',
  },
  {
    id: 'machine-learning',
    index: '02',
    title: 'Machine Learning & AI Agents',
    tag: 'Theme candidate',
    level: 'Theme pool',
    icon: '/theme-icons/machine-learning.png',
    description:
      'Build an agentic tool that automates a difficult workflow, such as turning email into an interactive checklist or improving a developer workflow. Ambition and execution matter.',
  },
  {
    id: 'randomized-simulation',
    index: '03',
    title: 'Randomized Simulation',
    tag: 'Theme candidate',
    level: 'Theme pool',
    icon: '/theme-icons/random.png',
    description:
      'Simulate a real-world data system—such as a supply chain—with randomized sources, transit, outcomes, and losses. Make the live data understandable through a strong interactive visualization.',
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
    title: 'Mental wellness companion',
    meta: 'healthy habits',
    description:
      'Design a non-medical consumer experience that promotes mental wellness, supports a healthy habit, or helps someone navigate an everyday challenge.',
    trace: ['name one user', 'choose one healthy outcome', 'design a safe interaction', 'test the prototype'],
  },
  {
    title: 'Agentic workflow tool',
    meta: 'automation',
    description:
      'Automate one difficult workflow with an AI agent—for example, turn emails into interactive checklists or create a focused developer tool.',
    trace: ['pick one bottleneck', 'plan the agent steps', 'add guardrails', 'verify the output'],
  },
  {
    title: 'Live logistics simulation',
    meta: 'data science',
    description:
      'Model a real-world system such as supply chains or trucking with randomized sources, transit conditions, destinations, and losses.',
    trace: ['map the system', 'define random variables', 'stream the results', 'visualize the outcomes'],
  },
  {
    title: 'Cybersecurity monitor',
    meta: 'threat detection',
    description:
      'Explore a novel way to detect, explain, or help remove a cybersecurity threat while making the system’s decisions understandable.',
    trace: ['define the threat', 'identify useful signals', 'detect suspicious activity', 'explain the result'],
  },
  {
    title: 'Personal finance tracker',
    meta: 'signals & decisions',
    description:
      'Process financial data to help someone understand personal spending or follow market activity without hiding the evidence behind the result.',
    trace: ['choose the signals', 'process the data', 'surface a pattern', 'explain the insight'],
  },
  {
    title: 'Browser or team utility',
    meta: 'focused productivity',
    description:
      'Build a browser extension, communication hub, or other focused utility that removes friction from a specific task for one person or a group.',
    trace: ['find one friction point', 'design the core flow', 'build the integration', 'measure the improvement'],
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
  { step: '3', title: 'Meet the theme', body: 'The final theme is selected from the announced pool and revealed at the Day 1 kickoff.' },
  { step: '4', title: 'Build', body: 'Create an original project with a focused user, a thoughtful solution, and a working demo.' },
  { step: '5', title: 'Attribute', body: 'Credit every third-party library, asset, model, and source you use.' },
  { step: '6', title: 'Submit', body: 'Turn in a GitHub repository link, slide deck, demo video, and team information by noon on Aug 7.' },
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
  { day: 'Day 1 · Aug 6', time: '10:30–10:45 AM', title: 'Theme reveal & kickoff', detail: 'Discover the final theme and review the requirements and judging expectations before building begins.', highlight: true },
  { day: 'Day 1 · Aug 6', time: '10:45–11:30 AM', title: 'Team formation & brainstorming', detail: 'Find teammates, confirm teams of up to four, and shape the first idea.' },
  { day: 'Day 1 · Aug 6', time: '11:30 AM–9:00 PM', title: 'Open hacking block', detail: 'Build throughout the day with online and in-person support available.' },
  { day: 'Day 1 · Aug 6', time: '12:00–1:00 PM', title: 'Lunch available', detail: 'Grab-and-go lunch is available during the hacking block.' },
  { day: 'Day 1 · Aug 6', time: '6:00–7:00 PM', title: 'Dinner available', detail: 'Grab-and-go dinner is available while teams continue building.' },
  { day: 'Day 1 · Aug 6', time: '8:30–9:00 PM', title: 'Day 1 announcements', detail: 'Review the next day’s schedule and the noon submission deadline.' },
  { day: 'Day 2 · Aug 7', time: '9:00–9:30 AM', title: 'Participant check-in', detail: 'Teams return in person or online and get ready for the final build window.' },
  { day: 'Day 2 · Aug 7', time: '9:30–10:00 AM', title: 'Day 2 announcements', detail: 'Review the submission deadline and presentation process.' },
  { day: 'Day 2 · Aug 7', time: '10:00 AM–12:00 PM', title: 'Final hacking block', detail: 'Finish, test, document, and prepare the final submission.' },
  { day: 'Day 2 · Aug 7', time: '12:00 PM', title: 'Final submission deadline', detail: 'GitHub repository links, presentation slide decks, demo videos, and team information are due.', highlight: true },
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
  { index: '01', title: 'Creativity & originality', body: 'Does the project show visual craft, a novel idea, and a distinctive approach?' },
  { index: '02', title: 'Impact', body: 'Could the solution address a real-world problem and feasibly help a larger group of people?' },
  { index: '03', title: 'Complexity', body: 'Does the project demonstrate depth of engineering and strong technical execution?' },
  { index: '04', title: 'Execution & functionality', body: 'Is the prototype stable, functional, and ready to show working features in a live demo?' },
  { index: '05', title: 'Presentation & demo', body: 'Does the team communicate clearly through its explanation, slide design, and demo?' },
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
  price: string
  benefits: string
}

export const sponsorTiers: SponsorTier[] = [
  { tier: 'Gold', price: '$1,750', benefits: 'All Silver benefits, plus a large t-shirt logo, five-minute speaking slot, judging-panel seat, track naming rights, and a post-event impact report.' },
  { tier: 'Silver', price: '$750', benefits: 'All Bronze benefits, plus a dedicated table, social media post, 20–30 minute workshop slot, and Founding Sponsor badge.' },
  { tier: 'Bronze', price: '$250', benefits: 'Footer logo, swag distribution, opening-ceremony mention, and a small t-shirt logo.' },
  { tier: 'In-kind / Friend', price: 'Swag or product', benefits: 'Footer logo, swag-table signage, and a social media thank-you.' },
]

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  { q: 'Who can participate?', a: 'Acuity Hackathon is open to middle and high school students. Students at every experience level are welcome.' },
  { q: 'Do I need a team?', a: 'No. Build solo, register with teammates, or use team matching at the event. Teams may have up to four members.' },
  { q: 'Is the event in person or online?', a: 'Both. Join at 2933 Bunker Hill Ln in Santa Clara or participate through Zoom and Discord. Both groups follow the same event timeline.' },
  { q: 'What are the possible themes?', a: 'The three candidates are Mental Health, Machine Learning & AI Agents, and Randomized Simulation. One final theme will be selected from the pool and revealed at kickoff on Day 1.' },
  { q: 'What can I build?', a: 'Respond to the revealed theme with an original project. Directions under consideration include wellness apps, agentic workflow tools, live data simulations, cybersecurity tools, communication hubs, finance trackers, and browser extensions.' },
  { q: 'Can I use AI?', a: 'Yes. AI development tools and assistants are allowed, but vibe coding or generating an entire unreviewed project is prohibited and may be penalized. Your team must understand, review, and be able to explain what it submits.' },
  { q: 'Can I use existing code or third-party tools?', a: 'Do not bring a premade project or plagiarize code. Your submission must be primarily original work created during the event, and every third-party library, asset, model, source, or other contribution must be credited.' },
  { q: 'How are projects judged?', a: 'A professional panel reviews creativity, impact, complexity, execution and functionality, and the presentation or demo. Final scoring details will be shared with participants.' },
  { q: 'What will I submit?', a: 'By 12:00 PM on Aug 7, submit a GitHub repository link, presentation slide deck, demo video, and team information. Credit all third-party work in your project.' },
  { q: 'When do I need to register?', a: 'Submit the linked registration form at least one week before the event.' },
  { q: 'What conduct is expected?', a: 'Be professional and treat fellow participants, organizers, judges, and their work with respect. A complete code of conduct will be shared before the event.' },
]
