import { useState } from "react";

const Theme = ({ setTheme, theme }) => {
  const [show, setShow] = useState(false);

  return (
    <li className=" transition  ease-linear">
      <button
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        className="inline-flex items-center rounded-lg  text-center text-lg font-medium lg:text-xl"
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        Theme
        <svg
          className="ml-2.5 h-2.5 w-2.5"
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
        id="dropdownDelay"
        className={` absolute right-0 top-12 z-10 divide-y divide-gray-100 rounded-lg  bg-inherit  bg-white pt-2 shadow dark:bg-gray-700 ${
          show ? "" : "hidden"
        }`}
      >
        <ul
          className={` flex flex-col text-lg lg:text-xl`}
          aria-labelledby="dropdownDelayButton"
        >
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
