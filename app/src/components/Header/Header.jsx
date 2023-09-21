import { useEffect, useState } from "react";
import Small from "./Small";
import Big from "./Big";

const Header = () => {
  const states = [
    {
      name: "home",
      state: true,
    },
    {
      name: "about",
      state: false,
    },
    {
      name: "skills",
      state: false,
    },
    {
      name: "work",
      state: false,
    },
    {
      name: "projects",
      state: false,
    },
    {
      name: "contact",
      state: false,
    },
  ];

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [active, setActive] = useState(states);
  const handleClick = (e) => {
    const link = e.target.getAttribute("data-name");
    let temp = active;
    temp = temp.map((item) => {
      if (item.name === link) {
        return { ...item, state: true };
      } else {
        return { ...item, state: false };
      }
    });
    setActive(temp);
  };
  return (
    <header className=" fixed z-40 w-full rounded-md bg-inherit bg-white p-3 text-lg font-medium text-slate-950  opacity-100 shadow-lg transition-all duration-500 dark:bg-slate-900 dark:text-white md:max-w-[80%]">
      {/* // <header className=" text-lg font-medium p-3 shadow-md"> */}
      <Small handleClick={handleClick} active={active} />
      <Big
        handleClick={handleClick}
        active={active}
        handleThemeSwitch={handleThemeSwitch}
      />
    </header>
  );
};

export default Header;
