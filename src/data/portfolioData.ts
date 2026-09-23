import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aether-finance',
    title: 'Aether Finance',
    category: 'Mobile Apps',
    year: '2026',
    role: 'Lead Product Designer',
    client: 'Aether Technologies Inc.',
    description: 'Next-generation personal finance & wealth management app engineered for intuitive liquidity tracking and portfolio intelligence.',
    summary: 'A complete mobile rethink of neo-banking interfaces with high-density financial charting, zero clutter, and instantaneous transaction feedback.',
    image: '/src/assets/images/project_fintech_mobile_1790147011931.jpg',
    tags: ['iOS App', 'Design System', 'FinTech', 'Data Visualization'],
    metrics: [
      { label: 'Weekly Active Users', value: '+142%' },
      { label: 'App Store Rating', value: '4.9★' },
      { label: 'Avg Session Duration', value: '3.8m' }
    ],
    challenge: 'Existing fintech applications overwhelmed users with multi-level nested menus and low-contrast financial graphs, leading to a 34% drop-off during account funding and daily asset reviews.',
    solution: 'Designed an unboxed, gesture-first dashboard with biometric card toggling, high-contrast monochrome financial micro-charts, and clear visual hierarchy optimized for one-thumb reachability.',
    testimonial: {
      quote: 'Ivan transformed our clunky financial interface into one of the most celebrated fintech apps in our category. The retention lift spoke for itself.',
      author: 'Marcus Vance',
      title: 'VP of Product',
      company: 'Aether Labs'
    }
  },
  {
    id: 'forma-studio',
    title: 'Forma Studio & Gallery',
    category: 'Web Platforms',
    year: '2025',
    role: 'Art Director & UI/UX',
    client: 'Forma Architecture Group',
    description: 'Editorial commerce & exhibition platform for an avant-garde Swiss architectural practice and furniture atelier.',
    summary: 'Minimalist editorial presentation merging architectural monographs with an interactive furniture procurement catalog and 3D space showcases.',
    image: '/src/assets/images/project_editorial_commerce_1790147046357.jpg',
    tags: ['E-Commerce', 'Editorial', 'Architecture', 'Web Experience'],
    metrics: [
      { label: 'Inbound Inquiries', value: '+88%' },
      { label: 'Catalog Engagement', value: '5.2 min' },
      { label: 'Press Features', value: '14+' }
    ],
    challenge: 'The studio needed an online home that matched their uncompromising physical craftsmanship without sacrificing straightforward e-commerce conversion mechanics.',
    solution: 'Engineered an asymmetric 12-column Swiss grid system with ultra-refined typography, effortless filter controls, and seamless full-bleed project drawers.',
    testimonial: {
      quote: 'The digital experience feels as tactile and deliberate as the physical buildings we construct. Working with Ivan set a new benchmark for us.',
      author: 'Elena Rostova',
      title: 'Founding Partner',
      company: 'Forma Atelier Zurich'
    }
  },
  {
    id: 'kroma-core',
    title: 'Kroma Core Design System',
    category: 'Design Systems',
    year: '2025',
    role: 'Principal System Designer',
    client: 'Kroma Cloud Platforms',
    description: 'Enterprise design system and tokenized component architecture powering 6 enterprise cloud products across 40+ engineering teams.',
    summary: 'Comprehensive multi-brand design tokens, accessible components, and strict WCAG AAA color contrast governance across web and mobile surfaces.',
    image: '/src/assets/images/project_design_system_1790147027486.jpg',
    tags: ['Design System', 'Figma Tokens', 'Enterprise SaaS', 'Accessibility'],
    metrics: [
      { label: 'Dev Velocity Gain', value: '+35%' },
      { label: 'Component Adoption', value: '96%' },
      { label: 'Accessibility Errors', value: '0' }
    ],
    challenge: 'Six legacy enterprise applications had fragmented styling, duplicate UI codebases, and inconsistent accessibility ratings across their developer portals.',
    solution: 'Built a unified, tokenized design framework featuring strict type scales, modular card elevations, tabular data layouts, and comprehensive interactive guidelines.',
    testimonial: {
      quote: 'Ivan unified what used to be six completely disconnected products into a cohesive, elegant ecosystem. Design debt was virtually eliminated.',
      author: 'David Chen',
      title: 'Chief Technology Officer',
      company: 'Kroma Platforms'
    }
  },
  {
    id: 'pulse-health',
    title: 'Pulse Habit & Biomarkers',
    category: 'Mobile Apps',
    year: '2026',
    role: 'Product Lead',
    client: 'Pulse Biohealth',
    description: 'Minimalist biomarker companion and circadian rhythm tracking application with ambient telemetry insights.',
    summary: 'Restful, screen-fatigue-free health interface designed to translate complex sensor telemetry into three actionable daily routines.',
    image: '/src/assets/images/project_fintech_mobile_1790147011931.jpg',
    tags: ['iOS App', 'HealthTech', 'Telemetry', 'Interaction Design'],
    metrics: [
      { label: '30-Day Retention', value: '64%' },
      { label: 'Daily Routine Check-in', value: '91%' },
      { label: 'App Store Recognition', value: 'Editor’s Pick' }
    ],
    challenge: 'Users were suffering from notification fatigue and overwhelming raw medical sensor data that caused anxiety rather than wellness.',
    solution: 'Created an unboxed, monochrome visual architecture with gentle ambient gradients, haptic milestone celebrations, and high-legibility typographic cards.',
    testimonial: {
      quote: 'Pulse is an oasis of calm compared to typical chaotic health apps. Ivan’s visual restraint and UX clarity made all the difference.',
      author: 'Dr. Sarah Lin',
      title: 'Head of Clinical Research',
      company: 'Pulse Biohealth'
    }
  }
];

export const SERVICES = [
  {
    number: '01',
    title: 'Digital Product Design',
    description: 'End-to-end UX/UI for web and native mobile applications from wireframe architecture to pixel-perfect high-fidelity production states.',
    deliverables: ['Product Architecture', 'User Journey Mapping', 'High-Fidelity UI', 'Interactive Prototypes']
  },
  {
    number: '02',
    title: 'Design Systems & Tokens',
    description: 'Scalable, tokenized UI component systems that bridge Figma and production React codebases with zero communication loss.',
    deliverables: ['Token Hierarchy', 'Component Libraries', 'Accessibility Audits', 'Documentation & Guidelines']
  },
  {
    number: '03',
    title: 'Visual & Brand Direction',
    description: 'Distinctive visual identities, bespoke typographic hierarchies, and editorial design languages that set category-leading digital brands apart.',
    deliverables: ['Typography Systems', 'Art Direction', 'Editorial Web Design', 'Brand Guidelines']
  },
  {
    number: '04',
    title: 'Design Audits & Optimization',
    description: 'Heuristic evaluations, UX bottleneck diagnostics, and rapid layout revamps to eliminate friction and elevate conversion metrics.',
    deliverables: ['Heuristic Report', 'Typography Rebalancing', 'Mobile Usability Review', 'Interactive Polish']
  }
];

export const CLIENT_LOGOS = [
  'Aether Technologies',
  'Forma Atelier',
  'Kroma Cloud',
  'Pulse Health',
  'Linear Systems',
  'Monolith Ventures'
];
