import { Moon } from "lucide-react";
import { links } from "@/constants/links";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm flex items-center justify-between py-2 px-35">
      <img
        className="w-8 h-8 rounded-full object-cover"
        src="/src/assets/images/profile-pic.jpg"
        alt="profile-pic"
      />

      {/* Navigation bar */}
      <div>
        <nav className="flex items-center gap-7 border py-3 px-4 rounded-full shadow-md">
          {links.map((link) => (
            <a
              href={`#${link.toLowerCase()}`}
              key={link}
              className="hover:text-blue-500 transition delay-50 duration-300 ease-in-out"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div>
        <AnimatedThemeToggler />
      </div>
    </header>
  );
};

export default Header;
