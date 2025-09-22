import { GraduationCap } from "lucide-react";
import RevealOnScroll from "../common/RevealOnScroll";
import { Timeline, TimelineItem } from "../ui/timeline";

const Education = () => {
  return (
    <RevealOnScroll
      id="education"
      className="min-h-[90vh] flex flex-col justify-center mt-12 px-6 md:px-16"
    >
      <h2 className="font-semibold text-4xl mb-12 text-center">Education</h2>
      <Timeline>
        <TimelineItem
          date="2022-2025"
          title="Rwanda Coding Academy"
          description="Software Programming & Embedded Systems"
          icon={<GraduationCap />}
          status="completed"
        />
        <TimelineItem
          date="2019-2022"
          title="College Saint Andre Nyamirambo"
          description="Ordinary Level"
          icon={<GraduationCap />}
          status="completed"
        />
      </Timeline>
    </RevealOnScroll>
  );
};

export default Education;
