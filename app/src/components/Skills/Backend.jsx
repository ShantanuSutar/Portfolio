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
      tech: "Postman",
    },
  ];

  return (
    <div
      className="  flex flex-col items-center justify-center gap-10 px-0 py-8 text-left
      shadow-lg transition-all duration-300 hover:shadow-2xl dark:shadow-slate-800 md:px-16"
    >
      <h3 className=" text-xl font-semibold text-slate-950 dark:text-slate-100  lg:text-3xl">
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
