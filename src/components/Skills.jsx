import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 className="text-orange-600 text-4xl" />,
    title: "HTML",
    description: "Semantic, accessible HTML markup for web applications.",
  },
  {
    icon: <FaCss3Alt className="text-blue-600 text-4xl" />,
    title: "CSS",
    description:
      "Responsive design with modern CSS and frameworks like Tailwind.",
  },
  {
    icon: <FaJs className="text-yellow-500 text-4xl" />,
    title: "JavaScript",
    description:
      "Experience in ES6+, functional programming, and asynchronous operations.",
  },
  {
    icon: <FaReact className="text-blue-500 text-4xl" />,
    title: "React",
    description: "Efficient, component-based architecture for dynamic UIs.",
  },
  {
    icon: <SiMongodb className="text-green-600 text-4xl" />,
    title: "MongoDB",
    description:
      "Document-oriented NoSQL database for scalable, flexible data storage.",
  },
  {
    icon: <SiExpress className="text-gray-700 text-4xl" />,
    title: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
  },
  {
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
    title: "Node.js",
    description:
      "Server-side JavaScript runtime for scalable network applications.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
          Skills
        </h2>

        <div className="grid grid-cols-1 mx-6 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }} // Initial state before animation
              whileInView={{ opacity: 1, y: 0 }} // Animation when in view
              transition={{ duration: 1, delay: index * 0.2 }} // Transition effects
              viewport={{ amount: 0.3 }} // Trigger animation when 30% of the element is visible
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
