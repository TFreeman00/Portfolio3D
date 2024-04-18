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
  git,
  figma,
  docker,
  expicon,
  tesla,
  shopify,
  VGstore,
  jobit,
  tripguide,
  threejs,
  FRS,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Realtor ",
    company_name: "Exp Realty",
    icon: expicon,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Mar 2024",
    points: [
      "Foster enduring client relationships and cultivate a robust network to secure a steady stream of referrals and repeat business.",
      "Leverage technology by employing a sophisticated client relationship management (CRM) system to efficiently manage client data and interactions.",
      "Deliver exceptional responsiveness by consistently exceeding client expectations with prompt and clear communication.",
      "Maintain a multi-channel presence by engaging with clients seamlessly through phone, email, and social media platforms.",
      "Demonstrate a commitment to continuous learning by actively pursuing relevant training and staying abreast of market trends to provide clients with the most up-to-date expertise. ",
    ],
  },
  {
    title: "Electonic Engineer ",
    company_name: "Five River Services",
    icon: FRS,
    iconBg: "#E6DEDD",
    date: "Apr 2017 - Sep 20217",
    points: [
      "Streamlined Communication & Navigation Systems: Delivered exceptional customer service, ensuring seamless operations of critical communication and navigation equipment aboard Coast Guard vessels. This vital support function directly contributed to mission success for the Coast Guard.",
      "Facilitated Cross-Coast Collaboration: Acted as a key liaison between East Coast management and Coast Guard personnel, fostering clear communication during conferences to keep all parties informed on upcoming and ongoing projects.",
      "Ensured Crew Safety & Timely Maintenance: Meticulously monitored maintenance schedules on National Security Cutters, prioritizing crew safety and guaranteeing timely completion of critical maintenance tasks.",
      "Reduced Outsourcing Costs: Demonstrated resourcefulness by creating new code plugs and programming 60 portable XTS5000 radios for a Coast Guard asset. This initiative saved the Coast Guard thousands of dollars in potential outsourcing fees.",
      "Maximized Equipment Uptime: Increased operational efficiency by repairing faulty surveillance camera network cards, saving the military over $20,000 in replacement expenses.",
    ],
  },
  {
    title: "Electronic Technician",
    company_name: "U.S. Coast Guard",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Oct 2007 - May 2017",
    points: [
      "Maintained & repaired critical navigation, communication, and vessel traffic systems across a vast fleet (25+ ships, 56 boats, 48 facilities).",
      "Resolved over 2,250 corrective maintenance issues, ensuring smooth operations.",
      "Led a 20-person electronic support detachment, scheduling maintenance and overseeing projects.",
      "Demonstrated exceptional responsiveness, handling over 800 after-hours duty calls.",
      "Saved the Navy significant time & resources by: Streamlining Supply Operations: As Supply Petty Officer, managed over $1 million in equipment, ensuring parts were readily available, minimizing mission delays.",
      "Enhancing Equipment Uptime: Proactively maintained VHF radios (EF Johnson, XTS models & Astro P25) and trained ship personnel for optimal usage.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "VG Store",
    url: "https://vgstore.netlify.app/",
    description:
      "Full Stack project allowing users to browse, watch trailers, and purchase video games.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: VGstore,
    source_code_link: "https://github.com/TFreeman00/Gamestore_Fnt",
  },
];

export { services, technologies, experiences, testimonials, projects };
