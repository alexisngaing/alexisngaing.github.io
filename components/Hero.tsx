import React from "react";

function Hero() {
  return (
    <div className="hero !justify-start min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-[64px]">Hi! I'm</h1>
          <div className="flex justify-center items-center gap-12">
          <h1 className="py-0 text-[64px] font-bold">Alexis Ngaing</h1>
          <div className="w-[200px] h-[1px] bg-white"></div>
          </div>
          <p className="py-12 text-[24px]">
            I’m a computer science student. I’m interest in <br />Front-end web
            development, design, photography, <br />and writing story.
          </p>
          <button className="btn btn-primary">Contact me</button>
          <p className="py-12 text-[24px] font-bold">Find me</p>
          <div className="flex gap-8">
            <div className="flex-initial w-14 ">
              <img src="/images/linkedin.svg" />
            </div>
            <div className="flex-initial w-14">
              <img src="/images/twitter.svg" />
            </div>
            <div className="flex-initial w-14">
              <img src="/images/instagram.svg" />
            </div>
            <div className="flex-initial w-14">
              <img src="/images/github.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/images/web.png" className="max-w-sm rounded-lg pt-[270px] pl-[1000px]" />
        </div>
    </div>
  );
}

export default Hero;
