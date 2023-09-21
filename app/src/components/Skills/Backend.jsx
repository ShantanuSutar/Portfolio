import { HiBadgeCheck } from "react-icons/hi";
import Tech from "./Tech";
const BackEnd = () => {
  const data = [
    {
      id: 1,
      title: "servers",
      tech: "Nodejs, Express",
    },
    {
      id: 2,
      title: "Database",
      tech: "Firebase, Supabase, Mysql, Mongodb",
    },
    {
      id: 3,
      title: "Testing",
      tech: "Jest, Postman",
    },
  ];

  return (
    <div
      className="  flex flex-col items-center justify-center gap-10 px-0 py-8 text-left
      shadow-lg transition-all ease-linear hover:shadow-2xl md:px-16"
    >
      <h3 className=" text-xl font-semibold text-black  lg:text-3xl">
        BackEnd
      </h3>
      <div className="">
        <div className=" flex flex-col items-start gap-7">
          {data.map((item) => {
            return <Tech key={item.id} title={item.title} tech={item.tech} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
