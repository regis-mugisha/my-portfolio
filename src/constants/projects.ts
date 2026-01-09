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
    image: "/assets/images/savings-ms-client.png",
    name: "Savings Management System",
    description:
      "A mobile application that helps users manage their savings by allowing deposits, withdrawals, and real-time balance tracking in one place.",
    technologyStack:
      "React Native, Expo, EAS, Node.js, Express.js, MongoDB, Redis",
    githubLink: "https://github.com/regis-mugisha/savings-ms-client",
    type: "mobile",
  },
  {
    image: "/assets/images/subbuddy.png",
    name: "SubBuddy",
    description:
      "A web application that helps users manage and track subscriptions by centralizing recurring payments and sending reminders before renewals.",
    technologyStack:
      "Next.js, Typescript, Shadcn-UI, Clerk-Auth, Neon, Drizzle",
    githubLink: "https://github.com/regis-mugisha/subscription-sidekick",
    liveDemoLink: "https://subscription-sidekick.vercel.app/",
    type: "full stack",
  },
  {
    image: "/assets/images/chat-app.png",
    name: "Chatter",
    description:
      "A real-time chat web application that enables instant communication using socket-based messaging for low-latency conversations.",
    technologyStack: "React, Node.js, Express.js, Socket.io",
    githubLink: "https://github.com/regis-mugisha/chat-app",
    liveDemoLink: "https://chat-app-yimr.onrender.com/",
    type: "full stack",
  },
  {
    image: "/assets/images/expense-tracker.png",
    name: "FinTrack",
    description:
      "A mobile application that helps users track daily expenses, monitor remaining balance, and manage personal budgets more effectively.",
    technologyStack: "React Native, Expo, Node.js, Express.js, Upstash",
    githubLink: "https://github.com/regis-mugisha/expo-wallet-mobile",
    type: "mobile",
  },
  {
    name: "Book Review API Backend",
    description:
      "A RESTful backend API that manages books and their reviews by providing endpoints to create, read, update, and delete data, focusing on clean API design and documentation.",
    technologyStack: "Spring Boot,Swagger OpenAPI, H2 Database",
    githubLink: "https://github.com/regis-mugisha/book-review-api",
    type: "backend",
  },
  {
    name: "Parking Management System",
    description:
      "An embedded and IoT-based system that automates parking by recognizing vehicle number plates, managing entry and exit, and calculating parking fees in real time.",
    technologyStack: "Python, Flask, Arduino, SQLite, RFID",
    githubLink: "https://github.com/regis-mugisha/pms",
    type: "embedded systems",
  },
];
