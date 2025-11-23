import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allProjects, projectCategories } from "@/constants/projects";
import { useMemo, useState } from "react";
import ProjectCard from "../common/project-card";
import RevealOnScroll from "../common/reveal-on-scroll";
const Projects = () => {
  const [value, setValue] = useState("all");
  const filtered = useMemo(() => {
    if (value === "all") return allProjects;
    return allProjects.filter((p) => p.type === value);
  }, [value]);
  return (
    <RevealOnScroll
      id="projects"
      className="w-full py-3 flex flex-col items-center mb-6"
    >
      <h2 className="font-semibold text-4xl mb-12">Projects</h2>
      <Tabs
        className="items-center w-full"
        value={value}
        onValueChange={setValue}
      >
        <div className="w-full sm:w-fit overflow-x-auto px-4 [&::-webkit-scrollbar]:hidden">
          <TabsList>
            {projectCategories.map((category) => (
              <TabsTrigger key={category} value={`${category.toLowerCase()}`}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent value={value}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr max-w-7xl py-8 px-6 md:px-16">
            {filtered.map((project) => (
              <ProjectCard
                key={project.name}
                image={project.image}
                name={project.name}
                technologyStack={project.technologyStack}
                githubLink={project.githubLink}
                liveDemoLink={project.liveDemoLink}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </RevealOnScroll>
  );
};

export default Projects;
