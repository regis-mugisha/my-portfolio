import AboutMe from "./components/layout/AboutMe";
import Header from "./components/layout/Header";
import HeroSection from "./components/layout/HeroSection";
import Projects from "./components/layout/Projects";
import TechStack from "./components/layout/TechStack";

function App() {
  return (
    <div className="flex flex-col text-sm">
      <Header />
      <HeroSection />
      <AboutMe />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
