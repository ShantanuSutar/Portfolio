import { useEffect, useRef, useState } from "react";
import { GiPalette } from "react-icons/gi";

const Theme = ({ setTheme, theme }) => {
  const [show, setShow] = useState(false);

  let showRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!showRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <li ref={showRef} className=" flex flex-col items-center">
      <button
        className="inline-flex  items-center border-b-2 border-transparent text-center text-lg font-medium  hover:border-black dark:hover:border-white lg:text-xl"
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span className=" flex flex-col items-center justify-center">
          <GiPalette className=" md:hidden" />
          Theme
        </span>
        <svg
          className="ml-2.5 hidden h-2.5 w-2.5 md:inline"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        className={` absolute right-0 top-12 z-10 divide-y divide-gray-100 overflow-hidden rounded-lg  bg-inherit  bg-white pt-2 shadow  dark:bg-gray-700 ${
          show ? "visible" : "hidden"
        } `}
      >
        <ul className={` flex flex-col text-lg lg:text-xl`}>
          <li
            className=" block cursor-pointer px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => {
              setShow(!show);
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          >
            <h1>Light</h1>
          </li>
          <li
            className=" block cursor-pointer px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => {
              setShow(!show);
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          >
            <h1>Dark</h1>
          </li>
          <li
            className=" block cursor-pointer px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => {
              setShow(!show);
              setTheme("color");
              localStorage.setItem("theme", "color");
            }}
          >
            <h1>Color</h1>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Theme;
