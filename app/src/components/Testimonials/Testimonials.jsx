import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";

const Testimonials = () => {
  const data = [
    {
      img: "../src/assets/Testimonials/Rupam.jpeg",
      name: "Rupam Sutar",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, esse quo molestiae blanditiis incidunt labore amet voluptatibus, repellat quam eum tempora illo quasi obcaecati perferendis quas rem nam exercitationem in?",
    },
    {
      img: "../src/assets/Testimonials/Abhi.jpeg",

      name: "Abhishek Shinde",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, esse quo molestiae blanditiis incidunt labore amet voluptatibus, repellat quam eum tempora illo quasi obcaecati perferendis quas rem nam exercitationem in?",
    },
    {
      img: "../src/assets/Testimonials/Sarthak.jpeg",

      name: "Sarthak Sukate",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, esse quo molestiae blanditiis incidunt labore amet voluptatibus, repellat quam eum tempora illo quasi obcaecati perferendis quas rem nam exercitationem in?",
    },
    {
      img: "../src/assets/Testimonials/Ritesh.jpeg",

      name: "Ritesh Patange",
      desc: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, esse quo molestiae blanditiis incidunt labore amet voluptatibus, repellat quam eum tempora illo quasi obcaecati perferendis quas rem nam exercitationem in?",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section
      className=" flex min-h-[90%] w-full flex-col gap-16  pb-4 pt-20 text-center"
      id="testimonials"
    >
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
          Testimonials
        </h2>
        <span className="text-sm text-slate-500 lg:text-base">
          People about my work
        </span>
      </div>
      <div className=" da mx-4 max-w-full rounded-2xl bg-slate-200 shadow-2xl dark:bg-slate-700 sm:mx-0 lg:mx-36">
        <div className=" m-auto">
          <div className="group relative m-auto w-full">
            <div className="group relative m-auto flex flex-col items-center gap-4 py-8 lg:px-24 ">
              <div
                style={{ backgroundImage: `url(${data[currentIndex].img})` }}
                className="h-[6rem] w-[6rem] rounded-full bg-cover bg-center object-cover duration-700"
              ></div>
              <h3 className=" text-lg text-slate-950 dark:text-slate-100">
                {data[currentIndex].name}
              </h3>
              <p className=" mt-6 text-sm text-slate-950 dark:text-slate-300 sm:mt-4 sm:text-base md:mb-10">
                {data[currentIndex].desc}
              </p>
            </div>
            {/* Left Arrow */}
            <div className="absolute left-5 top-[45%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white hover:text-slate-500 group-hover:block dark:bg-white/20 dark:text-slate-900 dark:hover:text-slate-200 sm:top-[50%]">
              <BsArrowLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="absolute right-5 top-[45%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white hover:text-slate-500 group-hover:block dark:bg-white/20 dark:text-slate-900 dark:hover:text-slate-200 sm:top-[50%]">
              <BsArrowRight onClick={nextSlide} size={30} />
            </div>
            {/* Dot Slider */}
            <div className="top-4 flex justify-center">
              {data.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="cursor-pointer text-3xl"
                >
                  <RxDotFilled
                    className={`${
                      currentIndex === slideIndex
                        ? " text-slate-950"
                        : " text-slate-500 dark:text-slate-200"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
