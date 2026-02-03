"use client"

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const dark = () => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme || storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    dark();
  }, []);



  // const [isDarkMode, setIsDarkMode] = useState(() => {
  //   const storedTheme = localStorage.getItem("theme");
  //   return !storedTheme || storedTheme === "dark";
  // });

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", isDarkMode);
  //   localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  // }, [isDarkMode]);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed  top-15 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
