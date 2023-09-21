import Theme from "./Theme";

const Big = ({ handleClick, active, setTheme, theme }) => {
  return (
    <nav className=" fixed z-40 hidden w-full  items-center  justify-between gap-8 rounded-md bg-inherit bg-white p-3 text-lg font-medium text-slate-950 opacity-100  shadow-lg transition-all duration-500 dark:bg-slate-900 dark:text-white md:flex md:max-w-[80%]">
      <a href="/" className="font-semibold uppercase md:text-xl lg:text-2xl">
        Shantanu
      </a>
      <div className="nav-menu">
        <ul className=" flex gap-4 text-lg lg:gap-8 lg:text-xl">
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
          {/* <li>
            <button onClick={handleThemeSwitch}>Toggle</button>
          </li> */}
          <Theme setTheme={setTheme} theme={theme} />
        </ul>
      </div>
    </nav>
  );
};

export default Big;
