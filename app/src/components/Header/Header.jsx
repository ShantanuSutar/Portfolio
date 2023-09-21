import { useEffect, useState } from "react";
import Small from "./Small";
import Big from "./Big";

const Header = ({ theme, setTheme }) => {
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

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    localStorage.setItem(
      "theme",
      theme === "light" ? (theme === "color" ? "dark" : "color") : "light",
    );
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
    <header className="">
      {/* // <header className=" text-lg font-medium p-3 shadow-md"> */}
      <Small handleClick={handleClick} active={active} />
      <Big
        handleClick={handleClick}
        active={active}
        setTheme={setTheme}
        theme={theme}
      />
    </header>
  );
};

export default Header;
