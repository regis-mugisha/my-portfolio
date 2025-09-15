import AboutMe from "./components/layout/AboutMe";
import ContactMe from "./components/layout/ContactMe";
import Education from "./components/layout/Education";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import HeroSection from "./components/layout/HeroSection";
import Projects from "./components/layout/Projects";
import TechStack from "./components/layout/TechStack";

function App() {
  return (
    <div className="flex flex-col text-md">
      <Header />
      <HeroSection />
      <AboutMe />
      <TechStack />
      <Projects />
      <Education />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
