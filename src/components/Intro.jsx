import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hi I am Anurag
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex,
            corporis voluptate cum sed aut aliquam nisi impedit quos quo?
          </p>
        </div>
        <div className="text-white place-self-center col-span-5 size-3/4">
          <Image
            src="/images/Me_casual.jpg"
            width={2559}
            height={2560}
            alt="Image of me"
            className="rounded-full border-10 border-white shadow-lg shadow-black/30"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
