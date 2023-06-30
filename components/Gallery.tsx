import React from "react";

function Gallery() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-base-200">
      <div className="w-10/12">
        <div className="flex items-center gap-12">
          <div className="h-[2px] w-full bg-white"></div>
          <h1 className="min-w-fit text-6xl font-bold">My works</h1>
        </div>

        <div className="tabs tabs-boxed gap-6 py-6">
          <a className="tab tab-active">Web dev</a>
          <a className="tab">Design</a>
          <a className="tab">Photo</a>
        </div>

        <div className="grid grid-cols-3 items-center justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img alt="Shoes" className="rounded-sm" src="/images/cardtest.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web KSL-UAJY</h2>
              <p>Main page</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img alt="Shoes" className="rounded-sm" src="/images/cardtest.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web KSL-UAJY</h2>
              <p>Main page</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img alt="Shoes" className="rounded-sm" src="/images/cardtest.jpg" />
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
