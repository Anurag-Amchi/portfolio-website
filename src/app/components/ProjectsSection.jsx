"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Real Time Chat App",
    description: "Full Stack Chat App made with Socket.IO",
    image: "/images/flowchat.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anurag-Amchi/flowChat_alpha",
    previewUrl: "https://flow-chat-app.vercel.app/login",
  },
  {
    id: 2,
    title: "Finance Tracker",
    description: "Full Stack web app to track finances",
    image: "/images/fintrack.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anurag-Amchi/finance-tracker",
    previewUrl: "https://fintrack-green.vercel.app/",
  },
  {
    id: 3,
    title: "Collision detection using quadtree",
    description: "Optimised collision detection using quadtree",
    image: "/images/quadtree.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anurag-Amchi/Quadtree-Collision-Detection",
    previewUrl: "https://quadtree-collision-detection.netlify.app/",
  },
  {
    id: 4,
    title: "Movie Recommender",
    description:
      "Predicting movies using collaborative filtering and content-based algorithm",
    image: "/images/movie.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Anurag-Amchi/Movie-Recommendation-system",
    previewUrl: "https://github.com/Anurag-Amchi/Movie-Recommendation-system",
  },
  {
    id: 5,
    title: "Customer churn predictor",
    description:
      "Detecting who are likely to stop using a service or product in the future",
    image: "/images/churn.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Anurag-Amchi/customer-churn-prediction",
    previewUrl: "https://github.com/Anurag-Amchi/customer-churn-prediction",
  },
  {
    id: 6,
    title: "Multi Task Neural Network",
    description:
      "Multi task Regression and classification using single model with Neural Networks",
    image: "/images/multi.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Anurag-Amchi/Multi-task-neural-network",
    previewUrl: "https://github.com/Anurag-Amchi/Multi-task-neural-network",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-yellow-400 mt-10 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.title}
                </a>
              }
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
