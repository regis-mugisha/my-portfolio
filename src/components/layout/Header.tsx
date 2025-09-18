import { links } from "@/constants/links";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";
import { Button } from "../ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm flex items-center justify-between py-4 px-6 md:px-16">
      <img
        className="w-8 h-8 rounded-full object-cover"
        src="/src/assets/images/profile-pic.jpg"
        alt="profile-pic"
      />

      {/* Navigation bar */}
      <nav className="hidden md:flex items-center gap-7 border py-3 px-4 rounded-full shadow-md">
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

      <div className="flex items-center gap-4">
        <AnimatedThemeToggler />
        <Button
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-full inset-x-0 w-full mt-7 md:hidden bg-background shadow-lg rounded-lg border">
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            {links.map((link) => (
              <a
                href={`#${link.toLowerCase()}`}
                key={link}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary transition-colors text-lg"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
