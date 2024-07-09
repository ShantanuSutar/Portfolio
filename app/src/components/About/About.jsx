import AboutInfo from "./AboutInfo";
import { CgFileDocument } from "react-icons/cg";
import resume from "../../assets/Resume_2.pdf";
import CasualPhotoCropped from "../../../public/assets/Casual-Photo-Cropped.jpg";
const About = () => {
  return (
    <div className=" min-h-[90%] w-full  pt-5 md:pt-20 " id="about">
      <div className=" mx-auto flex flex-col items-center gap-1 ">
        <h2 className=" text-2xl font-semibold text-slate-900 dark:text-white md:text-4xl">
          About Me
        </h2>
        <span className=" text-slate-500">My Introduction</span>
      </div>
      <div className=" mx-8 flex flex-col md:m-10  md:grid md:grid-cols-2 md:items-center md:gap-x-10">
        <img
          src={CasualPhotoCropped}
          alt=""
          className=" -mt-6 scale-75  justify-self-center rounded-[1.5rem] shadow-2xl saturate-100 md:scale-100"
        />
        <div className=" flex flex-col items-center gap-10">
          <AboutInfo />
          <p className=" da text-center text-slate-600 dark:text-slate-300">
            I am a passionate Frontend Developer specializing in React. With a
            focus on creating intuitive and engaging user experiences, I have 9
            months of experience in transforming design concepts into
            functional, responsive, and scalable applications.
            <hr className=" my-6" />
            As a lifelong learner, I am constantly exploring the latest trends
            and technologies in the FrontEnd landscape to enhance my skills and
            deliver top-notch results.
          </p>
          <a
            href={resume}
            className=" text-md flex max-w-[10rem] items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-medium text-slate-200 transition duration-75 ease-in-out hover:opacity-90 dark:bg-slate-200 dark:text-slate-900"
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
