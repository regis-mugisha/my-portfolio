import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Project } from "@/types";
import { ExternalLink, Github, Image } from "lucide-react";

const ProjectCard = ({
  image,
  name,
  technologyStack,
  githubLink,
  liveDemoLink
}: Project) => {
  return (
    // --- CHANGE 1: Card Sizing & Structure ---
    // - `max-w-[350px]`: A better, slightly smaller max-width for a cleaner look.
    // - `flex flex-col`: Makes the card a flex container, allowing the text area to grow and fill empty space.
    // This is crucial for making all cards the same height in a grid.
    <Card className="w-full max-w-[350px] shadow-lg group flex flex-col">
      {/* --- CHANGE 2: Rounded Image Container ---
          - `rounded-t-lg`: This applies the border radius to the top corners of this container.
          - `overflow-hidden`: This "clips" anything that goes outside the container, including the
            sharp corners of the image and the parts that get bigger during the hover scale. THIS IS THE KEY.
      */}
      <div className="relative overflow-hidden rounded-t-lg">
        {image ? (
          <img
            src={image}
            className="w-full h-52 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            alt={`Screenshot of ${name} project`}
          />
        ) : (
          <div
            className="w-full h-52 flex items-center justify-center bg-muted"
            aria-label="Project image placeholder"
          >
            <Image className="h-12 w-12 text-muted-foreground" />
          </div>
        )}

        <div
          className="absolute inset-0 bg-black/70 flex items-center justify-center gap-6
                     opacity-0 -translate-x-full transition-all duration-500 ease-in-out
                     group-hover:opacity-100 group-hover:translate-x-0"
        >
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${name}`}
            className="bg-white p-3 rounded-full text-black hover:bg-gray-200 transition-colors"
          >
            <ExternalLink size={24} />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${name}`}
            className="bg-white p-3 rounded-full text-black hover:bg-gray-200 transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      {/* --- CHANGE 3: Flexible Text Area ---
          - `flex-1`: This tells the text container to grow and take up all available vertical space.
          - `flex flex-col`: Organizes the header and content vertically within this flexible space.
          - `p-4`: Consolidates padding here instead of on Header/Content individually.
      */}
      <div className="flex-1 flex flex-col p-4">
        <CardHeader className="p-0">
          <p className="text-xl font-bold">{name}</p>
        </CardHeader>

        <CardContent className="p-0 pt-2">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Tech Stack: </span>
            {Array.isArray(technologyStack)
              ? technologyStack.join(", ")
              : technologyStack}
          </p>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;
