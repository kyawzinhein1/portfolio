import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-6 max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-3 text-blue-800">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Have any questions or want to collaborate? Fill out the form below,
          and we’ll get back to you shortly!
        </p>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-lg space-y-6"
        >
          {/* <motion.div variants={inputVariants}>
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </motion.div> */}

          <motion.div variants={inputVariants}>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </motion.div>

          <motion.div variants={inputVariants}>
            <label className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="2"
            ></textarea>
          </motion.div>

          <motion.div variants={inputVariants} className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
