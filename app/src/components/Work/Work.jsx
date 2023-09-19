import { TfiLayout } from "react-icons/tfi";
import { BsArrowRight, BsPencilSquare } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";

const Work = () => {
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
        {/* ------- */}
        <div className="grid grid-rows-3 items-center gap-4 max-w-[220px] min-h-[16rem] shadow-xl py-4 px-6">
          <TfiLayout className=" text-2xl" />
          <h3 className=" text-xl font-medium">Open Source Contributions</h3>
          <span className=" flex items-center gap-2 text-sm text-slate-500 hover:underline cursor-pointer">
            View More
            <BsArrowRight className=" hover:translate-x-1 transition-all ease-linear" />
          </span>
          <div>
            <div className=" hidden">
              <h3>Opensource Contribution</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                sapiente maiores atque aspernatur modi quos excepturi
              </p>
              <ul>
                <li>
                  <p>Actively contributing to opensource</p>
                </li>
                <li>
                  <p>Solve issues with UI/UX </p>
                </li>
                <li>
                  <p>Active in the community</p>
                </li>
                <li>
                  <p>Review commits</p>
                </li>
                <li>
                  <p>Learning in public</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------- */}
        <div className="grid grid-rows-3 items-center gap-4 max-w-[220px] min-h-[16rem] shadow-xl py-4 px-6 ">
          <SiAntdesign className=" text-2xl" />
          <h3 className=" text-xl font-medium pr-6">Previous Project</h3>
          <span className=" flex items-center gap-2 text-sm text-slate-500 hover:underline cursor-pointer">
            View More
            <BsArrowRight className=" hover:translate-x-1 transition-all ease-linear" />
          </span>
          <div>
            <div className=" hidden">
              <h3>Previous Project</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                sapiente maiores atque aspernatur modi quos excepturi
              </p>
              <ul>
                <li>
                  <p>Portfolio</p>
                </li>
                <li>
                  <p>react , tailwind</p>
                </li>
                <li>
                  <p>animations</p>
                </li>
                <li>
                  <p>ui/ux</p>
                </li>
                <li>
                  <p>optimization</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* -------- */}
        <div className="grid grid-rows-3 items-center gap-4 max-w-[220px] min-h-[16rem] shadow-xl py-4 px-6">
          <BsPencilSquare className=" text-2xl" />
          <h3 className=" text-xl font-medium pr-6">Current Project</h3>
          <span className=" flex items-center gap-2 text-sm text-slate-500 hover:underline cursor-pointer">
            View More
            <BsArrowRight className=" hover:translate-x-1 transition-all ease-linear" />
          </span>
          <div>
            <div className=" hidden">
              <h3>Current project</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                sapiente maiores atque aspernatur modi quos excepturi
              </p>
              <ul>
                <li>
                  <p>the wild oasis - dashboard</p>
                </li>
                <li>
                  <p>single page application</p>
                </li>
                <li>
                  <p>styledcomponents</p>
                </li>
                <li>
                  <p>react-query</p>
                </li>
                <li>
                  <p>supabase</p>
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
