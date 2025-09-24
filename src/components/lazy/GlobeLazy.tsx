import { Suspense, lazy } from "react";

const Globe = lazy(() =>
  import("../ui/globe").then((mod) => ({ default: mod.Globe }))
);

const GlobeLazy = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[400px] bg-muted animate-pulse rounded-lg" />
      }
    >
      <Globe className="hidden md:block" />
    </Suspense>
  );
};

export default GlobeLazy;
