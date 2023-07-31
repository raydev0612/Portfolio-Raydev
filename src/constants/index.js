import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  atento,
  carrent,
  jobit,
  tripguide,
  django,
  cog,
  mysim,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Python Data Analyst",
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
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Analista de Sistemas",
    company_name: "Mysimtravel",
    icon: mysim,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Mar 2021",
    points: [
      "Funcion 1",
      "Funcion 2",
      "Funcion 3",
      "Funcion 4",
    ],
  },
  {
    title: "Analista de QA",
    company_name: "Atento",
    icon: atento,
    iconBg: "#383E56",
    date: "Dec 2020 - Jul 2022",
    points: [
      "Funcion 1",
      "Funcion 2",
      "Funcion 3",
      "Funcion 4",
    ],
  },
  {
    title: "Web Developer Front-End",
    company_name: "Cognizant",
    icon: cog,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Funcion 1",
      "Funcion 2",
      "Funcion 3",
      "Funcion 4",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "Nombre",
    designation: "Cargo",
    company: "Empresa",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "",
    name: "Nombre",
    designation: "Cargo",
    company: "Empresa",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "",
    name: "Nombre",
    designation: "Cargo",
    company: "Empresa",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mini-Ecommerce",
    description:
      "E-commerce de pequeno porte que permite ao usuário buscar produtos por marca, preço e cor, proporcionando uma solução prática e eficiente para as necessidades de compras.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "three",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/raydev0612/ecommerce-filter",
  },
  {
    name: "Proyecto 2",
    description:
      "",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Proyecto 3",
    description:
      "",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };