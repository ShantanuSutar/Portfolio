import { useState } from "react";

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

  const [toggle, setToggle] = useState(true);
  return (
    <header className=" max-w-[80%] text-lg font-medium p-3 fixed  w-full z-50 opacity-100 bg-white">
      {/* // <header className=" text-lg font-medium p-3 shadow-md"> */}
      <nav className=" flex justify-between items-center">
        <a href="/" className=" text-2xl">
          Shantanu
        </a>
        <div className="nav-menu">
          <ul className=" flex gap-8">
            <li>
              <a
                href="#home"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[0].state ? "active" : "hover:border-b-2 border-black"
                }`}
                data-name="home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[1].state ? "active" : "hover:border-b-2 border-black"
                }`}
                data-name="about"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[2].state ? "active" : "hover:border-b-2 border-black"
                }`}
                data-name="skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[3].state ? "active" : "hover:border-b-2 border-black"
                }`}
                data-name="work"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[4].state ? "active" : "hover:border-b-2 border-black"
                }`}
                data-name="projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[5].state ? "active" : "hover:border-b-2 border-black"
                }`}
                data-name="contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
