import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-screen flex items-center text-blue-900 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="flex flex-col mt-8 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex-1 mb-10"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/my-photo.jpg"
              className="w-72 h-72 mx-auto rounded-lg shadow-xl object-cover"
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl text-center md:text-6xl font-bold mb-4 text-blue-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I’m Robotic.
            </motion.h1>

            <motion.p
              className="text-lg text-justify md:text-xl text-blue-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Full Stack JavaScript Developer specializing in the MERN stack. I
              build responsive, high-performance applications that solve
              real-world problems.
            </motion.p>

            {/* Button Section */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="/KZH-CV.pdf" download="kzh_cv">
                <Button text="Download CV" />
              </a>
              <a href="#contact">
                <Button
                  text="Let’s Connect"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
