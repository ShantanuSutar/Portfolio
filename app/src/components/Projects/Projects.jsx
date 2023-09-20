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
      className=" w-full min-h-[90%] pt-20 border border-yellow-400 flex flex-col gap-12 text-center"
      id="projects"
    >
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-4xl font-semibold">Projects</h2>
        <span className=" text-slate-500">What I've built</span>
      </div>

      <div className=" flex items-center justify-center gap-8 capitalize text-xl">
        {filters.map((fil, i) => {
          return (
            <span
              key={i}
              className={` hover:bg-slate-800 hover:text-white py-2 px-4 rounded-lg duration-200 hover:-translate-y-1 cursor-pointer ${
                filter.name === fil.name ? " bg-slate-800 text-white" : ""
              }`}
              onClick={() => setFilter({ name: fil.name })}
            >
              {fil.name}
            </span>
          );
        })}
      </div>
      <div className=" flex flex-wrap gap-10 p-4 items-center justify-around shadow-2xl">
        {projects.map((prj) => {
          return (
            <div key={prj.id} className="text-left shadow-xl p-8">
              <img
                src={prj.image}
                alt=""
                className=" w-[18rem] h-[12rem] rounded-2xl object-cover bg-center bg-cover duration-300 hover:-translate-y-5 cursor-pointer"
              />
              <div className=" flex flex-col mx-2 my-5 gap-2">
                <h3 className=" text-xl text-slate-900 font-medium">
                  {prj.title}
                </h3>
                <div className=" flex items-center gap-4 text-2xl text-slate-800 ">
                  <span className=" hover:-translate-y-1 duration-200">
                    <a href={prj.demoLink}>
                      <FiExternalLink />
                    </a>
                  </span>
                  <span className=" hover:-translate-y-1 duration-200">
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
