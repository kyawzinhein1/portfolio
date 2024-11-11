import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MarketPlace Website",
    description:
      "A full-featured e-commerce platform with user authentication and admin dashboard.",
    link: "https://themewagon.com/wp-content/uploads/2021/12/famms-1.png",
    imageUrl: "https://themewagon.com/wp-content/uploads/2021/12/famms-1.png",
  },
  {
    title: "Blog Website",
    description:
      "A blog website with user authentication, payment for premium users, and real-time updates.",
    link: "https://images04.nicepage.com/feature/461183/website-blog.jpg",
    imageUrl: "https://images04.nicepage.com/feature/461183/website-blog.jpg",
  },
  {
    title: "Live Chat App",
    description:
      "A real-time chat app using web-socket and MongoDB for storage of messages.",
    link: "https://s3-alpha.figma.com/hub/file/633847288/75077dd2-0d1b-42c8-b650-ab85ff70272c-cover.png",
    imageUrl:
      "https://s3-alpha.figma.com/hub/file/633847288/75077dd2-0d1b-42c8-b650-ab85ff70272c-cover.png",
  },
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
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
