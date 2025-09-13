import type { Project } from "@/types";

export const projectCategories = [
  "All",
  "Full Stack",
  "Backend",
  "Mobile",
  "Embedded Systems",
];

export const allProjects: Project[] = [
  {
    image: "/src//assets/images/chat-app.png",
    name: "Realtime Chat App",
    technologyStack: "React, Node.js, Express.js, Socket.io",
    githubLink: "https://github.com/regis-mugisha/chat-app",
    liveDemoLink: "https://chat-app-yimr.onrender.com/",
    type: "full stack",
  },
  {
    image: "/src/assets/images/expense-tracker.png",
    name: "Expense Tracker",
    technologyStack: "React Native, Expo, Node.js, Express.js, Upstash",
    githubLink: "https://github.com/regis-mugisha/expo-wallet-mobile",
    type: "mobile",
  },
  {
    name: "Simple Book Review API Backend",
    technologyStack: "Spring Boot",
    githubLink: "https://github.com/regis-mugisha/book-review-api",
    type: "backend",
  },
  {
    name: "Parking Management System",
    technologyStack: "Python, Flask, Arduino",
    githubLink: "https://github.com/regis-mugisha/pms",
    type: "embedded systems",
  },
];
