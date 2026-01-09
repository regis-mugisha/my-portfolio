import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import RevealOnScroll from "../common/reveal-on-scroll";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities?: string[];
  icon: LucideIcon;
}

const workExperiences: ExperienceItem[] = [
  {
    title: "Frontend Developer Intern",
    company: "AXK.ORG",
    period: "Dec 2025 - Present",
    description:
      "Building interactive dashboards and implementing responsive UI/UX with modern frontend technologies.",
    responsibilities: [
      "Built multiple interactive dashboards using React and Material UI",
      "Designed responsive, user-friendly UI/UX with reusable components",
      "Integrated frontend features with a NestJS backend via REST APIs",
      "Implemented data caching and state management using React Query",
      "Improved performance and usability by optimizing API calls and UI behavior",
    ],
    icon: Briefcase,
  },
];

const educationExperiences: ExperienceItem[] = [
  {
    title: "Software Programming and Embedded Systems",
    company: "Rwanda Coding Academy",
    period: "2022 - 2025",
    description: "Advanced Diploma in Software Programming and Embedded Systems",
    icon: GraduationCap,
  },
  {
    title: "Ordinary Level",
    company: "College Saint Andre Nyamirambo",
    period: "2019 - 2022",
    description: "Secondary education - Ordinary Level Certificate",
    icon: GraduationCap,
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  const renderTimeline = (experiences: ExperienceItem[]) => (
    <div className="max-w-3xl mx-auto">
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />

        {experiences.map(
          (
            {
              company,
              description,
              period,
              title,
              icon: Icon,
              responsibilities,
            },
            index
          ) => (
            <div key={index} className="relative pl-10 pb-12 last:pb-0">
              {/* Timeline Icon */}
              <div className="absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="pt-2 sm:pt-1 space-y-3">
                <p className="text-base font-medium">{company}</p>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em]">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {description}
                </p>
                {responsibilities && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );

  return (
    <RevealOnScroll
      id="experience"
      className="min-h-[90vh] flex flex-col justify-center mt-12 px-6 md:px-16"
    >
      <h2 className="font-semibold text-4xl mb-12 text-center">Experience</h2>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full flex flex-col items-center"
      >
        <TabsList className="mb-8">
          <TabsTrigger value="work">Work Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        <TabsContent value="work" className="w-full py-8">
          {renderTimeline(workExperiences)}
        </TabsContent>

        <TabsContent value="education" className="w-full py-8">
          {renderTimeline(educationExperiences)}
        </TabsContent>
      </Tabs>
    </RevealOnScroll>
  );
};

export default Experience;
