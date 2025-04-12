import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Image from "next/image";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black container">
      <Chatbot />
      <Navbar />
      <div className="container mt-20 mx-auto px-12 py-4">
        <Intro />
        <AboutSection />
        <Experience />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </div>
  );
}
