import { useState } from "react";
import Data from "./Data";
import Card from "./Card";
const Work = () => {
  const data = Data;

  return (
    <section
      className="h-[90%] w-full border border-yellow-400 pt-20"
      id="work"
    >
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-4xl font-semibold">Work</h2>
        <span className=" text-slate-700">My recent work</span>
      </div>
      <div className=" flex h-[70%] w-full items-center justify-evenly">
        {data.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Work;
