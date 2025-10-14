import { useEffect, useState } from "react";

/**
 * useScrollSpy
 * @param ids array of section ids to observe
 * @param options IntersectionObserver options
 * @returns currently active id (or null)
 */
export default function useScrollSpy(
  ids: string[],
  options: IntersectionObserverInit = { threshold: 0.5 }
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!ids || ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, options]);

  return activeId;
}
