import RevealOnScroll from "../common/RevealOnScroll";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

const AboutMe = () => {
  return (
    <RevealOnScroll
      id="about"
      className="min-h-[90vh] py-12 px-6 md:px-16 flex flex-col justify-center"
    >
      <h2 className="text-center font-semibold text-4xl mb-12">About Me</h2>

      <div className="flex flex-col gap-7 justify-center lg:flex-row lg:gap-0 items-center lg:justify-between ">
        {/* Card */}

        <div className="flex flex-1 justify-center lg:basis-1/2">
          <Card className="w-56 md:w-80 p-3 transform lg:-rotate-3 transition duration-300 hover:-translate-y-3">
            <CardContent>
              <img
                src="/assets/images/profile-pic.jpg"
                className="w-full h-56 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-filter duration-50 ease-in-out"
                alt="Regis Mugisha - Software Developer"
                width={320}
                height={320}
                decoding="async"
              />
            </CardContent>
            <CardFooter className="justify-center">
              <span className="text-md font-medium">Regis Mugisha</span>
            </CardFooter>
          </Card>
        </div>

        {/* Description */}
        <div className="flex mx-4 flex-col gap-3 lg:basis-1/2">
          <p className="text-3xl font-semibold">Regis Mugisha</p>
          <Badge className="text-blue-500 bg-blue-100 dark:bg-blue-500/20">
            Software Developer
          </Badge>
          <p className="leading-relaxed">
            I am a Full Stack and Mobile App Developer with a passion for
            building modern, fast, and user-friendly digital products. I enjoy
            turning ideas into real applications, from crafting clean and
            responsive UIs to developing powerful backends. My focus is on
            creating scalable solutions that solve real problems and deliver
            great user experiences.
          </p>
          <Button className="self-start" asChild>
            <a
              href="https://docs.google.com/document/d/12vvBHC3tdCb7ePIi5itOm3qksDhJPHkHMhLrkIxJWH4/edit?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default AboutMe;
