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
    <div className="min-h-screen flex flex-col bg-black">
      <Chatbot />
      <Navbar />
      <div className="container mt-20 mx-auto px-4 sm:px-8 lg:px-12 py-8 bg-black">
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
