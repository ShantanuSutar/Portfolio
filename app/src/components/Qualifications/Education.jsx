import Card from "./Card";

const Education = ({ toggle }) => {
  const data = [
    {
      id: 1,
      title: "Btech in IT",
      desc: "PCCOE Pune",
      time: "2021-Present",
      direction: "left",
    },
    {
      id: 2,
      title: "High School",
      desc: "97.77 (MHTCET)",
      time: "2019-2021",
      direction: "right",
    },
    {
      id: 3,
      title: "School",
      desc: "86% (Boards)",
      time: "2009-2019",
      direction: "left",
    },
  ];
  return (
    <div className={`${!toggle && "hidden"}`}>
      <div className=" flex min-h-full min-w-[500px] flex-col justify-center">
        <div className="w-full px-2 py-3 sm:mx-auto sm:max-w-xl sm:px-0">
          <div className="relative text-sm font-semibold text-gray-700 antialiased">
            {/* <!-- Vertical bar running through middle --> */}
            <div className=" absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-slate-600 sm:block"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            {data.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
