import data from "./Data";
import { FiExternalLink } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";
import { useEffect, useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState({ name: "all" });
  const filters = [
    {
      name: "all",
    },
    {
      name: "full-stack",
    },
    {
      name: "ui",
    },
  ];

  const [projects, setProjects] = useState(data);

  useEffect(() => {
    if (filter.name === "all") {
      setProjects(data);
    } else {
      const newProj = data.filter((prj) => {
        if (prj.category.toLowerCase() === filter.name) return prj;

        return;
      });
      setProjects(newProj);
    }
    // console.log(projects);
  }, [filter.name]);

  // console.log(projects)
  return (
    <section
      className=" flex min-h-[90%] w-full flex-col gap-6  pt-20 text-center sm:gap-12"
      id="projects"
    >
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
          Projects
        </h2>
        <span className="text-sm text-slate-500 lg:text-base">
          {"What I've built"}
        </span>
      </div>

      <div className=" flex items-center justify-center  capitalize sm:gap-8 sm:text-xl">
        {filters.map((fil, i) => {
          return (
            <span
              key={i}
              className={` cursor-pointer rounded-lg px-4 py-2 text-slate-800 duration-200 hover:-translate-y-1 hover:bg-slate-800 hover:text-white dark:text-white dark:hover:bg-slate-300 dark:hover:text-slate-900 ${
                filter.name.toLowerCase() === fil.name.toLowerCase()
                  ? " bg-slate-700 text-white "
                  : ""
              }`}
              onClick={() => setFilter({ name: fil.name })}
            >
              {fil.name}
            </span>
          );
        })}
      </div>
      <div className=" flex flex-wrap items-center justify-around  shadow-2xl sm:gap-10 sm:p-4">
        {projects.map((prj) => {
          return (
            <div
              key={prj.id}
              className="flex h-[490px] flex-col rounded-xl  p-8 text-left shadow-xl dark:shadow-slate-900 sm:scale-100"
            >
              <div className="">
                <img
                  src={prj.image}
                  alt=""
                  className="  absolute  z-10 h-[12rem] w-[17rem] cursor-pointer rounded-2xl bg-cover bg-center object-cover duration-500   hover:opacity-0  
                  "
                />
              </div>
              <div className=" mx-2 my-5 flex h-full flex-col justify-around gap-2">
                <p className=" relative min-h-[12rem] w-[16rem] cursor-pointer rounded-2xl bg-cover bg-center object-cover  text-slate-900 dark:text-slate-100 ">
                  {prj.description}
                </p>
                <h3 className=" text-xl font-medium capitalize text-slate-900 dark:text-slate-100">
                  {prj.title}
                </h3>
                <h3 className="my-4 grid grid-cols-2 gap-2 text-xs font-medium capitalize text-slate-900 dark:text-slate-100 sm:grid-cols-3">
                  {prj?.stack?.map((stack, id) => {
                    return (
                      <span
                        className=" flex items-center justify-center rounded-full bg-gray-700 p-1"
                        key={id}
                      >
                        {stack}
                      </span>
                    );
                  })}
                </h3>
                <div className=" flex items-center justify-center gap-4 text-2xl text-slate-800 dark:text-slate-200">
                  <span className=" duration-200 hover:-translate-y-1">
                    <a href={prj.demoLink}>
                      <FiExternalLink />
                    </a>
                  </span>
                  <span className=" duration-200 hover:-translate-y-1">
                    <a href={prj.repoLink}>
                      <FaGithubSquare />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
