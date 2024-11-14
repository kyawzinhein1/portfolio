import { useState } from "react";
import { motion } from "framer-motion";
import { Bounce, toast } from "react-toastify";
import Button from "./Button";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!message) {
      newErrors.message = "Message cannot be empty.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
      setEmail("");
      setMessage("");
    } else {
      toast.error("Email & Message required.", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <section id="contact" className="py-14">
      <div className="container mx-auto px-6 max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-800 dark:text-blue-500">
          Contact
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Have any questions or want to collaborate? Fill out the form below,
          and I’ll get back to you shortly!
        </p>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="bg-white dark:bg-gray-300 rounded-2xl p-8 shadow-2xl space-y-6"
          onSubmit={sendMessageHandler}
        >
          <motion.div variants={inputVariants}>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className={`w-full dark:bg-gray-300 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={inputVariants}>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className={`w-full dark:bg-gray-300 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.message ? "border-red-500" : ""
              }`}
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          <motion.div variants={inputVariants} className="text-center">
            <Button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-200"
              text={"Submit Message"}
            />
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
