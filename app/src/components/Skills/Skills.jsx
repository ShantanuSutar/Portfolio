import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <div className="min-h-[80%] w-full py-20" id="skills">
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-4xl font-semibold">Skills</h2>
        <span className=" text-slate-700">Tech Stack</span>
        <div className=" mx-4 mt-10 flex flex-col gap-5 lg:mx-0 lg:flex-row">
          <Frontend />
          <Backend />
        </div>
      </div>
    </div>
  );
};

export default Skills;
