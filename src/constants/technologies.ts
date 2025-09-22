import type { Technology } from "@/types";

export const technologyCategories = ["Frontend", "Backend", "Mobile", "Others"];

// --- Frontend Technologies ---
export const frontendTech: Technology[] = [
  {
    name: "React",
    logo: "/assets/logos/react-svgrepo-com.svg",
    bgClassName: "bg-sky-100/70 dark:bg-sky-900/30",
  },
  {
    name: "Next.js",
    logo: "/assets/logos/nextjs-fill-svgrepo-com.svg",
    bgClassName: "bg-gray-200/70 dark:bg-gray-800/40",
  },
];

// --- Backend Technologies ---
export const backendTech: Technology[] = [
  {
    name: "Node.js",
    logo: "/assets/logos/nodejs-svgrepo-com.svg",
    bgClassName: "bg-green-100/70 dark:bg-green-900/30",
  },
  {
    name: "Express.js",
    logo: "/assets/logos/express-svgrepo-com.svg",
    bgClassName: "bg-gray-200/70 dark:bg-gray-800",
  },
  {
    name: "Spring Boot",
    logo: "/assets/logos/spring-icon-svgrepo-com.svg",
    bgClassName: "bg-green-100/70 dark:bg-green-900/30",
  },
];

// --- Mobile Development Technologies ---
export const mobileTech: Technology[] = [
  {
    name: "Expo",
    logo: "/assets/logos/expo-svgrepo-com.svg",
    bgClassName: "bg-gray-200/70 dark:bg-gray-800",
  },
];

// --- Other Programming Languages ---
export const othersTech: Technology[] = [
  {
    name: "Python",
    logo: "/assets/logos/python-svgrepo-com.svg",
    bgClassName: "bg-blue-100/70 dark:bg-blue-900/40",
  },
  {
    name: "C++",
    logo: "/assets/logos/c-plus-plus-svgrepo-com.svg",
    bgClassName: "bg-blue-100/70 dark:bg-blue-900/40",
  },
  {
    name: "Java",
    logo: "/assets/logos/java-4-logo-svgrepo-com.svg",
    bgClassName: "bg-orange-100/70 dark:bg-orange-900/40",
  },
];
