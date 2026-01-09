import { Globe, Smartphone, Container } from "lucide-react";
import RevealOnScroll from "../common/reveal-on-scroll";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: ServiceItem[] = [
  {
    title: "Website & Web App Development",
    description:
      "Building modern, responsive websites and web applications tailored to your business needs using the latest technologies.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications that work seamlessly on both iOS and Android using React Native.",
    icon: Smartphone,
  },
  {
    title: "DevOps & Containerization",
    description:
      "Streamlining application deployment and management through containerization with Docker and orchestration using Kubernetes.",
    icon: Container,
  },
];

const Services = () => {
  return (
    <RevealOnScroll
      id="services"
      className="min-h-[90vh] flex flex-col justify-center mt-12 p-6 md:p-16"
    >
      <h2 className="font-semibold text-4xl mb-4 text-center">Services</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        I offer a range of development services to help bring your ideas to
        life, from web and mobile applications to modern DevOps practices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <CardHeader className="space-y-4 p-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </RevealOnScroll>
  );
};

export default Services;
