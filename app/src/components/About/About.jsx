import AboutInfo from "./AboutInfo";
import { CgFileDocument } from "react-icons/cg";
const About = () => {
  return (
    <div
      className=" w-full min-h-[90%] pt-20  border border-yellow-400"
      id="about"
    >
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-4xl font-semibold">About Me</h2>
        <span className=" text-slate-700">My Introduction</span>
      </div>
      <div className=" m-10  grid grid-cols-2 gap-x-10 items-center">
        <img
          src="../src/assets/CasualPhotoCropped.jpg"
          alt=""
          className="rounded-[1.5rem] saturate-100 justify-self-center shadow-2xl"
        />
        <div className=" flex flex-col gap-10">
          <AboutInfo />
          <p className=" text-slate-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse odit
            nobis voluptate repellat molestias optio, ipsum architecto facilis
            perferendis non laboriosam Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Error excepturi voluptas quas debitis repellendus.
          </p>
          <a
            href=""
            className=" flex items-center justify-center px-6 py-4 bg-black text-slate-200 text-md rounded-xl max-w-[10rem] font-medium hover:opacity-90 ease-in-out transition duration-75 gap-2"
          >
            Resume
            <CgFileDocument className=" text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
