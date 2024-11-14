import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and save preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  // Load dark mode preference from localStorage on initial render
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode) {
      setDarkMode(savedDarkMode);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply or remove dark mode class when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className=" dark:bg-gray-900 text-gray-400 dark:text-gray-100">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
