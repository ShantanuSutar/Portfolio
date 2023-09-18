import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <div className="w-full h-[90%] mt-20" id="skills">
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-4xl font-semibold">Skills</h2>
        <span className=" text-slate-700">Tech Stack</span>
        <div className=" grid grid-cols-2 w-full gap-12 mt-10">
          <Frontend />
          <Backend />
        </div>
      </div>
    </div>
  );
};

export default Skills;
