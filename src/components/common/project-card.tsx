import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IconBrandGithub } from "@tabler/icons-react";
import { SquareArrowOutUpRight } from "lucide-react";
import IconButton from "./icon-button";
import ImagePlaceholder from "./image-placeholder";

type ProjectCardProps = {
  image?: string;
  name: string;
  technologyStack: string;
  githubLink: string;
  liveDemoLink?: string;
};

const ProjectCard = ({
  image,
  name,
  technologyStack,
  githubLink,
  liveDemoLink,
}: ProjectCardProps) => {
  return (
    <div>
      <Card>
        <CardContent className="flex flex-col gap-3">
          <div
            className="relative overflow-hidden rounded-2xl group"
            tabIndex={0}
          >
            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-black/50 transform origin-left scale-x-0 transition-all duration-200 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-x-100 group-focus-within:opacity-100 group-focus-within:scale-x-100 flex justify-center items-center gap-3">
              {liveDemoLink && (
                <IconButton hrefLink={liveDemoLink}>
                  <SquareArrowOutUpRight />
                </IconButton>
              )}

              <IconButton hrefLink={githubLink}>
                <IconBrandGithub />
              </IconButton>
            </div>

            {image ? (
              <img
                src={image}
                className="w-full h-47 rounded-2xl object-cover"
                alt={`${name} project screenshot`}
                width={400}
                height={300}
                decoding="async"
              />
            ) : (
              <ImagePlaceholder />
            )}
          </div>
          <p className="text-xl font-medium">{name}</p>
        </CardContent>
        <CardFooter className="px-0">
          <p className="">
            <span className="font-medium">Tech Stack:</span> {technologyStack}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
