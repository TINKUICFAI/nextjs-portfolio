"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 4,
    title: "Number Dekho",
    description: `NumberDekho is a real-time home service discovery platform that helps users find trusted professionals for repairs, cleaning, electrical work, and more. 
    The platform connects customers with verified local service providers and allows seamless booking through the mobile app.`,
    image: "/images/projects/numberdekho.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl:
      "https://play.google.com/store/apps/details?id=com.numberdekho&pcampaignid=web_share",
  },
  {
    id: 5,
    title: "Link",
    description: `Link is a professional video conferencing and meeting scheduler platform. It allows users to create secure, high-quality video meetings, share meeting links, and manage their calendar integrations with ease. It is ideal for startups, teams, and professional consultations.`,
    image: "/images/projects/link.svg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://link.aieze.in/home",
  },
  {
    id: 1,
    title: "NextJs Portfolio Website",
    description: `
    I have created a personal portfolio website using React.js, Next.js, and Tailwind CSS to showcase my skills, experience, and projects. This responsive and visually appealing web application serves as a digital resume and a platform to demonstrate my expertise in front-end development.
    
    Key Features:
    - Home Page: A clean and inviting landing page that introduces me and my skills.
    - Portfolio: A dynamic portfolio section showcasing my projects with project descriptions, technologies used, and live demos or GitHub links.
    - Blog: A blog section where I can share my thoughts, insights, and technical articles.
    - Contact: A contact form for visitors to get in touch with me, along with links to my social media profiles.
    
    Tech Stack:
    - React.js: For building the user interface and managing state.
    - Next.js: To enable server-side rendering for improved performance and SEO.
    - Tailwind CSS: For a responsive, modern, and customizable design.
    - GitHub: To host the project's source code and showcase version control skills.
    
    Deployment:
    - The website is hosted on Vercel for performance and scalability.
    
    Outcome:
    - This portfolio demonstrates my full-stack capabilities and serves as an interactive resume for potential employers and clients.
    `,
    image: "/images/projects/portfolio_web.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TINKUICFAI/nextjs-portfolio",
    previewUrl: "https://portfolio-iota-nine-29.vercel.app/",
  },
  {
    id: 2,
    title: "Book Your Gift",
    description: `An AI-powered gifting platform that helps users find the perfect gift based on occasion, recipient preferences, personality traits, and budget. It offers curated suggestions for birthdays, anniversaries, festivals, and corporate events.`,
    image: "/images/projects/bookyourgift.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://bookmygift.in/",
  },
  {
    id: 3,
    title: "The GameHunt",
    description: `GameHunt is a smart appointment booking system for sports venues and personal coaches. With AI-powered recommendations, it helps users find the best venues, available slots, and top-rated trainers based on their location, interests, and skill levels.`,
    image: "/images/projects/gamehunt.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://thegamehunt.com/",
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
