import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating-dock";

const Footer = () => {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/regis-mugisha",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/regis-mugisha",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/__regis.mugisha/",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.link/5eciei",
    },
  ];
  return (
    <footer>
      <div className="flex items-center justify-center h-[5rem] w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
    </footer>
  );
};

export default Footer;
