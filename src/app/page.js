import Intro from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black container mx-auto px-12 py-4">
      <h1>
        <Intro />
      </h1>
    </div>
  );
}
