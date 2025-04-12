import React from "react";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-8 xl:gap-16 sm:py-8 xl:px-8">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full mb-8">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">About Me</h2>
          <ul className="list-disc">
            <li>
              I am currently in my Pre-Final year pursuing my Bachelor's Degree
              in Mathematics and Computing from Indian Institute of Technology
              Ropar.
            </li>
            <li>
              I have a strong foundation in Data Structures & Algorithms and
              Machine Learning and actively participate in competitive
              programming.
            </li>
            <li>
              I also enjoy building dynamic and responsive full stack web
              applications, constantly seeking new ways to bring ideas to life
              through web development.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Education</h2>
          <ul className="list-disc">
            <li className="text-xl font-bold text-white">
              Indian Institute of Technology Ropar
            </li>
            <li className="text-lg font-bold text-white">
              Bachelor of Technology in
              <br></br>
              Mathematics and Computing
            </li>
            <li className="text-lg font-bold text-white">2022-2026</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
