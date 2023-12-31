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
          className=" fixed bottom-20 right-6 scale-90  cursor-pointer rounded-lg bg-slate-950 px-4 py-4 text-2xl text-slate-100 shadow-2xl hover:opacity-90 dark:bg-slate-200 dark:text-slate-900 sm:bottom-16  sm:right-10 sm:scale-100 md:bottom-8"
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
