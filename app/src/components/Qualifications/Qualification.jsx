// GiGraduateCap
// LiaSuitcaseSolid
// AiTwotoneCalendar
import { GiGraduateCap } from "react-icons/gi";
import { LiaSuitcaseSolid } from "react-icons/lia";
import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";

const Qualification = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section className=" flex min-h-[90%] w-full scale-75 flex-col gap-16  pt-16 md:scale-100">
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-3xl font-semibold sm:text-4xl">Qualification</h2>
        <span className=" text-slate-500">My Personal Journey</span>
      </div>

      <div className=" flex flex-col items-center justify-center gap-8">
        <div className=" flex items-center justify-center gap-5 text-2xl font-medium sm:gap-10">
          <div
            className={`flex items-center gap-3 text-lg hover:cursor-pointer hover:opacity-80 sm:text-xl ${
              toggle ? "text-slate-900" : " text-slate-500"
            }`}
            onClick={() => setToggle(true)}
          >
            <GiGraduateCap />
            Education
          </div>
          <div
            className={`flex items-center gap-3 text-lg hover:cursor-pointer hover:opacity-80 sm:text-xl ${
              !toggle ? "text-slate-900" : " text-slate-500"
            }`}
            onClick={() => setToggle(false)}
          >
            <LiaSuitcaseSolid />
            Experience
          </div>
        </div>
        <Education toggle={toggle} />
        <Experience toggle={toggle} />
      </div>
    </section>
  );
};

export default Qualification;
