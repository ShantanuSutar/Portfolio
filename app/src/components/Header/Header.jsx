import { useState } from "react";
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
    // console.log(temp);
  };

  return (
    <header className=" fixed z-40 w-full bg-white p-3 text-lg font-medium opacity-100  shadow-lg md:max-w-[80%]">
      {/* // <header className=" text-lg font-medium p-3 shadow-md"> */}
      <Small handleClick={handleClick} active={active} />
      <Big handleClick={handleClick} active={active} />
    </header>
  );
};

export default Header;
