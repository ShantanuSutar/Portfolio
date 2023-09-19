import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const AboutInfo = () => {
  return (
    <div className=" flex justify-around text-center">
      <div className=" flex flex-col items-center gap-1 hover:shadow-2xl transition-all ease-linear cursor-default">
        <FaLaptopCode className=" text-xl" />
        <h3 className=" font-medium text-lg">Open Source</h3>
        <span className=" text-slate-600 text-sm">Active Contributions</span>
      </div>
      <div className="flex flex-col items-center gap-1 hover:shadow-2xl transition-all ease-linear cursor-default">
        <HiOutlineClipboardDocumentList className=" text-xl" />
        <h3 className=" font-medium text-lg">Completed</h3>
        <span className=" text-slate-600 text-sm">50 + Projects</span>
      </div>
      <div className="flex flex-col items-center gap-1 hover:shadow-2xl transition-all ease-linear cursor-default">
        <BsFillJournalBookmarkFill className=" text-xl" />
        <h3 className=" font-medium text-lg">Studies</h3>
        <span className=" text-slate-600 text-sm">Pursuing C.S.</span>
      </div>
    </div>
  );
};

export default AboutInfo;
