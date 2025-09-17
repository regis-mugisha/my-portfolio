import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ChevronRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import { Ripple } from "../magicui/ripple";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center px-6 md:px-16 overflow-hidden"
    >
      <div className="flex flex-col items-start gap-4">
        <DotLottieReact
          className="w-20"
          src="/src/assets/hand wave.lottie"
          loop
          autoplay
        />

        <h1 className="text-3xl font-bold">I'm Regis Mugisha</h1>

        <div className="flex gap-1 text-lg">
          <p>I am into</p>
          <div className="text-blue-500 font-semibold">
            <Typewriter
              options={{
                strings: ["Web Development", "Mobile App Development"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </div>
        </div>

        <p className="text-md text-gray-600 dark:text-gray-400 max-w-lg">
          I am a passionate Full Stack and Mobile App Developer creating fast,
          modern, and user-friendly digital experiences.
        </p>

        <Button asChild size="lg">
          <a href="#about">
            About Me
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      <div className="h-full absolute inset-0 lg:right-0 w-full lg:w-1/2">
        <Ripple />
      </div>
    </section>
  );
};

export default HeroSection;
