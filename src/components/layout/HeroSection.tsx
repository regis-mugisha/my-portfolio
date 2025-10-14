import { smoothScrollTo } from "@/utils/smoothScroll";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ChevronRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import RevealOnScroll from "../common/RevealOnScroll";
import { Ripple } from "../magicui/ripple";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <RevealOnScroll
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center lg:justify-start px-6 md:px-16 overflow-hidden"
    >
      {/* Ripple background */}
      <div className="h-full absolute inset-0 lg:left-1/4 w-full z-0 overflow-hidden">
        <Ripple className="w-full h-full" />
      </div>

      <div className="flex flex-col items-center lg:items-start gap-4 z-10">
        <DotLottieReact
          className="w-20"
          src="/assets/hand-wave.lottie"
          loop
          autoplay
          speed={0.5}
        />

        <h1 className="text-3xl text-center lg:text-start font-bold">
          I'm Regis Mugisha
        </h1>

        <div className="flex justify-center lg:justify-start items-center gap-1 text-lg">
          <p>I am into</p>
          <div className="text-blue-500 font-semibold">
            <Typewriter
              options={{
                strings: ["Web Development", "Mobile Development"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </div>
        </div>

        <p className="text-center leading-relaxed lg:text-start text-gray-600 dark:text-gray-400 max-w-lg">
          I am a passionate Full Stack and Mobile App Developer creating fast,
          modern, and user-friendly digital experiences.
        </p>

        <Button size="lg" onClick={() => smoothScrollTo("about", 80)}>
          About Me
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </RevealOnScroll>
  );
};

export default HeroSection;
