import Navbar from "./components/Navbar";
import Image from "next/image";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import ProjectsSection from "./components/ProjectsSection";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black container">
      <Navbar />
      <div className="container mt-20 mx-auto px-12 py-4">
        <Intro />
        <AboutSection />
        <Experience />
        <ProjectsSection />
      </div>
    </div>
  );
}
