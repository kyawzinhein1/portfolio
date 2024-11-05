import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
      // Clear the fields after a successful submission
      setEmail("");
      setMessage("");
    } else {
      toast.error("Email & Message required.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <section id="contact" className="py-12">
      <ToastContainer />
      <div className="container mx-auto px-6 max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-3 text-blue-800">
          Contact
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Have any questions or want to collaborate? Fill out the form below,
          and I’ll get back to you shortly!
        </p>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-lg space-y-6"
          onSubmit={sendMessageHandler}
        >
          <motion.div variants={inputVariants}>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={inputVariants}>
            <label className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="2"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          <motion.div variants={inputVariants} className="text-center">
            <div onClick={sendMessageHandler}>
              <Button text={"Send Message"} />
            </div>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
