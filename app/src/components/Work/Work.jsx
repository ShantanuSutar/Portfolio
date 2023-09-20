import { useState } from "react";
import Data from "./Data";
import Card from "./Card";
const Work = () => {
  const data = Data;

  return (
    <section
      className="min-h-[90%] w-full border border-yellow-400 pb-10 pt-20"
      id="work"
    >
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-3xl font-semibold md:text-4xl">Work</h2>
        <span className=" text-sm text-slate-700 lg:text-base">
          My recent work
        </span>
      </div>
      <div className=" flex h-[70%] w-full flex-wrap items-center justify-evenly p-8">
        {data.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Work;
