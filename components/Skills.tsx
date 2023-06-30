import React from "react";

function Skills() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-base-200">
      <div className="w-10/12">
        <div className="flex items-center gap-12">
          <h1 className="min-w-fit text-6xl font-bold">Skills</h1>
          <div className="h-[2px] w-full bg-white"></div>
        </div>
        <div>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="">
          <h1>Test</h1>
          <div className="rating gap-2">
            <input className="mask mask-square" name="rating-1" type="radio" />
            <input checked className="mask mask-square" name="rating-1" type="radio" />
            <input className="mask mask-square" name="rating-1" type="radio" />
            <input className="mask mask-square" name="rating-1" type="radio" />
            <input className="mask mask-square" name="rating-1" type="radio" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
