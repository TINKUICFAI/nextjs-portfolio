"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    description: `
    I have created a personal portfolio website using React.js, Next.js, and Tailwind CSS to showcase my skills, experience, and projects. This responsive and visually appealing web application serves as a digital resume and a platform to demonstrate my expertise in front-end development.
    
    Key Features:
    
    Home Page: A clean and inviting landing page that introduces me and my skills.
    Portfolio: A dynamic portfolio section showcasing my projects with project descriptions, technologies used, and live demos or GitHub links.
    Blog: A blog section where I can share my thoughts, insights, and technical articles.
    Contact: A contact form for visitors to get in touch with me, along with links to my social media profiles.
    Tech Stack:
    
    React.js: For building the user interface and managing state.
    Next.js: To enable server-side rendering for improved performance and SEO.
    Tailwind CSS: For a responsive, modern, and customizable design.
    GitHub: To host the project's source code and showcase version control skills.
    Deployment: The website is hosted on platforms like Vercel or Netlify for easy access and scalability.
    Outcome:
    This portfolio website not only demonstrates my technical skills but also serves as a practical example of my proficiency in React.js, Next.js, and Tailwind CSS. It provides a user-friendly and engaging platform for potential employers or clients to learn more about me and my work.
    `,
    image: "/images/projects/portfolio_web.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TINKUICFAI/nextjs-portfolio",
    previewUrl: "https://portfolio-iota-nine-29.vercel.app/",
  },
  {
    id: 2,
    title: "Book Your Gift",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.bookyourgift.in/",
  },
  {
    id: 3,
    title: "The GameHunt",
    description: "Project 4 description",
    image: "/images/projects/gamehunt.png",
    tag: ["All","Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://thegamehunt.com/",
  },
  {
    id: 4,
    title: "Trucking Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=app.trucking",
  },
  {
    id: 5,
    title: "The Bamboo Link",
    description: "Project 4 description",
    image: "/images/projects/bkp.png",
    tag: ["All","Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "http://thebamboolink.com/",
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
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
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
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
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
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
              title={project.title}
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
