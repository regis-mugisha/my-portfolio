import { allProjects, projectCategories } from "@/constants/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProjectCard from "../common/ProjectCard";
import type { Project } from "@/types";

// This reusable component will now use a GRID layout for perfect alignment.
const ProjectList = ({ projects }: { projects: Project[] }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="mt-8 text-center text-muted-foreground">
        <p>No projects in this category yet. Check back soon!</p>
      </div>
    );
  }

  return (
    // --- THIS IS THE KEY MODIFICATION ---
    // We switch from `flex` to `grid` to ensure all cards have a uniform height.
    // - `grid`: Enables CSS Grid layout.
    // - `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`: Creates responsive columns.
    //   - 1 column on mobile (the default).
    //   - 2 columns on small screens (`sm`, 640px) and up.
    //   - 3 columns on large screens (`lg`, 1024px) and up.
    // - `gap-8`: Adds consistent spacing between all grid items.
    // - `place-items-center`: A powerful utility that centers each card within its grid cell,
    //   both horizontally and vertically.
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 place-items-center">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          // The spread operator remains a clean way to pass all props.
          {...project}
        />
      ))}
    </div>
  );
};

// The main Projects component structure remains largely the same, but we'll
// give it more space to accommodate the 3-column grid on larger screens.
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 flex flex-col items-center"
    >
      <h2 className="font-semibold text-4xl mb-12 text-center">Projects</h2>
      {/* We increase the max-width to `max-w-6xl` to comfortably fit 3 cards + gaps. */}
      <Tabs defaultValue="all" className="w-full max-w-6xl px-4 items-center">
        <TabsList className="mx-auto flex flex-wrap h-auto">
          {projectCategories.map((category) => (
            <TabsTrigger key={category} value={category.toLowerCase()}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* The component logic remains clean and readable. */}
        <TabsContent value="all">
          <ProjectList projects={allProjects} />
        </TabsContent>

        <TabsContent value="full stack">
          <ProjectList
            projects={allProjects.filter(
              (project) => project.type.toLowerCase() === "full stack"
            )}
          />
        </TabsContent>

        <TabsContent value="backend">
          <ProjectList
            projects={allProjects.filter(
              (project) => project.type.toLowerCase() === "backend"
            )}
          />
        </TabsContent>

        <TabsContent value="mobile">
          <ProjectList
            projects={allProjects.filter(
              (project) => project.type.toLowerCase() === "mobile"
            )}
          />
        </TabsContent>

        <TabsContent value="embedded systems">
          <ProjectList
            projects={allProjects.filter(
              (project) => project.type.toLowerCase() === "embedded systems"
            )}
          />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Projects;
