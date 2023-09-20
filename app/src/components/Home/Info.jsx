import { BsFillSendFill } from "react-icons/bs";
const Info = () => {
  return (
    <section className=" flex items-center gap-5">
      <div className="flex flex-col gap-5 text-start">
        <h1 className=" text-5xl font-bold text-slate-900">
          Shantanu Sutar <span>👋</span>
        </h1>
        <h3 className=" flex items-center gap-2 text-2xl text-slate-800">
          <hr className="w-24 border-black" />
          Frontend Developer<span>💻</span>
        </h3>
        <p className=" text-slate-700 max-w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          dolores,soluta, labore voluptatum consequuntur quam vitae dolor
          voluptatem
        </p>
        <a
          href="#contact"
          className=" px-6 py-4 bg-slate-950 text-slate-200 text-md rounded-xl max-w-[10rem] flex items-center justify-center font-medium hover:opacity-90 ease-in-out transition duration-75 gap-3"
        >
          Say Hello <BsFillSendFill />
        </a>
      </div>
      <div className=" mr-8">
        <img src="../src/assets/FormalPhoto.jpg" alt="" className="home-img" />
      </div>
    </section>
  );
};

export default Info;
