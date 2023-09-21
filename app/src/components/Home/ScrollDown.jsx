const ScrollDown = () => {
  return (
    <div className=" invisible my-auto ml-10 flex items-center gap-2  text-slate-950 dark:text-slate-100 sm:visible md:ml-20  md:scale-90 lg:ml-[12rem]  lg:scale-100 lg:gap-5">
      <span className="scroll-btn  flex flex-col text-xl font-medium">
        <a
          href="#about"
          className=" transition-all duration-200 ease-in hover:translate-y-[-9px]"
        >
          <span className="mouse border-slate-950 dark:border-white ">
            <span className="bg-slate-950 dark:bg-white"></span>
          </span>
        </a>
        Scroll Me
      </span>
      {/* <BsMouse className=" text-4xl" /> */}
      {/* <span>Scroll Down</span> */}
      {/* <BsArrowDown className=" font-bold text-2xl" /> */}
    </div>
  );
};

export default ScrollDown;
