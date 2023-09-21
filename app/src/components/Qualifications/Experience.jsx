import { AiTwotoneCalendar } from "react-icons/ai";
import Card from "./Card";

const Experience = ({ toggle }) => {
  const data = [
    {
      id: 1,
      title: "Open Source",
      desc: "Active in community",
      time: "2023 - present",
      direction: "left",
    },
    {
      id: 2,
      title: "Built 50+ projects",
      desc: "Major+Minor",
      time: "2022 - Present",
      direction: "right",
    },
    {
      id: 3,
      title: "Exploring",
      desc: "FrontEnd",
      time: "2021- Present",
      direction: "left",
    },
  ];

  return (
    <div className={`${toggle && "hidden"}`}>
      <div className=" flex min-h-full min-w-[500px] flex-col justify-center">
        <div className="w-full px-2 py-3 sm:mx-auto sm:max-w-xl sm:px-0">
          <div className="relative text-sm font-semibold text-gray-700 antialiased dark:text-slate-300">
            {/* <!-- Vertical bar running through middle --> */}
            <div className=" absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-slate-600 dark:bg-slate-400 sm:block"></div>

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

export default Experience;
