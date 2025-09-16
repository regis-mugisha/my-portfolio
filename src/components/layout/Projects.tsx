import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allProjects, projectCategories } from "@/constants/projects";
import ProjectCard from "../common/ProjectCard";
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center pt-20 mb-6"
    >
      <h2 className="font-semibold text-4xl mb-12">Projects</h2>
      <Tabs defaultValue="all" className="items-center w-full">
        <TabsList>
          {projectCategories.map((category) => (
            <TabsTrigger key={category} value={`${category.toLowerCase()}`}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr max-w-7xl py-8 px-35">
            {allProjects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                name={project.name}
                technologyStack={project.technologyStack}
                githubLink={project.githubLink}
                liveDemoLink={project.liveDemoLink}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="full stack">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr max-w-7xl py-8 px-35">
            {allProjects
              .filter((project) => project.type == "full stack")
              .map((project) => (
                <ProjectCard
                  image={project.image}
                  name={project.name}
                  technologyStack={project.technologyStack}
                  githubLink={project.githubLink}
                  liveDemoLink={project.liveDemoLink}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="backend">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr max-w-7xl py-8 px-35">
            {allProjects
              .filter((project) => project.type == "backend")
              .map((project) => (
                <ProjectCard
                  image={project.image}
                  name={project.name}
                  technologyStack={project.technologyStack}
                  githubLink={project.githubLink}
                  liveDemoLink={project.liveDemoLink}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="mobile">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr max-w-7xl py-8 px-35">
            {allProjects
              .filter((project) => project.type == "mobile")
              .map((project) => (
                <ProjectCard
                  image={project.image}
                  name={project.name}
                  technologyStack={project.technologyStack}
                  githubLink={project.githubLink}
                  liveDemoLink={project.liveDemoLink}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="embedded systems">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr max-w-7xl py-8 px-35">
            {allProjects
              .filter((project) => project.type == "embedded systems")
              .map((project) => (
                <ProjectCard
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
    </section>
  );
};

export default Projects;
