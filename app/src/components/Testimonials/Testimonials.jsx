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
    <section className=" w-full h-[90%] pt-20 border border-yellow-400 flex flex-col gap-16 text-center">
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-4xl font-semibold">Testimonials</h2>
        <span className=" text-slate-500">People about my work</span>
      </div>
      <div className=" max-w-full bg-gray-200 rounded-2xl mx-36 shadow-2xl">
        <div className=" m-auto">
          <div className="w-full m-auto relative group">
            <div className="m-auto py-8 px-24 relative group flex flex-col items-center gap-4 ">
              <div
                style={{ backgroundImage: `url(${data[currentIndex].img})` }}
                className="w-[6rem] h-[6rem] rounded-full object-cover bg-center bg-cover duration-500"
              ></div>
              <h3>{data[currentIndex].name}</h3>
              <p className=" mb-10">{data[currentIndex].desc}</p>
            </div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:text-slate-500">
              <BsArrowLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:text-slate-500">
              <BsArrowRight onClick={nextSlide} size={30} />
            </div>
            {/* Dot Slider */}
            <div className="flex top-4 justify-center">
              {data.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-3xl cursor-pointer"
                >
                  <RxDotFilled
                    className={`${
                      currentIndex === slideIndex ? "" : " text-slate-500"
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
