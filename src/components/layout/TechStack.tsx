import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TechIcon } from "@/components/common/TechIcon";
import {
  frontendTech,
  backendTech,
  mobileTech,
  othersTech,
  technologyCategories,
} from "@/constants/technologies";

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="h-screen flex flex-col items-center justify-center"
    >
      <h2 className="font-semibold text-4xl mb-12">Tech Stack</h2>

      <Tabs defaultValue="frontend" className="w-full max-w-2xl">
        <TabsList className="mx-auto flex">
          {technologyCategories.map((category) => (
            <TabsTrigger value={`${category.toLowerCase()}`}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* --- Frontend Content --- */}
        <TabsContent value="frontend" className="mt-8">
          <div className="flex flex-wrap justify-center gap-12">
            {frontendTech.map((tech) => (
              <TechIcon
                key={tech.name}
                name={tech.name}
                logo={tech.logo}
                bgClassName={tech.bgClassName}
              />
            ))}
          </div>
        </TabsContent>

        {/* --- Backend Content --- */}
        <TabsContent value="backend" className="mt-8">
          <div className="flex flex-wrap justify-center gap-12">
            {backendTech.map((tech) => (
              <TechIcon
                key={tech.name}
                name={tech.name}
                logo={tech.logo}
                bgClassName={tech.bgClassName}
              />
            ))}
          </div>
        </TabsContent>

        {/* --- Mobile Content --- */}
        <TabsContent value="mobile" className="mt-8">
          <div className="flex flex-wrap justify-center gap-12">
            {mobileTech.map((tech) => (
              <TechIcon
                key={tech.name}
                name={tech.name}
                logo={tech.logo}
                bgClassName={tech.bgClassName}
              />
            ))}
          </div>
        </TabsContent>

        {/* --- Others Content --- */}
        <TabsContent value="others" className="mt-8">
          <div className="flex flex-wrap justify-center gap-12">
            {othersTech.map((tech) => (
              <TechIcon
                key={tech.name}
                name={tech.name}
                logo={tech.logo}
                bgClassName={tech.bgClassName}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default TechStack;
