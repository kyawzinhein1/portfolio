import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={footerVariants}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Kyaw Zin Hein. All Rights
              Reserved.
            </p>
          </div>

          <div className="flex gap-4 md:mb-0">
            <a
              href="mailto:kyawzinhein@gmail.com"
              className="hover:text-gray-400 transition-colors"
              label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/kyawzinhein1"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
              label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kyawzinhein"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
              label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
              label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
