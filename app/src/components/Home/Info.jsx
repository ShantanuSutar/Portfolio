import { BsFillSendFill } from "react-icons/bs";
const Info = () => {
  return (
    <section className=" flex flex-col-reverse items-center gap-5 md:flex-row">
      <div className="flex flex-col gap-5 text-start">
        <h1 className=" text-3xl  font-bold text-slate-900 dark:text-white md:text-2xl lg:text-3xl xl:text-5xl">
          Shantanu Sutar <span>👋</span>
        </h1>
        <h3 className=" flex items-center gap-2 text-base text-slate-800 dark:text-slate-300 md:text-base lg:text-xl xl:text-2xl">
          <hr className="w-4 border-black dark:border-white md:w-12 lg:w-24" />
          Frontend Developer<span>💻</span>
        </h3>
        <p className=" max-w-[95%] text-slate-700 dark:text-slate-300 sm:max-w-[80%]">
          Enthusiastic about open-source and development
        </p>
        <a
          href="#contact"
          className=" text-md flex max-w-[10rem] items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 font-medium text-slate-200 transition  duration-150 ease-in-out hover:opacity-90 dark:bg-slate-100 dark:text-slate-900  md:scale-90 lg:scale-100 "
        >
          Say Hello <BsFillSendFill />
        </a>
      </div>
      <div className=" mr-8">
        <img
          src="https://i.ibb.co/TmhZF9C/Formal-Photo.jpg"
          alt=""
          className="home-img h-[15rem] w-[15rem]  border-4 md:h-[14rem] md:w-[14rem] lg:h-[18rem] lg:w-[18rem] xl:h-[22rem]  xl:w-[22rem]"
        />
      </div>
    </section>
  );
};

export default Info;
