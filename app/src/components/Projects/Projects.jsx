import data from "./Data";
import { FiExternalLink } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";
import { useEffect, useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState({ name: "react" });
  const filters = [
    {
      name: "all",
    },
    {
      name: "react",
    },
    {
      name: "javascript",
    },
    {
      name: "css",
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
      className=" flex min-h-[90%] w-full flex-col gap-6 border border-yellow-400 pt-20 text-center sm:gap-12"
      id="projects"
    >
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-2xl font-semibold text-slate-900 sm:text-4xl">
          Projects
        </h2>
        <span className=" text-sm text-slate-500 sm:text-base">
          What I've built
        </span>
      </div>

      <div className=" flex items-center justify-center gap-3 capitalize sm:gap-8 sm:text-xl">
        {filters.map((fil, i) => {
          return (
            <span
              key={i}
              className={` cursor-pointer rounded-lg px-4 py-2 text-slate-800 duration-200 hover:-translate-y-1 hover:bg-slate-800 hover:text-white ${
                filter.name === fil.name ? " bg-slate-800 text-white" : ""
              }`}
              onClick={() => setFilter({ name: fil.name })}
            >
              {fil.name}
            </span>
          );
        })}
      </div>
      <div className=" flex flex-wrap items-center justify-around shadow-2xl sm:gap-10 sm:p-4">
        {projects.map((prj) => {
          return (
            <div
              key={prj.id}
              className="flex scale-90 flex-col  justify-start p-8 text-left shadow-xl sm:scale-100"
            >
              <div className="">
                <img
                  src={prj.image}
                  alt=""
                  className=" absolute  z-10 h-[12rem] w-[18rem] cursor-pointer rounded-2xl bg-cover bg-center object-cover   duration-500  hover:opacity-0
                  "
                />
              </div>
              <div className=" mx-2 my-5 flex flex-col gap-2">
                <p className=" relative min-h-[12rem] w-[16rem] cursor-pointer rounded-2xl bg-cover bg-center object-cover  ">
                  {prj.description}
                </p>
                <h3 className=" text-xl font-medium text-slate-900">
                  {prj.title}
                </h3>
                <div className=" flex items-center gap-4 text-2xl text-slate-800 ">
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
