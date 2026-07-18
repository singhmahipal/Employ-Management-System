import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      <div className="shrink-0 h-full w-75 p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="px-3 py-1 text-sm bg-red-600 rounded">High</h3>
          <h4 className="text-sm">18 july 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">make a youtube video</h2>
        <p className="mt-2 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          iure voluptates cupiditate. Nam nostrum soluta quaerat sed et unde
          voluptatibus, incidunt quibusdam sequi error. Similique et dicta
          facilis qui ut.
        </p>
      </div>
      <div className="shrink-0 h-full w-75 p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="px-3 py-1 text-sm bg-red-600 rounded">High</h3>
          <h4 className="text-sm">18 july 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">make a youtube video</h2>
        <p className="mt-2 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          iure voluptates cupiditate. Nam nostrum soluta quaerat sed et unde
          voluptatibus, incidunt quibusdam sequi error. Similique et dicta
          facilis qui ut.
        </p>
      </div>
      <div className="shrink-0 h-full w-75 p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="px-3 py-1 text-sm bg-red-600 rounded">High</h3>
          <h4 className="text-sm">18 july 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">make a youtube video</h2>
        <p className="mt-2 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          iure voluptates cupiditate. Nam nostrum soluta quaerat sed et unde
          voluptatibus, incidunt quibusdam sequi error. Similique et dicta
          facilis qui ut.
        </p>
      </div>
      <div className="shrink-0 h-full w-75 p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="px-3 py-1 text-sm bg-red-600 rounded">High</h3>
          <h4 className="text-sm">18 july 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">make a youtube video</h2>
        <p className="mt-2 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          iure voluptates cupiditate. Nam nostrum soluta quaerat sed et unde
          voluptatibus, incidunt quibusdam sequi error. Similique et dicta
          facilis qui ut.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
