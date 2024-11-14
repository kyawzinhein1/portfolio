import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex items-center pt-14 text-blue-900 px-6 md:h-screen md:mt-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-10">
        <motion.div
          className="flex-1 mb-10 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/my-photo.jpg"
            className="w-72 h-72 mx-auto md:w-80 md:h-80 rounded-lg shadow-lg object-cover"
            alt="Kyaw Zin Hein"
          />
        </motion.div>

        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-blue-900 dark:text-blue-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hi, I’m{" "}
            <span className="text-blue-600 decoration-blue-300 dark:decoration-blue-600">
              Kyaw Zin Hein
            </span>
            .
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-blue-800 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Full Stack JavaScript Developer specializing in the MERN stack. I
            build responsive, high-performance applications that solve
            real-world problems.
          </motion.p>

          {/* Button Section */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <motion.a
              href="/KZH-CV.pdf"
              download="kzh_cv"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                text="Download CV"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-md"
              />
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                text="Let’s Connect"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-md"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
