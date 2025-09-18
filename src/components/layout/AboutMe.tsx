import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-4 px-6 md:px-16 h-screen flex flex-col justify-center"
    >
      <h2 className="text-center font-semibold text-4xl mb-12">About Me</h2>

      <div className="flex flex-col justify-center lg:flex-row items-center lg:justify-between gap-4">
        {/* Card */}

        <Card className="w-70 p-3 transform lg:-rotate-3 transition duration-300 hover:-translate-y-3">
          <CardContent>
            <img
              src="/src/assets/images/profile-pic.jpg"
              className="w-full h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-filter duration-300 ease-in-out"
              alt="image"
            />
          </CardContent>
          <CardFooter className="justify-center">
            <span className="text-md font-medium">Regis Mugisha</span>
          </CardFooter>
        </Card>

        {/* Description */}
        <div className="flex mx-4 flex-1 flex-col gap-3">
          <p className="text-3xl font-semibold">Regis Mugisha</p>
          <Badge className="text-blue-500 bg-blue-100 dark:bg-blue-500/20">
            Software Developer
          </Badge>
          <p className="leading-relaxed">
            I am a Full Stack Developer and Mobile App Developer with a passion
            for building modern, fast, and user-friendly digital products. I
            enjoy turning ideas into real applications, from crafting clean and
            responsive UIs to developing powerful backends. My focus is on
            creating scalable solutions that solve real problems and deliver
            great user experiences.
          </p>
          <Button className="self-start">Resume</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
