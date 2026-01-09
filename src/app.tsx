import AboutMe from "./components/layout/about-me";
import ContactMe from "./components/layout/contact-me";
import Experience from "./components/layout/experience";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import HeroSection from "./components/layout/hero";
import Projects from "./components/layout/projects";
import Services from "./components/layout/services";
import TechStack from "./components/layout/tech-stack";

function App() {
  return (
    <div className="flex flex-col text-base">
      <Header />
      <HeroSection />
      <AboutMe />
      <TechStack />
      <Services />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
