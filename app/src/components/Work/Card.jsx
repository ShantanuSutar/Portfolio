import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Point from "./Point";

const Card = ({ item }) => {
  const { icon, title, modalTitle, desc, points } = item;
  const states = [
    {
      name: "open-source",
      state: false,
    },
    {
      name: "previous",
      state: false,
    },
    {
      name: "current",
      state: false,
    },
  ];
  const [active, setActive] = useState(states);
  const handleView = (e) => {
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
    // console.log(active);
  };

  const handleClose = () => {
    let temp = active;
    temp = temp.map((item) => {
      return { ...item, state: false };
    });
    setActive(temp);
  };
  return (
    <div
      className=" flex min-h-[16rem] w-[300px] flex-col flex-wrap justify-evenly
      gap-2  px-8 py-8 text-slate-900 shadow-xl dark:text-slate-100 lg:min-w-[320px] lg:px-10 lg:py-4"
    >
      <div className=" text-xl lg:text-2xl">{icon}</div>
      <h3 className=" text-lg font-medium dark:text-slate-200 lg:text-xl">
        {title}
      </h3>
      <span
        className=" flex cursor-pointer items-center gap-2 text-sm text-slate-600 hover:underline dark:text-slate-400"
        onClick={(e) => handleView(e)}
        data-name="open-source"
      >
        View More
        <BsArrowRight className=" transition-all ease-linear hover:translate-x-1" />
      </span>
      <div
        className={` fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] px-4 opacity-0 ${
          active[0].state ? "modal-active" : "hidden"
        }`}
      >
        <div className=" relative flex w-[500px] flex-col gap-8 rounded-2xl  bg-slate-100 px-10  py-12 text-center shadow-2xl dark:bg-slate-500">
          <AiOutlineClose
            className=" absolute right-6 top-6 cursor-pointer text-2xl  text-slate-500 transition-all duration-200 ease-linear hover:rotate-90  dark:text-slate-100"
            onClick={handleClose}
          />
          <h3 className=" text-2xl font-semibold dark:text-slate-50">
            {modalTitle}
          </h3>
          <p
            className=" px-6 text-sm text-slate-500 dark:text-slate-200
       "
          >
            {desc}
          </p>
          <ul className=" flex flex-col gap-4 text-slate-900">
            {points.map((p, i) => {
              return <Point key={i} point={p.point} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
