import React from "react";

function Skills() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="rating gap-2">
          <input type="radio" name="rating-1" className="mask mask-square" />
          <input type="radio" name="rating-1" className="mask mask-square" checked />
          <input type="radio" name="rating-1" className="mask mask-square" />
          <input type="radio" name="rating-1" className="mask mask-square" />
          <input type="radio" name="rating-1" className="mask mask-square" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
