import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="sticky top-0 z-50">
      <nav className="bg-yellow-100 opacity-85 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl text-green-600 font-bold uppercase">
            <a href="/">MyPage</a>
          </div>
          <div className="hidden md:flex gap-4">
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
          </div>
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

        <div
          className={`absolute top-full left-0 w-full bg-transparant backdrop-blur-sm transition-all duration-500 ease-in-out transform ${
            isOpen ? "bg-yellow-100 opacity-100" : "opacity-0 pointer-events-none"
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
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
