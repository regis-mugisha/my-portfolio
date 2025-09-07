import React from "react";
import { Ripple } from "../magicui/ripple";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Typewriter from "typewriter-effect";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative grid h-screen w-full place-items-center overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-7xl items-center justify-between px-35">
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

          <Button size="lg">
            About Me
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/2 z-0">
        <Ripple />
      </div>
    </div>
  );
};

export default HeroSection;
