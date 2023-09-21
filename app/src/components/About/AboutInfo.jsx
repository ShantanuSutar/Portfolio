import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const AboutInfo = () => {
  return (
    <div className=" grid grid-cols-3 gap-4 text-center text-slate-900 dark:text-slate-200 sm:flex sm:justify-around">
      <div className=" flex cursor-default flex-col items-center justify-around gap-1 transition-all ease-linear hover:shadow-2xl">
        <FaLaptopCode className=" text-xl" />
        <h3 className=" font-medium sm:text-lg">Open Source</h3>
        <span className=" text-xs text-slate-600 dark:text-slate-400">
          Active Contributions
        </span>
      </div>
      <div className="flex cursor-default flex-col items-center gap-1 transition-all ease-linear hover:shadow-2xl">
        <HiOutlineClipboardDocumentList className=" text-xl" />
        <h3 className=" font-medium sm:text-lg">Completed</h3>
        <span className=" text-xs text-slate-600 dark:text-slate-400">
          50 + Projects
        </span>
      </div>
      <div className="flex  cursor-default flex-col items-center gap-1 transition-all ease-linear hover:shadow-2xl">
        <BsFillJournalBookmarkFill className=" text-xl" />
        <h3 className=" font-medium sm:text-lg">Studies</h3>
        <span className=" text-xs text-slate-600 dark:text-slate-400">
          Pursuing C.S.
        </span>
      </div>
    </div>
  );
};

export default AboutInfo;
