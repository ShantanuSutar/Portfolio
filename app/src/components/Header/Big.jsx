const Big = ({ handleClick, active, handleThemeSwitch }) => {
  return (
    <nav className=" hidden items-center justify-between gap-8  md:flex">
      <a href="/" className="  font-semibold uppercase md:text-xl lg:text-2xl">
        Shantanu
      </a>
      <div className="nav-menu">
        <ul className=" flex gap-6 text-lg lg:gap-8 lg:text-xl">
          <li>
            <a
              href="#home"
              onClick={(e) => handleClick(e)}
              className={`${
                active[0].state
                  ? "active border-black hover:border-b-2  dark:border-white"
                  : "border-black hover:border-b-2  dark:border-white"
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
                active[1].state
                  ? "active border-black hover:border-b-2  dark:border-white"
                  : "border-black hover:border-b-2  dark:border-white"
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
                active[2].state
                  ? "active border-black hover:border-b-2  dark:border-white"
                  : "border-black hover:border-b-2  dark:border-white"
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
                active[3].state
                  ? "active border-black hover:border-b-2  dark:border-white"
                  : "border-black hover:border-b-2  dark:border-white"
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
                active[4].state
                  ? "active border-black hover:border-b-2  dark:border-white"
                  : "border-black hover:border-b-2  dark:border-white"
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
                active[5].state
                  ? "active border-black hover:border-b-2  dark:border-white"
                  : "border-black hover:border-b-2  dark:border-white"
              }`}
              data-name="contact"
            >
              Contact
            </a>
          </li>
          <li>
            <button onClick={handleThemeSwitch}>Toggle</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Big;
