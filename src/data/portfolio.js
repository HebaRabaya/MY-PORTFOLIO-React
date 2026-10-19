// ============================================================
//  Centralized portfolio data
//  Edit your profile, skills, and projects from this one file.
// ============================================================

// --- Personal / profile info ---
export const profile = {
  name: "Heba Rabaya",
  title: "Computer Science Graduate | Software Engineer",
  titleLines: [
    "Computer Science Graduate",
    "Software Engineer",
  ],
  typingTexts: [
    "Building clean, modern experiences",
    "Web & mobile apps with care",
    "Turning ideas into real products",
  ],
  email: "hebarabaya666@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/heba-rabaya-a5ba03332",
    github: "https://github.com/HebaRabaya",
  },
};

// --- Skills ---
// icon = Devicon class (https://devicon.dev) or Font Awesome class.
export const skills = [
  { name: "Flutter", icon: "devicon-flutter-plain colored" },
  { name: "Dart", icon: "devicon-dart-plain colored" },
  { name: "React.js", icon: "devicon-react-original colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  //{ name: "C#", icon: "devicon-csharp-plain colored" },
  { name: ".NET", icon: "devicon-dotnetcore-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "REST APIs", icon: "fa-solid fa-plug" },
];

// --- Projects ---
export const projects = [
  {
    id: 1,
    title: "IvestPress",
    cat: "React & Node.js",
   // img: require("../assets/ivest press.png"),
    imageFit: "contain",
    link: "",
    description:
      "AI-powered platform for journalists. Graduation project built with React, Node.js, Express and PostgreSQL.",
  },
  {
    id: 2,
    title: "Bloom Flowers",
    cat: "Flutter & Firebase",
    img: require("../assets/bloom.png"),
    imageFit: "contain",
    link: "https://github.com/HebaRabaya/Bloom_app.git",
    description:
      "A flower shop mobile app built with Flutter, Dart, Firebase and Cloudinary.",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    cat: "React",
    img: require("../assets/portfolio-react.png"),
    imageFit: "contain",
    link: "https://hebarabaya.github.io/MY-PORTFOLIO-React/",
    description:
      "This portfolio website — designed and built with React and Framer Motion.",
  },
];
