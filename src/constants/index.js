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
  orufy,
  jecrc,
  subodh,
  wager,
  URLShortner,
  tripguide,
  threejs,
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
    title: "Automation Engineer",
    icon: web,
  },
  {
    title: "Playwright Engineer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Manual Tester",
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
    title: "Software Test Engineer",
    company_name: "Orufy Technologies Private Limited",
    icon: orufy,
    iconBg: "#ffffff",
    date: "February 2025 - Augest 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Master of Computer Applications(MCA)",
    company_name: "ARTIFICIAL INTELLIGENCE",
    icon: jecrc,
    iconBg: "#E6DEDD",
    date: "JULY 2023 - JULY 2025",
    points: [
      " JECRC University, Jaipur, India: Master of Computer Applications (MCA)",
      "CGPA: 7.97 / 10",
      "Relevant Coursework: DSA, System Design, Web Development, Software Testing, ADBMS",
    ],
  },
  {
    title: "Bachelor of Computer Applications(BCA)",
    company_name: "COMPUTER APPLICATION",
    icon: subodh,
    iconBg: "#383E56",
    date: "JULY 2020 - JULY 2023",
    points: [
      "Subodh P.G. College, Jaipur, India: Bachelor of Computer Applications (BCA)",
      "Percentage: 79%",
      "Relevant Coursework: Web Development, Operating Systems, DBMS.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Tushar’s Playwright automation halved our testing time and boosted release speed.",
    name: "Vikash Sharma",
    designation: "CEO",
    company: "Orufy Technologies",
    image: "https://assets.orufy.com/image_901_1_5ad0c1dfd0.webp",
  },
  {
    testimonial:
      "Tushar’s automation made our QA process faster, smarter, and far more reliable.",
    name: "Prerna Saxena",
    designation: "PM",
    company: "Orufy Technologies",
    image: "https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg",
  },
  {
    testimonial:
      "Tushar’s Playwright automation halved our testing time and boosted release speed. ",
    name: "Manan Agarwal",
    designation: "SDE 2",
    company: "Orufy Technologies",
    image: "https://media.licdn.com/dms/image/v2/D5603AQExJqoHC9yCCA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732123520331?e=1756339200&v=beta&t=yxVWbYlf9mMkYWqedGr5mATfSML8nuJBDrVZ5ajedTo",
  },
];

const projects = [
  {
    name: "Wagerx",
    description:
      "A fast, interactive crypto betting app with real-time odds and wallet integration. I worked on UI testing, automation with Playwright, and ensuring smooth, bug-free gameplay.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wager,
    source_code_link: "https://github.com/",
  },
  {
    name: "URL SHORTNER",
    description:
      "A minimal and user-friendly app to shorten long URLs with a single click. Built for speed and ease, with real-time stats and error handling. Focused on clean UI and smooth UX.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: URLShortner,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
