import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

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
      <main className=" dark:bg-black text-gray-600 dark:text-gray-300">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default App;
