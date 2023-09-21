import AboutInfo from "./AboutInfo";
import { CgFileDocument } from "react-icons/cg";
const About = () => {
  return (
    <div className=" min-h-[90%] w-full  pt-5 md:pt-20 " id="about">
      <div className=" mx-auto flex flex-col items-center gap-1 ">
        <h2 className=" text-2xl font-semibold md:text-4xl">About Me</h2>
        <span className=" text-slate-500">My Introduction</span>
      </div>
      <div className=" mx-8 flex flex-col md:m-10  md:grid md:grid-cols-2 md:items-center md:gap-x-10">
        <img
          src="../src/assets/CasualPhotoCropped.jpg"
          alt=""
          className=" -mt-6 scale-75  justify-self-center rounded-[1.5rem] shadow-2xl saturate-100 md:scale-100"
        />
        <div className=" flex flex-col items-center gap-10">
          <AboutInfo />
          <p className=" text-center text-slate-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse odit
            nobis voluptate repellat molestias optio, ipsum architecto facilis
            perferendis non laboriosam Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Error excepturi voluptas quas debitis repellendus.
          </p>
          <a
            href=""
            className=" text-md flex max-w-[10rem] items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-medium text-slate-200 transition duration-75 ease-in-out hover:opacity-90"
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
