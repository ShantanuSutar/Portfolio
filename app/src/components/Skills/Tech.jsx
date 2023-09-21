import { HiBadgeCheck } from "react-icons/hi";

const Tech = ({ title, tech }) => {
  return (
    <div className=" flex items-start justify-center gap-2 text-sm">
      <div className=" flex w-full items-start justify-between gap-x-8  lg:items-center">
        <h3 className=" flex items-center gap-2 text-base capitalize text-slate-800 dark:text-slate-200 xl:text-xl">
          <HiBadgeCheck className=" text-2xl" />
          {title}
        </h3>
        <span className=" mt-[3px] capitalize text-slate-600 dark:text-slate-400 sm:mt-0">
          {tech}
        </span>
      </div>
    </div>
  );
};

export default Tech;
