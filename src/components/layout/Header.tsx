import { links } from "@/constants/links";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";
import { Button } from "../ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm flex items-center justify-between py-4 px-6 md:px-16 text-sm">
      <button onClick={() => smoothScrollTo("home", 80)}>
        <img
          className="w-8 h-8 rounded-full object-cover"
          src="/assets/images/profile-pic.jpg"
          alt="profile-pic"
        />
      </button>

      {/* Navigation bar */}
      <nav className="hidden md:flex items-center gap-7 border py-3 px-4 rounded-full shadow-md">
        {links.map((link) => (
          <button
            onClick={() => smoothScrollTo(link.toLowerCase(), 80)}
            key={link}
            className="hover:text-blue-500 transition duration-70 ease-in-out"
          >
            {link}
          </button>
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
              <button
                onClick={() => {
                  smoothScrollTo(link.toLowerCase(), 80);
                  setIsMenuOpen(false);
                }}
                key={link}
                className="hover:text-primary transition-colors text-lg"
              >
                {link}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
