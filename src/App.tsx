import AboutMe from "./components/layout/AboutMe";
import Header from "./components/layout/Header";
import HeroSection from "./components/layout/HeroSection";

function App() {
  return (
    <div className="flex flex-col text-sm">
      <Header />
      <HeroSection />
      <AboutMe />
    </div>
  );
}

export default App;
