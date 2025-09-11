export type Technology = {
  name: string;
  logo: string;
  bgClassName: string;
};

export type Project = {
  image?: string;
  name: string;
  technologyStack: string;
  githubLink: string;
  liveDemoLink?: string;
  type: string;
};
