import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <motion.div
        className="flex flex-col mt-8 mb-10 sm:flex-row"
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
            src="/us_photo.jpg"
            className="w-52 h-52 mx-auto rounded-lg shadow-xl"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold text-center sm:text-left text-blue-800">
            Hi! I am Kyaw Zin Hein
          </h1>
          <p className="text-center sm:text-left text-gray-600">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Button />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
