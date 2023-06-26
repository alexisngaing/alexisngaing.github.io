import React from "react";

function Gallery() {
  return (
    <div className="flex w-full min-h-screen bg-base-200">
      <div className="flex-col lg:flex-row">
        <div>
          <div className="flex items-center">
            <h1 className="text-5xl font-bold">My Works</h1>
          </div>
          <div className="tabs tabs-boxed gap-6 py-6">
          <a className="tab tab-active">Web dev</a>
          <a className="tab">Design</a>
          <a className="tab">Photo</a>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src="/images/cardtest.jpg"
              alt="Shoes"
              className="rounded-sm"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Web KSL-UAJY</h2>
            <p>Main page</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
