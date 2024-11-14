import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 className="text-orange-600 text-5xl" />,
    title: "HTML",
    description: "Semantic, accessible HTML markup for web applications.",
  },
  {
    icon: <FaCss3Alt className="text-blue-600 text-5xl" />,
    title: "CSS",
    description:
      "Responsive design with modern CSS and frameworks like Tailwind.",
  },
  {
    icon: <FaJs className="text-yellow-500 text-5xl" />,
    title: "JavaScript",
    description:
      "Experience in ES6+, functional programming, and asynchronous operations.",
  },
  {
    icon: <FaReact className="text-blue-500 text-5xl" />,
    title: "React",
    description: "Efficient, component-based architecture for dynamic UIs.",
  },
  {
    icon: <SiMongodb className="text-green-600 text-5xl" />,
    title: "MongoDB",
    description:
      "Document-oriented NoSQL database for scalable, flexible data storage.",
  },
  {
    icon: <SiExpress className="text-gray-700 text-5xl" />,
    title: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
  },
  {
    icon: <FaNodeJs className="text-green-500 text-5xl" />,
    title: "Node.js",
    description:
      "Server-side JavaScript runtime for scalable network applications.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="pt-16 mb-20 md:h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 dark:text-blue-500">
          Skills
        </h2>

        <div className="grid grid-cols-1 mx-6 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-300 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: false }}
            >
              <div className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
