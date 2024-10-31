import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="sticky top-0 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-yellow-100 opacity-85 p-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl text-green-600 font-bold uppercase">
            <a href="/">MyPage</a>
          </div>

          {/* Desktop Links with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="hidden md:flex gap-4"
          >
            <a
              href="#home"
              className="text-emerald-800 hover:text-emerald-600 font-bold text-lg transition-all"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-emerald-800 hover:text-emerald-600 font-bold text-lg transition-all"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-emerald-800 hover:text-emerald-600 font-bold text-lg transition-all"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-emerald-800 hover:text-emerald-600 font-bold text-lg transition-all"
            >
              Contact
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-lime-300 transition-all"
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute top-full left-0 w-full bg-yellow-100 ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <a
            href="#home"
            className="block text-emerald-600 font-bold text-md text-center hover:text-emerald-800 px-4 py-2 transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-emerald-600 font-bold text-md text-center hover:text-emerald-800 px-4 py-2 transition-all"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-emerald-600 font-bold text-md text-center hover:text-emerald-800 px-4 py-2 transition-all"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-emerald-600 font-bold text-md text-center hover:text-emerald-800 px-4 py-2 transition-all"
          >
            Contact
          </a>
        </motion.div>
      </motion.nav>
    </section>
  );
}

export default Navbar;
