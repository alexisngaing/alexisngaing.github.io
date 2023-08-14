import React from "react";

function Gallery() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-10 lg:py-28">
      <div className="w-10/12 text-[#C0CAF5]">
        <div className="flex items-center gap-12">
          <h1 className="min-w-fit text-4xl font-bold md:text-6xl">My works</h1>
          <div className="h-[2px] w-full bg-[#C0CAF5]"></div>
        </div>
        <div className="pb-40 pt-12 lg:flex lg:gap-6">
          <div className="card mx-auto w-80 content-center rounded-sm bg-[#1d232a] shadow-xl md:mx-0 md:w-96">
            <a
              href="https://github.com/ksl-uajy/ksl.himaforka-uajy.org/tree/v4-dev-alex"
              target="blank_"
            >
              <figure className="md:px-5 md:pt-5">
                <img
                  alt="ksl"
                  className="max-w-xs rounded-sm transition duration-300 ease-in-out hover:scale-110"
                  src="/images/ksl-uajy-v4.png"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Web KSL UAJY v4</h2>
                <p className="font-semibold">Front-end - Team Project</p>
                <p className="italic">React, Tailwind, Next.js, Typescript</p>
              </div>
            </a>
          </div>
          {/* <div className="card w-96 rounded-sm bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img alt="b" className="rounded-sm" src="/images/cardtest.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web KSL-UAJY</h2>
              <p>Main page</p>
            </div>
          </div>
          <div className="card w-96 rounded-sm bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img alt="c" className="rounded-sm" src="/images/cardtest.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web KSL-UAJY</h2>
              <p>Main page</p>
            </div>
          </div> */}
          {/* <div className="card w-96 rounded-sm bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img alt="Shoes" className="rounded-sm" src="/images/cardtest.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web KSL-UAJY</h2>
              <p>Main page</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
