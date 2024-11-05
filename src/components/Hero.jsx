import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
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
          <h1 className="text-3xl font-bold text-center mb-3 sm:text-left text-blue-800">
            Hi! I am Kyaw Zin Hein
          </h1>
          <p className="px-6 text-justify sm:text-left text-gray-600 mb-6">
            I'm a Full Stack JavaScript Developer that specializes in the MERN
            stack (MongoDB, Express, React, and Node.JS). I create comprehensive
            web apps, including responsive front-end interfaces and efficient
            back-end APIs. With knowledge in HTML, CSS, and JavaScript, I
            specialize in developing user-friendly, scalable, and maintainable
            solutions. I am passionate about continuous learning and performance
            optimization, and I appreciate translating complicated concepts into
            practical, real-world applications.
          </p>
          <div className="flex justify-center sm:justify-start">
            <a href="/KZH-CV.pdf" download={"kzh_cv"}>
              <Button text={"Download CV"} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
