import { lazy, Suspense } from "react";
import { Globe } from "../ui/globe";

const GlobeLazy = () => {
  return (
    <Suspense fallback={<div className="w-full h-[400px] bg-muted animate-pulse rounded-lg" />}>
      <Globe />
    </Suspense>
  );
};

export default GlobeLazy;
