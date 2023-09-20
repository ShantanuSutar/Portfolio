const ScrollDown = () => {
  return (
    <div className=" text-slate-950 ml-[12rem] flex items-center my-auto gap-5">
      <span className="scroll-btn flex flex-col text-xl font-medium">
        <a
          href="#about"
          className=" hover:translate-y-[-9px] transition-all ease-in duration-200"
        >
          <span className="mouse">
            <span></span>
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
