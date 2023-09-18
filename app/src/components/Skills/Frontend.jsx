import { HiBadgeCheck } from "react-icons/hi";
const Frontend = () => {
  return (
    <div
      className=" py-8 px-16 flex flex-col items-center justify-center text-center
     gap-10 shadow-lg hover:shadow-2xl transition-all ease-linear"
    >
      <h3 className=" text-3xl font-semibold  text-black">FrontEnd</h3>
      <div>
        <div className=" flex flex-col gap-7">
          <div className=" flex items-center justify-center gap-2">
            <HiBadgeCheck />
            <div className=" w-full flex items-center gap-x-8 justify-between">
              <h3 className=" text-xl text-slate-800">UI/UX</h3>
              <span className=" text-slate-600">
                React, Tailwind, Material UI
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <HiBadgeCheck />
            <div className=" w-full flex items-center gap-x-8 justify-between">
              <h3 className=" text-xl text-slate-800">State Management</h3>
              <span className=" text-slate-600">Redux</span>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <HiBadgeCheck />
            <div className=" w-full flex items-center gap-x-8 justify-between">
              <h3 className=" text-xl text-slate-800">APIs</h3>
              <span className=" text-slate-600">React Query</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
