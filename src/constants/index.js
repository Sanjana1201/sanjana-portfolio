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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
nxtWave,
  deloitte,
  adobe,
  salesforce,
  mysql,
  jobit,
  tripguide,
  threejs,
nxtWatch,
  crimePortal,
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
    title: "MERN stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Adobe Experience Cloud Developer",
    icon: backend,
  },
  {
    title: "Marketing Technology Developer",
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
    name: "Adobe",
    icon: adobe,
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
    name: "Salesforce",
    icon: salesforce,
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
    name: "mySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "NxtWave Disruptive Technologies PVT LTD",
    icon: nxtWave,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - June 2023",
    points: [
"Worked as a front-end developer for a platform for coder’s community of 200,000+ students.",
      "Served Query Resolution and Placement Support team and developed features according to business requirements, utilizing cutting-edge technologies to deliver high-quality features.",
      "Led the front-end development of an AI-powered mock interview platform(Version 1), with around 100 test users.",
      "Developing and maintaining web applications using React.js and other related technologies.",
            "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Marketing Technology Developer | Analyst",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developed and optimized Salesforce Marketing Cloud and Adobe Journey Optimizer email templates, leveraging object-oriented design to improve efficiency by 70% and reduce costs by $25,000+.",
      "Designed customer journeys in AJO, automating workflows and improving multi-tiered system performance.",
      "Built CDP platforms, designing schemas, integrating REST APIs and optimizing query performance.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
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
    name: "Crime Portal",
    description:
      "A responsive 22 pages crime portal website with Google authentication and authorization to log crime reports for faster and easier online complaints. Google logins are integrated using O-Auth.",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: crimePortal,
    source_code_link: [{ name: "https://github.com/Sanjana1201/Crime-Portal", type: "github"},]
  },
  {
    name: "NxtWatch",
    description:
      "A cross-browser compatible Youtube clone website that allows users to watch videos and save them. i18n is used to make the website multilingual and Themeprovider is used to toggle themes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "MobX",
        color: "pink-text-gradient",
      },
    ],
    image: nxtWatch,
    source_code_link: [{name: "https://github.com/Sanjana1201/nxtWatch", type: "github"},{name: "https://sanjanas-nxtwatch.netlify.app", type: "link"}]
  },
];

export { services, technologies, experiences, testimonials, projects };
