import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <div className="min-h-[80%] w-full py-20" id="skills">
      <div className=" flex flex-col items-center gap-1">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
          Skills
        </h2>
        <span className="  text-sm text-slate-500 lg:text-base">
          My Tech Stack
        </span>
        <div className=" mx-4 mt-10 flex flex-col gap-5 lg:mx-0 lg:flex-row">
          <Frontend />
          <Backend />
        </div>
      </div>
    </div>
  );
};

export default Skills;
