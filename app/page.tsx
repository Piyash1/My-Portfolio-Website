import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UtilityElements from "./components/UtilityElements";
import InteractiveBackground from "./components/ui/InteractiveBackground";

export default function Page() {
  return (
    <>
      <InteractiveBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <UtilityElements />
    </>
  );
}
