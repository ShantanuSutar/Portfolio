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
    <section className=" w-full h-[90%] mt-16 border border-yellow-400 flex flex-col gap-16">
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-4xl font-semibold">Qualification</h2>
        <span className=" text-slate-500">My Personal Journey</span>
      </div>

      <div className=" flex flex-col items-center justify-center gap-8">
        <div className=" flex items-center justify-center text-2xl font-medium gap-10">
          <div
            className={`flex items-center gap-3 hover:cursor-pointer hover:opacity-80 ${
              toggle ? "text-slate-900" : " text-slate-500"
            }`}
            onClick={() => setToggle(true)}
          >
            <GiGraduateCap />
            Education
          </div>
          <div
            className={`flex items-center gap-3 hover:cursor-pointer hover:opacity-80 ${
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
