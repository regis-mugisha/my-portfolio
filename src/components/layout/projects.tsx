import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allProjects, projectCategories } from "@/constants/projects";
import { useMemo, useState } from "react";
import ProjectCard from "../common/project-card";
import RevealOnScroll from "../common/reveal-on-scroll";
import { Button } from "@/components/ui/button";

const INITIAL_PROJECTS_COUNT = 3;

const Projects = () => {
  const [value, setValue] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    if (value === "all") return allProjects;
    return allProjects.filter((p) => p.type === value);
  }, [value]);

  const displayedProjects = useMemo(() => {
    if (showAll) return filtered;
    return filtered.slice(0, INITIAL_PROJECTS_COUNT);
  }, [filtered, showAll]);

  const hasMoreProjects = filtered.length > INITIAL_PROJECTS_COUNT;
  const handleTabChange = (newValue: string) => {
    setValue(newValue);
    setShowAll(false);
  };

  return (
    <div id="projects" className="w-full py-3 flex flex-col items-center mb-6">
      <RevealOnScroll>
        <h2 className="font-semibold text-4xl mb-12">Projects</h2>
      </RevealOnScroll>
      <Tabs
        className="items-center w-full"
        value={value}
        onValueChange={handleTabChange}
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
          <RevealOnScroll className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr max-w-7xl py-8 px-6 md:px-16">
              {displayedProjects.map((project) => (
                <ProjectCard
                  key={project.name}
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  technologyStack={project.technologyStack}
                  githubLink={project.githubLink}
                  liveDemoLink={project.liveDemoLink}
                />
              ))}
            </div>
            {hasMoreProjects && (
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less" : "Show More"}
                </Button>
              </div>
            )}
          </RevealOnScroll>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
