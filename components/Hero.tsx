import React from "react";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-[64px]">Hi! I'm</h1>
          <div className="flex items-center gap-12">
            <h1 className="text-[64px] font-bold">Alexis Ngaing</h1>
            {/* <div className="w-96 h-[1px] bg-white"></div> */}
          </div>
          <p className="py-12 text-[20px]">
            I’m a computer science student. I’m interest in <br />
            Front-end web development, design, photography, <br />
            and writing story.
          </p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D">
          <button className="btn btn-primary">Contact me</button>
          </a>
          <p className="py-12 text-[24px] font-bold">Find me</p>
          <div className="flex gap-8">
            <div className="flex-initial w-14 ">
              <a href="https://www.linkedin.com/in/alexis-divasonda-s-n-92231a222/">
                <img src="/images/linkedin.svg" />
              </a>
            </div>
            <div className="flex-initial w-14">
              <a href="https://twitter.com/alexis_ngaing">
                <img src="/images/twitter.svg" />
              </a>
            </div>
            <div className="flex-initial w-14">
              <a href="https://www.instagram.com/alexisngaing/">
                <img src="/images/instagram.svg" />
              </a>
            </div>
            <div className="flex-initial w-14">
              <a href="https://github.com/alexisngaing">
                <img src="/images/github.svg" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/web.png" className="max-w-[350px]" />
          <span className="absolute bottom-0 -z-10">
            <svg width="500" height="500">
              <rect x="0" y="201" width="400" height="200" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
