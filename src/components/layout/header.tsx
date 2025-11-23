import { links } from "@/constants/links";
import useScrollSpy from "@/hooks/use-scrollspy";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";
import { Button } from "../ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const ids = links.map((l) => l.toLowerCase());
  const activeId = useScrollSpy(ids, { threshold: 0.6 });
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg flex items-center justify-between py-4 px-6 md:px-16 text-sm">
      <button onClick={() => smoothScrollTo("home", 80)}>
        <img
          className="w-8 h-8 rounded-full object-cover"
          src="/assets/images/profile-pic.jpg"
          alt="Regis Mugisha profile picture"
          width={32}
          height={32}
        />
      </button>

      {/* Navigation bar */}
      <nav className="hidden md:flex items-center gap-7 border py-3 px-4 rounded-full shadow-md">
        {links.map((link) => {
          const id = link.toLowerCase();
          const isActive = activeId === id;
          return (
            <button
              onClick={() => smoothScrollTo(id, 80)}
              key={link}
              className={`transition duration-70 ease-in-out ${
                isActive ? "text-blue-600 font-medium" : "hover:text-blue-500"
              }`}
            >
              {link}
            </button>
          );
        })}
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
            {links.map((link) => {
              const id = link.toLowerCase();
              const isActive = activeId === id;
              return (
                <button
                  onClick={() => {
                    smoothScrollTo(id, 80);
                    setIsMenuOpen(false);
                  }}
                  key={link}
                  className={`transition-colors text-lg ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-primary"
                  }`}
                >
                  {link}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
