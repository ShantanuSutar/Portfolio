import { HiBadgeCheck } from "react-icons/hi";
const BackEnd = () => {
  return (
    <div
      className=" py-8 px-16 flex flex-col items-center justify-center text-center
     gap-10 shadow-lg hover:shadow-2xl transition-all ease-linear"
    >
      <h3 className=" text-3xl font-semibold text-black">BackEnd</h3>
      <div>
        <div className=" flex flex-col gap-7">
          <div className=" flex items-center justify-center gap-2">
            <HiBadgeCheck />
            <div className=" w-full flex items-center gap-x-8 justify-between">
              <h3 className=" text-xl text-slate-800">Servers</h3>
              <span className=" text-slate-600">Nodejs, Express</span>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <HiBadgeCheck />
            <div className=" w-full flex items-center gap-x-8 justify-between">
              <h3 className=" text-xl text-slate-800">Database</h3>
              <span className=" text-slate-600">
                Firebase, Supabase, Mysql, Mongodb
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <HiBadgeCheck />
            <div className=" w-full flex items-center gap-x-8 justify-between">
              <h3 className=" text-xl text-slate-800">Testing </h3>
              <span className=" text-slate-600">Jest, Postman</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
