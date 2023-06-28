import React from "react";

function Skills() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">Skills</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="rating gap-2">
          <input className="mask mask-square" name="rating-1" type="radio" />
          <input checked className="mask mask-square" name="rating-1" type="radio" />
          <input className="mask mask-square" name="rating-1" type="radio" />
          <input className="mask mask-square" name="rating-1" type="radio" />
          <input className="mask mask-square" name="rating-1" type="radio" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
