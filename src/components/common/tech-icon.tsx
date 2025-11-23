import { cn } from "@/lib/utils";
import type { Technology } from "@/types";

export const TechIcon = ({ name, logo, bgClassName }: Technology) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className={cn(
          "flex h-18 w-18 items-center justify-center rounded-full",
          bgClassName
        )}
      >
        <img src={logo} alt={`${name} logo`} className="h-12 w-12" />
      </div>
      <p className="font-medium">{name}</p>
    </div>
  );
};
