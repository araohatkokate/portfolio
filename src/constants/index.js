import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tripguide,
  threejs,
  SnapFix,
  NetSage,
  PhonebookManager,
  BugHouse,
  Headstarter,
  SCAI,
  UTA,
  TechLink,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "AI/ML Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Fellow",
    companyName: "Headstarter AI",
    icon: Headstarter,
    iconBg: "#383E56",
    date: "June 2024 - September 2024",
    points: [
      "Spearheaded the development of commercially viable AI-based full-stack applications, integrating advanced AI models to enhance system performance by 20% and implementing microservices architecture on AWS, reducing server response time by 30%.",
      "Engaged in weekly hackathons and collaborative coding sessions, improving problem-solving skills and fostering a team-oriented approach. Actively participated in resume reviews and interview preparation sessions, significantly boosting job-readiness.",
      "Led a capstone project focused on achieving 1,000 user sign-ups or generating $1,000 in revenue, utilizing data-driven strategies and iterative design processes to meet and exceed objectives, demonstrating expertise in building scalable, robust, and market-ready solutions.",
    ],
  },
  {
    title: "Web Developer and Co-event coordinator",
    companyName: "Students in Computing and Artificial Intelligence",
    icon: SCAI,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Design and develop the frontend for the SCAI organization website, implementing responsive design practices to optimize user experience across various devices and screen sizes.",
      "Collaborate with backend developers to integrate frontend components with server-side functionalities, achieving a seamless and cohesive user experience.",
      "Organize and coordinate events to promote AI and computing knowledge, including planning events, signing up the organization for university events, and engaging with members to ensure successful and impactful events.",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    companyName: "University of Texas at Arlington",
    icon: UTA,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Conducting research on jailbreaking large language models to assess vulnerabilities in AI-generated responses.",
      "Developing and refining prompts to challenge LLMs, identifying security flaws and unintended behavior in AI responses.",
      "Collaborating with a research team to document findings and propose strategies for mitigating AI vulnerabilities.",
    ],
  },
  {
    title: "Computer Science Tutor",
    companyName: "University of Texas at Arlington",
    icon: UTA,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Providing one-on-one tutoring for UTA CSE undergraduate courses, assisting students in mastering subject material, debugging programs, and solving complex programming problems.",
      "Manage daily operations of the CSE Student Success Center, including preparing lab computers, organizing work areas, and ensuring smooth appointment check-ins.",
      "Collaborate with Student Success Center representatives in weekly meetings to discuss strategies for improving student outcomes and enhancing tutoring services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SnapFix",
    description:
      "A cross-platform desktop application for capturing screenshots, taking notes, and generating flashcards using AI to help users with productivity.",
    tags: [
      {
        name: "Electron.js",
        color: "white-text-gradient",
      },
      {
        name: "Vue.js",
        color: "white-text-gradient",
      },
      {
        name: "Python",
        color: "white-text-gradient",
      },
      {
        name: "Flask",
        color: "white-text-gradient",
      },
      {
        name: "Open AI",
        color: "white-text-gradient",
      },
    ],
    image: SnapFix,
    sourceCodeLink: "https://github.com/araohatkokate/StoryLine",
  },
  {
    name: "BugHouse App",
    description:
      "A mobile application for computer science students at UTA to provide easy session scheduling, attendance tracking and automated reminders for accessibility.",
    tags: [
      {
        name: "Flutter",
        color: "white-text-gradient",
      },
      {
        name: "Firebase",
        color: "white-text-gradient",
      },
      {
        name: "Node.js",
        color: "white-text-gradient",
      },
      {
        name: "O Auth 2.0",
        color: "white-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "white-text-gradient",
      },
    ],
    image: BugHouse,
    sourceCodeLink: "https://github.com/araohatkokate/Code2Video",
  },
  {
    name: "StoryLine",
    description:
      "A scalable mobile blog application featuring user authentication, blog creation, blog editing, offline support and proper state management to provide a seamless user experience.",
    tags: [
      {
        name: "Flutter",
        color: "white-text-gradient",
      },
      {
        name: "Dart",
        color: "white-text-gradient",
      },
      {
        name: "Bloc",
        color: "white-text-gradient",
      },
      {
        name: "Cubit",
        color: "white-text-gradient",
      },
      {
        name: "Supabase",
        color: "white-text-gradient",
      },
      {
        name: "Hive",
        color: "white-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/araohatkokate/StoryLine",
  },
  {
    name: "TechLink",
    description:
      "A networking platform for tech enthusiasts and professionals to collaborate with like minded individuals and stay connected by fostering a sense of community.",
    tags: [
      {
        name: "Express.js",
        color: "white-text-gradient",
      },
      {
        name: "Node.js",
        color: "white-text-gradient",
      },
      {
        name: "MongoDB",
        color: "white-text-gradient",
      },
      {
        name: "React",
        color: "white-text-gradient",
      },
      {
        name: "Redux",
        color: "white-text-gradient",
      },
      {
        name: "multer",
        color: "white-text-gradient",
      },
      {
        name: "bcrypt",
        color: "white-text-gradient",
      },
    ],
    image: TechLink,
    sourceCodeLink: "https://github.com/araohatkokate/MLH-Connect",
  },
  {
    name: "PhoneBook Manager",
    description:
      "A secure and scalable PhoneBook API using FastAPI, featuring role-based access control, input validation and CRUD operations for efficient contact management.",
    tags: [
      {
        name: "Python",
        color: "white-text-gradient",
      },
      {
        name: "Flask",
        color: "white-text-gradient",
      },
      {
        name: "FastAPI",
        color: "white-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "white-text-gradient",
      },
      {
        name: "O Auth 2.0",
        color: "white-text-gradient",
      },
    ],
    image: PhonebookManager,
    sourceCodeLink: "https://github.com/araohatkokate/PhoneBook-Manager",
  },
  {
    name: "NetSage",
    description:
      "A full stack application which utilizes RAG LLM to generate network based products to users based on a particular product catalog and user requirements.",
    tags: [
      {
        name: "Next.js",
        color: "white-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "white-text-gradient",
      },
      {
        name: "Firebase",
        color: "white-text-gradient",
      },
      {
        name: "Python",
        color: "white-text-gradient",
      },
      {
        name: "Flask",
        color: "white-text-gradient",
      },
    ],
    image: NetSage,
    sourceCodeLink: "https://github.com/DevratPatel/HackUTDOmegaProject",
  },
];

export { services, technologies, experiences, testimonials, projects };
