import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black container">
      <Navbar />
      <div className="container mt-15 mx-auto px-12 py-4">
        <Intro />
      </div>
    </div>
  );
}
