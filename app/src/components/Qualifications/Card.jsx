import { useState } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";

const Card = ({ item }) => {
  const { id, title, desc, time, direction } = item;
  //   if (direction === "right") setRight(true);
  //   console.log(right);
  //   console.log(direction);
  return (
    <div className="mt-6 sm:mt-0 ">
      <div className="flex flex-row items-center">
        <div
          className={` mx-auto flex min-w-[25rem] items-center sm:min-w-[35rem] sm:pl-10 ${
            direction === "right" ? "  justify-end" : "justify-start"
          } `}
        >
          <div className="sm:w-1/2 sm:pr-8">
            <div className="rounded bg-white p-4 font-medium shadow-md transition-all ease-linear hover:shadow-2xl dark:bg-slate-800 hover:dark:shadow-slate-800 ">
              <h3 className=" text-xl text-slate-900 dark:text-slate-100">
                {title}
              </h3>
              <span className="text-slate-500 dark:text-slate-400">{desc}</span>
              <div className=" mt-3 flex items-center gap-2 text-slate-500">
                <AiTwotoneCalendar />
                {time}
              </div>
            </div>
          </div>
        </div>
        {id === 1 && (
          <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-slate-600 sm:translate-y-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        )}
        {id === 2 && (
          <div className="pl10items-center absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform justify-center rounded-full border-4 border-white bg-slate-600 sm:translate-y-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        )}
        {id === 3 && (
          <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-slate-600 sm:translate-y-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
