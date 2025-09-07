import { Moon } from "lucide-react";
import { links } from "@/constants/links";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-around py-2">
      <img
        className="w-8 h-8 rounded-full object-cover"
        src="/src/assets/images/profile-pic.jpg"
        alt="profile-pic"
      />

      {/* Navigation bar */}
      <div>
        <nav className="flex items-center gap-7 border p-3 rounded-full shadow-md">
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
        <Moon size={18} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
