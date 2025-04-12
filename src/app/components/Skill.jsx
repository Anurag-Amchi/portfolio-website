import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";
import JavaScriptIcon from "/public/icons/javascript-original.svg";
import ReactIcon from "/public/icons/react-2.svg";
import NodejsIcon from "/public/icons/nodejs-1.svg";
import NextjsIcon from "/public/icons/nextjs.svg";
import TypescriptIcon from "/public/icons/typescript-original.svg";
import TailwindCSS from "/public/icons/tailwind-css-2.svg";
import C from "/public/icons/c-1.svg";
import Cpp from "/public/icons/c.svg";
import Python from "/public/icons/python-5.svg";
import html from "/public/icons/html-1.svg";
import css from "/public/icons/css-3.svg";
import Git from "/public/icons/git-original.svg";
import GitHub from "/public/icons/github.jpg";
import gitlab from "/public/icons/gitlab-original.svg";
import express from "/public/icons/express.png";
import azure from "/public/icons/azure-original.svg";
import linux from "/public/icons/linux-original.svg";
import matlab from "/public/icons/matlab-original.svg";
import mongodb from "/public/icons/mongodb-original.svg";
import postman from "/public/icons/postman-original.svg";
const serviceData = [
  {
    icon: JavaScriptIcon,
    title: "JavaScript Development",
  },
  {
    icon: ReactIcon,
    title: "React.js Development",
  },
  {
    icon: NodejsIcon,
    title: "Node.js Backend",
  },
  {
    icon: NextjsIcon,
    title: "Next.js Development",
  },
  {
    icon: TypescriptIcon,
    title: "TypeScript Development",
  },
  //   {
  //     icon: TailwindCSS,
  //     title: "Tailwind CSS Styling",
  //   },
  //   {
  //     icon: C,
  //     title: "C Programming",
  //   },
  {
    icon: Cpp,
    title: "C++ Programming",
  },
  {
    icon: Python,
    title: "Python Programming",
  },
  {
    icon: html,
    title: "HTML Development",
  },
  {
    icon: css,
    title: "CSS Development",
  },
  {
    icon: Git,
    title: "Git Version Control",
  },
  {
    icon: GitHub,
    title: "GitHub Version Control",
  },
  {
    icon: gitlab,
    title: "GitLab Version Control",
  },
  {
    icon: express,
    title: "Express.js Development",
  },
  {
    icon: azure,
    title: "Azure Cloud Services",
  },
  {
    icon: linux,
    title: "Linux OS",
  },
  {
    icon: matlab,
    title: "MATLAB Programming",
  },
  {
    icon: mongodb,
    title: "MongoDB Database",
  },
  {
    icon: postman,
    title: "Postman API Testing",
  },
];

const SkillSection = () => {
  return (
    <section id="services" className="mb-20">
      <h2 className="text-center text-4xl font-bold text-yellow-400 mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 text-white">
        {serviceData.map((service, index) => (
          <SkillCard key={index} icon={service.icon} title={service.title} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
