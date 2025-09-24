import { animate } from "motion";

export const smoothScrollTo = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementTop = element.offsetTop - offset;

  animate(window.scrollY, elementTop, {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
    onUpdate: (value) => {
      window.scrollTo(0, value);
    },
  });
};
