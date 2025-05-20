import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router";

function Navbar({ toggleDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className="sticky top-0 z-50 bg-yellow-100 bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-70 shadow-lg">
      <nav className="bg-white bg-opacity-60 backdrop-blur-md shadow-md py-3 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={"/"}>
            <img src="/logo.png" alt="Logo" className="w-8 h-auto" />
          </Link>

          {/* Desktop Links with Animation */}
          <div className="hidden md:flex gap-6">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 font-bold text-lg transition-colors"
                  : "text-blue-600 font-bold text-lg transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 font-bold text-lg transition-colors"
                  : "text-blue-600 font-bold text-lg transition-colors"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 font-bold text-lg transition-colors"
                  : "text-blue-600 font-bold text-lg transition-colors"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 font-bold text-lg transition-colors"
                  : "text-blue-600 font-bold text-lg transition-colors"
              }
            >
              Contact
            </NavLink>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 dark:bg-opacity-30 text-gray-800 dark:text-gray-100 transition-all duration-300 ease-in-out transform hover:scale-110"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <SunIcon className="w-6 h-6 transform rotate-0 transition-transform duration-500 ease-in-out" />
              ) : (
                <MoonIcon className="w-6 h-6 transform rotate-0 transition-transform duration-500 ease-in-out" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-blue-600 dark:text-white flex gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 dark:bg-opacity-40 text-gray-800 dark:text-gray-100 transition-all duration-300 ease-in-out transform hover:scale-110"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <SunIcon className="w-6 h-6 transform rotate-0 transition-transform duration-500 ease-in-out" />
              ) : (
                <MoonIcon className="w-6 h-6 transform rotate-0 transition-transform duration-500 ease-in-out" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110 bg-gray-300 dark:bg-gray-700 dark:bg-opacity-40"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-300 bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-8 space-y-6 w-60"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
            >
              <Link
                to={"/"}
                onClick={closeMenu}
                className="block text-center text-blue-700 font-bold text-xl hover:font-bold transition-colors"
              >
                Home
              </Link>
              <Link
                to={"/skills"}
                onClick={closeMenu}
                className="block text-center text-blue-700 font-bold text-xl hover:font-bold transition-colors"
              >
                Skills
              </Link>
              <Link
                to={"/projects"}
                onClick={closeMenu}
                className="block text-center text-blue-700 font-bold text-xl hover:font-bold transition-colors"
              >
                Projects
              </Link>
              <Link
                to={"/contact"}
                onClick={closeMenu}
                className="block text-center text-blue-700 font-bold text-xl hover:font-bold transition-colors"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Navbar;
