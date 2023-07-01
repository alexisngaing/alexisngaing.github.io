import React from "react";

function Gallery() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-base-200">
      <div className="w-10/12 text-[#C0CAF5]">
        <div className="flex items-center gap-12">
          <h1 className="min-w-fit text-6xl font-bold">My works</h1>
          <div className="h-[2px] w-full bg-[#C0CAF5]"></div>
        </div>

        <div className="tabs tabs-boxed gap-6 py-6 text-[#C0CAF5]">
          <a className="tab bg-[#414868] text-opacity-100 hover:bg-[#4b516b]">Web dev</a>
          <a className="tab bg-[#414868] text-opacity-100 hover:bg-[#4b516b]">Design</a>
          <a className="tab bg-[#414868] text-opacity-100 hover:bg-[#4b516b]">Photo</a>
        </div>

        <div className="grid grid-cols-4 items-center justify-center px-4">
          <div className="card w-96 rounded-sm bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img alt="Shoes" className="rounded-sm" src="/images/cardtest.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web KSL-UAJY</h2>
              <p>Main page</p>
            </div>
          </div>
          <div className="card w-96 rounded-sm bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img alt="Shoes" className="rounded-sm" src="/images/cardtest.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web KSL-UAJY</h2>
              <p>Main page</p>
            </div>
          </div>
          <div className="card w-96 rounded-sm bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img alt="Shoes" className="rounded-sm" src="/images/cardtest.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web KSL-UAJY</h2>
              <p>Main page</p>
            </div>
          </div>
          <div className="card w-96 rounded-sm bg-base-100 shadow-xl">
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
