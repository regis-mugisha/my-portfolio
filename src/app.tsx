import AboutMe from "./components/layout/about-me";
import ContactMe from "./components/layout/contact-me";
import Education from "./components/layout/education";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import HeroSection from "./components/layout/hero";
import Projects from "./components/layout/projects";
import TechStack from "./components/layout/tech-stack";

function App() {
  return (
    <div className="flex flex-col text-base">
      <Header />
      <HeroSection />
      <AboutMe />
      <TechStack />
      <div className="overflow-x-hidden">
        <Projects />
        <Education />
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
