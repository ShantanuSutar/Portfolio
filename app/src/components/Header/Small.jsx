import { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlinePicture,
} from "react-icons/ai";
import { BiBriefcase, BiSolidContact } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi2";

const Small = ({ handleClick, active }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" fixed bottom-0 right-0 z-50 mx-auto flex w-full  max-w-[100%] items-center justify-between gap-8 bg-slate-200 p-3 px-6 text-lg font-medium  text-slate-950 opacity-100 dark:bg-slate-800 dark:text-slate-100 md:hidden ">
      <div
        className={` ${
          !toggle ? "flex" : "hidden"
        } mx-0 flex h-max min-w-full items-center justify-between text-2xl font-semibold  `}
      >
        <span>Shantanu</span>
        <span>
          <AiOutlineAppstore
            className=" cursor-pointer text-slate-900 duration-200 hover:scale-125 dark:text-slate-100"
            onClick={() => setToggle(true)}
          />
        </span>
      </div>
      <div className="nav-menu w-full">
        <ul
          className={` font-thin ${
            toggle ? "flex" : "hidden"
          } w-full flex-col gap-4 pb-5 `}
        >
          <div className=" grid min-h-[4rem] grid-cols-3 items-center gap-12 ">
            <li>
              <a
                href="#home"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[0].state
                    ? "active dark:border-white"
                    : "border-black  hover:border-b-2 dark:border-white"
                } flex flex-col items-center`}
                data-name="home"
              >
                <span className=" text-xl">
                  <AiOutlineHome />
                </span>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[1].state
                    ? "active dark:border-white"
                    : "border-black hover:border-b-2  dark:border-white"
                } flex flex-col items-center`}
                data-name="about"
              >
                <span className=" text-xl">
                  <BsPerson />
                </span>
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[2].state
                    ? "active dark:border-white"
                    : "border-black hover:border-b-2  dark:border-white"
                } flex flex-col items-center`}
                data-name="skills"
              >
                <span className=" text-xl">
                  <HiOutlineDocumentText />{" "}
                </span>
                Skills
              </a>
            </li>
          </div>

          <div className=" grid min-h-[4rem] grid-cols-3 items-center  gap-12 ">
            <li>
              <a
                href="#work"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[3].state
                    ? "active dark:border-white"
                    : "border-black hover:border-b-2  dark:border-white"
                } flex flex-col items-center`}
                data-name="work"
              >
                <span className=" text-xl">
                  <BiBriefcase />
                </span>
                Work
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[4].state
                    ? "active dark:border-white"
                    : "border-black hover:border-b-2  dark:border-white"
                } flex flex-col items-center`}
                data-name="projects"
              >
                <span className=" text-xl">
                  <AiOutlinePicture />
                </span>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleClick(e)}
                className={`${
                  active[5].state
                    ? "active dark:border-white"
                    : "border-black hover:border-b-2  dark:border-white"
                } flex flex-col items-center`}
                data-name="contact"
              >
                <span className=" text-xl">
                  <BiSolidContact />
                </span>
                Contact
              </a>
            </li>
          </div>
          <div>
            <AiOutlineClose
              onClick={() => setToggle(false)}
              className=" absolute bottom-6 right-6 cursor-pointer text-2xl  text-slate-500 transition-all duration-200 ease-linear  hover:rotate-90"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Small;
