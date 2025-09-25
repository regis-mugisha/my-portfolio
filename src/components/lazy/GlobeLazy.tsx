import { useInView } from "motion/react";
import { Suspense, lazy, useRef } from "react";

const Globe = lazy(() =>
  import("../ui/globe").then((mod) => ({ default: mod.Globe }))
);

const GlobeLazy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  return (
    <Suspense
      fallback={
        <div className="w-full h-[400px] bg-muted animate-pulse rounded-lg" />
      }
    >
      <div ref={ref} className="hidden md:block w-full h-[400px] md:h-auto">
        {isInView ? (
          <Globe className="hidden md:block" />
        ) : (
          <div className="w-full h-[400px] bg-muted rounded-lg" />
        )}
      </div>
    </Suspense>
  );
};

export default GlobeLazy;
