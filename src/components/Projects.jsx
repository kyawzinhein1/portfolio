import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and blog posts.",
    link: "https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2024/09/Dalya-Baron-homepage-1024x577.png",
    imageUrl:
      "https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2024/09/Dalya-Baron-homepage-1024x577.png", // Example image path
  },
  {
    title: "E-commerce Store",
    description:
      "A full-featured e-commerce platform with payment integration.",
    link: "https://themewagon.com/wp-content/uploads/2021/12/famms-1.png",
    imageUrl: "https://themewagon.com/wp-content/uploads/2021/12/famms-1.png",
  },
  {
    title: "Social Media App",
    description:
      "A social media app with user authentication and real-time updates.",
    link: "https://images04.nicepage.com/feature/461183/website-blog.jpg",
    imageUrl: "https://images04.nicepage.com/feature/461183/website-blog.jpg",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard providing forecasts using a public API.",
    link: "https://s3-alpha.figma.com/hub/file/633847288/75077dd2-0d1b-42c8-b650-ab85ff70272c-cover.png",
    imageUrl:
      "https://s3-alpha.figma.com/hub/file/633847288/75077dd2-0d1b-42c8-b650-ab85ff70272c-cover.png",
  },
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
      // delay: 0.6,
    },
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-500 mt-2 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-700 font-bold transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" /> View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
