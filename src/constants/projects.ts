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
    type: "Full Stack",
  },
  {
    image: "/src/assets/images/expense-tracker.png",
    name: "Expense Tracker",
    technologyStack: "React Native, Expo, Node.js, Express.js, Upstash",
    githubLink: "https://github.com/regis-mugisha/expo-wallet-mobile",
    type: "Mobile",
  },
  {
    name: "Book Review API",
    technologyStack: "Spring Boot",
    githubLink: "https://github.com/regis-mugisha/book-review-api",
    type: "Backend",
  },
  {
    name: "Parking Management System",
    technologyStack: "Python, Flask, Arduino",
    githubLink: "https://github.com/regis-mugisha/pms",
    type: "Embedded Systems",
  },
];
