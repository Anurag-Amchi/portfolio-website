"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12">
      <div className="text-white place-self-center col-span-5">
        <Image
          src="/images/Me_casual.jpg"
          alt="Image of me"
          width={2559}
          height={2560}
          className="rounded-full place-self-center border-10 border-white shadow-lg shadow-black/30 size-3/4"
        />
      </div>
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          Hi I am <br></br>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
            Anurag
          </span>
          <br></br>
          <span className="inline-block min-h-[2.3em] max-w-[7em]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "AI/ML Enthusiast",
                1000,
                "Weekend Musician",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex,
          corporis voluptate cum sed aut aliquam nisi impedit quos quo?
        </p>
        <div>
          <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 to-yellow-300 text-white">
            <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
              Contact Me
            </span>
          </button>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-orange-500 to-yellow-300 text-black mt-3">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
