import { TfiLayout } from "react-icons/tfi";
import { BsArrowRight, BsPencilSquare } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { HiBadgeCheck } from "react-icons/hi";
import { useState } from "react";
const Work = () => {
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
    <section
      className="w-full h-[90%] pt-20 border border-yellow-400"
      id="work"
    >
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-4xl font-semibold">Work</h2>
        <span className=" text-slate-700">My recent work</span>
      </div>
      <div className=" w-full h-[70%] flex items-center justify-evenly">
        {/* ------- Open Source*/}
        <div className="grid grid-rows-3 items-center gap-4 max-w-[220px] min-h-[16rem] shadow-xl py-4 px-6">
          <TfiLayout className=" text-2xl" />
          <h3 className=" text-xl font-medium">Open Source Contributions</h3>
          <span
            className=" flex items-center gap-2 text-sm text-slate-500 hover:underline cursor-pointer"
            onClick={(e) => handleView(e)}
            data-name="open-source"
          >
            View More
            <BsArrowRight className=" hover:translate-x-1 transition-all ease-linear" />
          </span>
          <div
            className={` fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center px-4 opacity-0 ${
              active[0].state ? "modal-active" : "hidden"
            }`}
          >
            <div className=" w-[500px] relative py-12 px-10 rounded-2xl bg-white text-center flex flex-col gap-8 shadow-2xl">
              <AiOutlineClose
                className=" absolute top-6 right-6 text-2xl cursor-pointer  hover:rotate-90 transition-all ease-linear text-slate-500  duration-200"
                onClick={handleClose}
              />
              <h3 className=" text-2xl font-semibold">Open Source</h3>
              <p
                className=" px-6 text-slate-500 text-sm
               "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                sapiente maiores atque aspernatur modi quos excepturi
              </p>
              <ul className=" flex flex-col gap-4 text-slate-900">
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    Actively contributing to opensource
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    Solve issues with UI/UX{" "}
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    Active in the community
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    Review commits
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    Learning in public
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* -------Previous Project */}
        <div className="grid grid-rows-3 items-center gap-4 max-w-[220px] min-h-[16rem] shadow-xl py-4 px-6">
          <SiAntdesign className=" text-2xl" />
          <h3 className=" text-xl font-medium">previous project </h3>
          <span
            className=" flex items-center gap-2 text-sm text-slate-500 hover:underline cursor-pointer"
            onClick={(e) => handleView(e)}
            data-name="previous"
          >
            View More
            <BsArrowRight className=" hover:translate-x-1 transition-all ease-linear" />
          </span>
          <div
            className={` fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center px-4 opacity-0 ${
              active[1].state ? "modal-active" : "hidden"
            }`}
          >
            <div className=" w-[500px] relative py-12 px-10 rounded-2xl bg-white text-center flex flex-col gap-8 shadow-2xl">
              <AiOutlineClose
                className=" absolute top-6 right-6 text-2xl cursor-pointer  hover:rotate-90 transition-all ease-linear text-slate-500  duration-200"
                onClick={handleClose}
              />
              <h3 className=" text-2xl font-semibold">previous project</h3>
              <p
                className=" px-6 text-slate-500 text-sm
               "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                sapiente maiores atque aspernatur modi quos excepturi
              </p>
              <ul className=" flex flex-col gap-4 text-slate-900">
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    portfolio
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    react , tailwind
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    animations
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    ui/ux
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    optimization
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* -------- Current Project*/}
        <div className="grid grid-rows-3 items-center gap-4 max-w-[220px] min-h-[16rem] shadow-xl py-4 px-6">
          <BsPencilSquare className=" text-2xl" />
          <h3 className=" text-xl font-medium">current project</h3>
          <span
            className=" flex items-center gap-2 text-sm text-slate-500 hover:underline cursor-pointer"
            onClick={(e) => handleView(e)}
            data-name="current"
          >
            View More
            <BsArrowRight className=" hover:translate-x-1 transition-all ease-linear" />
          </span>
          <div
            className={` fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center px-4 opacity-0 ${
              active[2].state ? "modal-active" : "hidden"
            }`}
          >
            <div className=" w-[500px] relative py-12 px-10 rounded-2xl bg-white text-center flex flex-col gap-8 shadow-2xl">
              <AiOutlineClose
                className=" absolute top-6 right-6 text-2xl cursor-pointer  hover:rotate-90 transition-all ease-linear text-slate-500  duration-200"
                onClick={handleClose}
              />
              <h3 className=" text-2xl font-semibold">current project</h3>
              <p
                className=" px-6 text-slate-500 text-sm
               "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                sapiente maiores atque aspernatur modi quos excepturi
              </p>
              <ul className=" flex flex-col gap-4 text-slate-900">
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    the wild oasis - dashboard
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    single page application
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    styledcomponents
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    react-query
                  </p>
                </li>
                <li>
                  <p className=" flex items-center gap-2">
                    <HiBadgeCheck className=" text-xl" />
                    supabase
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
