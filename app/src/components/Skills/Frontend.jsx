import Tech from "./Tech";
const Frontend = () => {
  const data = [
    {
      id: 1,
      title: "ui/ux",
      tech: "react , typescript, tailwind, material ui",
    },
    {
      id: 2,
      title: "State Management",
      tech: "Redux",
    },
    {
      id: 3,
      title: "APIs",
      tech: "React Query",
    },
  ];

  return (
    <div
      className=" flex flex-col items-center justify-center gap-10 px-0 py-8 text-left
     shadow-lg transition-all duration-300 hover:shadow-2xl hover:dark:shadow-slate-800 md:px-16"
    >
      <h3 className=" text-xl font-semibold text-slate-950 dark:text-slate-100  lg:text-3xl">
        FrontEnd
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

export default Frontend;
