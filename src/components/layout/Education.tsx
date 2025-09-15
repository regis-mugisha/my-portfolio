import { GraduationCap } from "lucide-react";
import { Timeline, TimelineItem } from "../ui/timeline";

const Education = () => {
  return (
    <section className="mt-12 px-35">
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
    </section>
  );
};

export default Education;
