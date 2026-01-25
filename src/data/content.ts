/**
 * Portfolio Content Data
 * ----------------------
 * All content is centralized here for easy editing.
 * Replace placeholder text with your actual information.
 */

export const siteConfig = {
  name: "Umar Zeb",
  title: "Founder & Software Engineer",
  description: "Building AI-powered software companies. Software engineer and entrepreneur focused on scalable SaaS products.",
  url: "https://umarzeb.com",
  email: "contact@umarzeb.com",
  location: "San Francisco, CA",
  available: true,
  social: {
    linkedin: "https://linkedin.com/in/umarzeb",
    github: "https://github.com/umarzeb",
    twitter: "https://twitter.com/umarzeb",
  },
};

export const hero = {
  greeting: "Umar Zeb",
  headline: "Building software companies.",
  subheadline: "Founder and software engineer focused on AI-powered SaaS products. Previously built and scaled products serving thousands of users.",
  credentials: [
    "Founded 2 companies",
    "10+ years engineering",
    "3 successful exits",
  ],
};

export const about = {
  title: "Background",
  paragraphs: [
    "I build software companies. Over the past decade, I've founded multiple ventures, led engineering teams, and shipped products used by thousands of businesses worldwide.",
    "My focus is on AI and SaaS—building tools that solve real problems with clean, scalable architecture. I care about craft: code quality, user experience, and sustainable growth.",
    "Before founding companies, I worked as a senior engineer at early-stage startups, where I learned to ship fast without compromising on fundamentals.",
  ],
  facts: [
    { label: "Based in", value: "San Francisco, CA" },
    { label: "Experience", value: "10+ years" },
    { label: "Focus", value: "AI / SaaS" },
    { label: "Status", value: "Building" },
  ],
};

export const ventures = {
  title: "Companies & Ventures",
  subtitle: "Companies I've founded, co-founded, or led as a technical leader.",
  items: [
    {
      name: "Company One",
      role: "Founder & CEO",
      period: "2022 – Present",
      status: "Active",
      description: "AI-powered workflow automation platform for enterprise teams. Processing 1M+ automations monthly.",
      highlights: ["$2M ARR", "50+ enterprise clients", "12-person team"],
      url: "https://companyone.com",
    },
    {
      name: "Company Two",
      role: "Co-Founder & CTO",
      period: "2019 – 2022",
      status: "Acquired",
      description: "Developer tools for API testing and documentation. Acquired by a Fortune 500 company.",
      highlights: ["100K+ users", "Acquired 2022", "Series A funded"],
      url: null,
    },
    {
      name: "Company Three",
      role: "Founding Engineer",
      period: "2017 – 2019",
      status: "Acquired",
      description: "E-commerce analytics platform. First engineering hire, built core product from scratch.",
      highlights: ["$10M+ GMV tracked", "50+ integrations", "Acquired 2019"],
      url: null,
    },
  ],
};

export const projects = {
  title: "Projects & Products",
  subtitle: "Selected technical projects and products I've built.",
  items: [
    {
      name: "AI Document Parser",
      category: "Open Source",
      description: "High-accuracy document extraction using vision models. 10K+ GitHub stars.",
      tech: ["Python", "PyTorch", "FastAPI"],
      url: "https://github.com/umarzeb/doc-parser",
      metrics: "10K+ stars",
    },
    {
      name: "SaaS Boilerplate",
      category: "Product",
      description: "Production-ready Next.js starter for SaaS applications. Auth, billing, teams built-in.",
      tech: ["Next.js", "TypeScript", "Stripe"],
      url: "https://saasboilerplate.io",
      metrics: "500+ licenses sold",
    },
    {
      name: "Real-time Analytics Engine",
      category: "Infrastructure",
      description: "Sub-millisecond event processing pipeline handling 1B+ events/day.",
      tech: ["Go", "Kafka", "ClickHouse"],
      url: null,
      metrics: "1B+ events/day",
    },
    {
      name: "Mobile SDK",
      category: "Developer Tools",
      description: "Cross-platform SDK for mobile analytics. Used by 200+ apps.",
      tech: ["Swift", "Kotlin", "React Native"],
      url: null,
      metrics: "200+ apps",
    },
  ],
};

export const achievements = {
  title: "Achievements",
  items: [
    {
      metric: "$5M+",
      label: "Revenue Generated",
      description: "Across founded companies",
    },
    {
      metric: "2",
      label: "Successful Exits",
      description: "Companies acquired",
    },
    {
      metric: "100K+",
      label: "Users Served",
      description: "Across all products",
    },
    {
      metric: "50+",
      label: "Enterprise Clients",
      description: "Fortune 500 included",
    },
  ],
  milestones: [
    { year: "2024", event: "Launched AI automation platform" },
    { year: "2022", event: "Company Two acquired" },
    { year: "2021", event: "Raised Series A funding" },
    { year: "2019", event: "Company Three acquired" },
    { year: "2017", event: "First founding engineer role" },
    { year: "2014", event: "Started professional engineering career" },
  ],
};

export const expertise = {
  title: "Expertise",
  categories: [
    {
      name: "Technical Leadership",
      skills: ["System Architecture", "Technical Strategy", "Team Building", "Code Review", "DevOps"],
    },
    {
      name: "Languages & Frameworks",
      skills: ["TypeScript", "Python", "Go", "React", "Next.js", "Node.js", "FastAPI"],
    },
    {
      name: "Infrastructure",
      skills: ["AWS", "GCP", "Kubernetes", "PostgreSQL", "Redis", "Kafka"],
    },
    {
      name: "AI & ML",
      skills: ["LLMs", "RAG Systems", "Computer Vision", "PyTorch", "Vector Databases"],
    },
    {
      name: "Product & Business",
      skills: ["Product Strategy", "Fundraising", "GTM", "User Research", "Analytics"],
    },
  ],
};

export const credentials = {
  title: "Credentials",
  education: [
    {
      degree: "M.S. Computer Science",
      institution: "Stanford University",
      year: "2016",
      focus: "Machine Learning & Distributed Systems",
    },
    {
      degree: "B.S. Computer Science",
      institution: "UC Berkeley",
      year: "2014",
      focus: "Algorithms & Systems",
    },
  ],
  certifications: [
    { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2023" },
    { name: "Google Cloud Professional Data Engineer", issuer: "Google Cloud", year: "2022" },
  ],
  publications: [
    {
      title: "Efficient Document Understanding at Scale",
      venue: "NeurIPS Workshop",
      year: "2023",
      url: null,
    },
    {
      title: "Building Real-time Analytics Systems",
      venue: "O'Reilly Media",
      year: "2021",
      url: null,
    },
  ],
};

export const testimonials = {
  title: "What Others Say",
  items: [
    {
      quote: "One of the most technically capable founders I've worked with. Umar combines deep engineering expertise with strong product intuition.",
      author: "Jane Smith",
      role: "Partner",
      company: "Venture Capital Firm",
    },
    {
      quote: "Umar built our entire technical infrastructure from scratch. His systems still run flawlessly three years later.",
      author: "John Doe",
      role: "CEO",
      company: "Acquired Startup",
    },
    {
      quote: "Exceptional ability to translate complex technical concepts for non-technical stakeholders. Rare combination of skills.",
      author: "Sarah Johnson",
      role: "VP Engineering",
      company: "Fortune 500 Company",
    },
  ],
};

export const contact = {
  title: "Get in Touch",
  subtitle: "Open to discussing ventures, partnerships, advisory roles, and interesting technical challenges.",
  cta: "Schedule a conversation",
  email: "contact@umarzeb.com",
  availability: "Currently accepting select advisory and consulting engagements.",
};
