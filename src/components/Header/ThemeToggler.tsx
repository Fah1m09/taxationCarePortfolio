import { ThemeSwitch } from "@/components/Header/ThemeSwitch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="
        ml-4
        h-10 
        w-10
        cursor-pointer 
        p-2 
        transition
        hover:opacity-80
      "
      ></div>
    );
  }

  const toggleTheme = () => {
    resolvedTheme == "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <>
      <ThemeSwitch checked={resolvedTheme === "dark"} onChange={toggleTheme} />
    </>
  );
};

export default ThemeToggler;
