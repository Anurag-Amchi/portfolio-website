import Intro from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black container">
      <div className="container mx-auto px-12 py-4">
        <Intro />
      </div>
    </div>
  );
}
