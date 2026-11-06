// All the text on the About page lives here.
// To update your info, edit this file — the components just display it.

export const intro = {
  heading: "Software engineer building reliable backend and cloud systems.",
  paragraphs: [
    "Hi, I'm Disha, a software developer based in London. I moved to the UK for my master's with a clear goal: to grow into a strong, reliable engineer by learning deeply, building real things, and improving through practice rather than just theory.",
    "I work across the stack — Java/Spring Boot, Node.js and Python (FastAPI) on the backend, React and Next.js on the frontend — and I care about how the parts of a system fit together, not just individual features.",
    "Lately I've focused on cloud and distributed systems. I'm AWS Developer Associate certified, I've shipped event-driven services with Kafka, SQS and Lambda in production, and today I build and deploy Spring Boot services on Azure. For me, cloud isn't about knowing services; it's about knowing why to use them, how they fail, and how to design things that are reliable and cost-aware.",
    "What defines me most is adaptability and ownership. I pick up new tools quickly, take responsibility for my work, and care about writing clean, maintainable code that actually helps people.",
  ],
  facts: [
    { label: "Based in", value: "London, UK" },
    { label: "MSc", value: "Distinction" },
    { label: "B.Tech CGPA", value: "9.29 / 10" },
    { label: "Certified", value: "AWS Developer" },
  ],
};

// Newest first
export const experience = [
  {
    role: "Software Engineer",
    company: "Valvenok Ltd",
    link: "https://www.valvenok.com/",
    date: "Sep 2026 – Present",
    location: "Bicester, Oxfordshire, UK",
    points: [
      "Own the Kosaplus UK e-commerce platform end to end — database design, APIs, customer-facing website, deployment and SEO — building it from scratch as my main day-to-day project.",
      "Designed and built the backend in Java and Spring Boot: a product catalogue API and a rules-based product configurator that turns a customer's choices into a valid, priced product, so customers can configure and price industrial products online.",
      "Built a single sign-on identity service in Spring Boot (OAuth 2.0 / OpenID Connect) that gives customers secure accounts across several of the company's websites.",
      "Built fast, search-friendly storefronts in Next.js and TypeScript for five company websites — product search and filters, cart, quote requests and customer account pages.",
      "Made e-commerce APIs faster and more secure with Redis caching and Redis-backed secure logout, and added structured logging to make production issues quicker to debug.",
      "Led technical SEO across all five websites — fixing audit issues, adding structured data and sitemaps — and published technical blog content to grow organic traffic.",
      "Automated delivery with CI/CD pipelines in GitHub Actions — automated tests, security scanning and deployment to Azure — and fixed critical security vulnerabilities the scans found.",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "OAuth 2.0", "Redis", "Azure", "Next.js", "TypeScript", "Material UI", "Docker", "GitHub Actions"],
  },
  {
    role: "Software Engineer Intern",
    company: "SumUp",
    link: "https://www.sumup.com/",
    date: "Jun 2026 – Sep 2026",
    location: "London, UK",
    points: [
      "Built and shipped a multi-channel order ingestion engine in Java/Spring Boot, with production-ready OAuth 2.0 merchant onboarding and third-party delivery integration.",
      "Achieved 99.9%+ ingestion reliability under peak load with an asynchronous AWS SQS buffering pipeline, using a dead-letter queue with exponential backoff and retries.",
      "Kept order-state orchestration under 500ms with an async Apache Kafka consumer that ingested POS read models and synced real-time financial reporting via internal Sales APIs.",
      "Extended a serverless microservice (TypeScript, Lambda, DynamoDB Streams, EventBridge) to add real-time busy modes, prep-time adjustments and order delays across Kitchen Display Systems.",
      "Prevented regressions across releases with unit and integration test suites automated in CI/CD.",
      "Sped up delivery with GitOps rollouts via ArgoCD on Kubernetes, and cut debugging time and MTTR with tracing in Honeycomb and log analysis in Grafana.",
      "Used AI coding agents (Cursor, Claude) to speed up feature work, test scaffolding and code reviews, working in an agile Scrum team.",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "AWS SQS", "Lambda", "TypeScript", "Kubernetes", "ArgoCD"],
  },
  {
    role: "Software Engineer",
    company: "Avalanche",
    link: "",
    date: "Apr 2026 – Jun 2026",
    location: "Remote",
    points: [
      "Developed features for an internal product with Next.js 15, React, TypeScript and Supabase/PostgreSQL in a Scrum team using JIRA sprints and PR reviews.",
      "Designed frontend state management with TanStack Query for server state and Zustand for client state, reducing redundant API calls.",
      "Built reusable components with Tailwind CSS and shadcn/ui, and migrated root layouts to Next.js 15 conventions.",
      "Built and tested the board filter bar (assignee, priority, label, type), covering URL params, API calls and empty states.",
    ],
    tech: ["Next.js 15", "React", "TypeScript", "Supabase", "TanStack Query", "Zustand"],
  },
  {
    role: "Software Engineer — MSc Research Project",
    company: "University of Exeter",
    link: "https://www.exeter.ac.uk/",
    date: "Jul 2025 – Sep 2025",
    location: "Exeter, UK",
    points: [
      "Built a decision support tool that applies linear programming over probabilistic attack graphs to recommend cost-effective cybersecurity control portfolios.",
      "Built a FastAPI backend using PuLP to solve multi-objective MILP models in under 2 minutes for 30+ controls.",
      "Used MongoDB for scenario storage and comparison, and automated deployment with AWS EC2, CodePipeline, CodeDeploy and Elastic Beanstalk.",
    ],
    tech: ["Python", "FastAPI", "PuLP", "MongoDB", "AWS"],
  },
  {
    role: "Full Stack Developer",
    company: "Zigy Prints",
    link: "https://www.linkedin.com/company/zigycustoms/about/",
    date: "Aug 2023 – Present",
    location: "Remote",
    points: [
      "Built a one-on-one chat feature for an e-commerce site using Socket.io, Node.js, MongoDB Atlas and a React chat UI.",
      "Added Google OAuth and JWT authentication for user login.",
    ],
    tech: ["Node.js", "Socket.io", "React", "MongoDB"],
  },
  {
    role: "Teaching Assistant",
    company: "Rangmashal Foundation",
    link: "https://www.rangmashal.org/",
    date: "Feb 2023 – Sep 2023",
    location: "Kolkata, India",
    points: [
      "Co-instructed a computer course for underprivileged students at a non-profit, teaching essential digital skills.",
    ],
    tech: [],
  },
];

// Newest first
export const hackathons = [
  {
    name: "Hack4Bengal",
    link: "https://www.hack4bengal.tech/",
    date: "Jul 2023",
    role: "Backend Developer",
    summary: "Built the backend for a MERN app that matches people with household helpers — REST APIs, MongoDB and JWT auth.",
  },
  {
    name: "Smart India Hackathon",
    link: "https://www.sih.gov.in/",
    date: "Aug 2022",
    role: "UI/UX Designer",
    summary: "Designed an educational app that lets teachers track how well each student follows the class.",
  },
];

// The "universe" of skills on the About page.
// Each ring is one orbit; `size` is its width in px.
export const skillOrbits = [
  { size: 300, skills: ["Java", "TypeScript", "Python", "JavaScript", "Spring Boot", "React"] },
  { size: 500, skills: ["Next.js", "Node.js", "FastAPI", "Kafka", "PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Supabase"] },
  { size: 700, skills: ["AWS Lambda", "SQS", "EventBridge", "S3", "ECS", "Docker", "Kubernetes", "ArgoCD", "Grafana", "Honeycomb", "CI/CD", "Azure", "Tailwind CSS"] },
];

// The full list, grouped — shown under the universe
export const skills = [
  { title: "Languages", items: ["Java", "Kotlin", "Python", "SQL", "JavaScript", "TypeScript", "C++"] },
  { title: "Backend", items: ["Spring Boot", "Spring Security", "OAuth 2.0 / OIDC", "Spring Data JPA", "FastAPI", "Node.js", "REST APIs", "Microservices"] },
  { title: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "TanStack Query", "Zustand"] },
  { title: "Data & Messaging", items: ["Apache Kafka", "Redis", "PostgreSQL", "Azure SQL / SQL Server", "MongoDB", "Supabase", "DynamoDB", "Flyway"] },
  { title: "AWS", items: ["SQS", "Lambda", "EventBridge", "DynamoDB Streams", "EC2", "S3", "IAM", "API Gateway", "ECS", "CloudFormation", "CodePipeline", "CodeDeploy", "CloudWatch", "Elastic Beanstalk"] },
  { title: "Azure", items: ["Container Apps", "Static Web Apps", "Azure SQL", "Storage Queues", "Communication Services"] },
  { title: "DevOps & Observability", items: ["Docker", "Kubernetes", "ArgoCD", "GitHub Actions", "CI/CD", "Trivy", "Testcontainers", "Honeycomb", "Grafana"] },
];

// Newest first
export const education = [
  {
    title: "AWS Certified Developer – Associate (DVA-C02)",
    place: "Amazon Web Services",
    date: "Nov 2025",
    note: "Valid until Nov 2028",
    link: "https://www.credly.com/badges/473ef46f-5436-4413-b1a9-ffd683f7a88b/public_url",
    linkText: "View badge",
  },
  {
    title: "MSc Advanced Computer Science",
    place: "University of Exeter, UK",
    date: "Sep 2024 – Sep 2025",
    note: "Distinction · Enterprise Computing, Software Engineering, Cloud Computing, Machine Learning",
  },
  {
    title: "B.Tech Computer Science and Engineering",
    place: "Netaji Subhash Engineering College (MAKAUT), Kolkata",
    date: "Sep 2020 – Jun 2024",
    note: "CGPA 9.29/10 · DSA, DBMS, Operating Systems, OOP, Computer Networks",
  },
];
