import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className="sticky top-0 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-yellow-100 bg-opacity-40 backdrop-blur-sm p-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg text-blue-700 font-bold uppercase">
            <a href="/">portfolio</a>
          </div>

          {/* Desktop Links with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="hidden md:flex gap-4"
          >
            <a
              href=""
              className="text-blue-600 hover:text-blue-800 font-bold text-lg transition-colors"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-blue-600 hover:text-blue-800 font-bold text-lg transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-blue-600 hover:text-blue-800 font-bold text-lg transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-800 font-bold text-lg transition-colors"
            >
              Contact
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-blue-700">
            <button
              onClick={toggleMenu}
              className="hover:text-blue-800 transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <motion.div
          onClick={closeMenu}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute top-full left-0 w-full bg-yellow-100 ${
            isOpen ? "pointer-events-auto bg-opacity-40 backdrop-blur-sm pb-2" : "pointer-events-none"
          }`}
        >
          <a
            href=""
            className="block text-blue-600 font-bold text-md text-center hover:text-blue-800 px-4 py-2 transition-colors"
          >
            Home
          </a>
          <a
            href="#skills"
            className="block text-blue-600 font-bold text-md text-center hover:text-blue-800 px-4 py-2 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-blue-600 font-bold text-md text-center hover:text-blue-800 px-4 py-2 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-blue-600 font-bold text-md text-center hover:text-blue-800 px-4 py-2 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </motion.nav>
    </section>
  );
}

export default Navbar;
