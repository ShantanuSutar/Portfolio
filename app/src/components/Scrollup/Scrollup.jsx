import { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const Scrollup = () => {
  const [show, setShow] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setShow(true);
    } else if (scrolled <= 300) {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      {show && (
        <div
          className=" fixed right-10 bottom-12 bg-slate-950 py-4 px-4 rounded-lg text-white text-2xl hover:opacity-90 cursor-pointer shadow-2xl"
          onClick={scrollToTop}
        >
          <a href="#">
            <FaArrowUpLong />
          </a>
        </div>
      )}
    </>
  );
};

export default Scrollup;
