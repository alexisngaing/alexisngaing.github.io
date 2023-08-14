import React from "react";

function Hero() {
  return (
    <div className="flex w-full flex-col items-center py-10 lg:justify-center lg:py-28">
      <div className="w-10/12 text-[#C0CAF5]">
        <div className="w-full">
          <h1 className="py-4 text-4xl">Hi! I'm</h1>
        </div>
        <div className="flex items-center gap-12 sm:text-center">
          <h1 className="min-w-fit text-5xl font-bold md:text-6xl">Alexis Ngaing</h1>
          <div className="invisible h-[2px] w-full bg-[#C0CAF5] md:visible"></div>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-rows-2">
          <div className="my-auto md:w-auto md:py-12 lg:w-9/12">
            <p className="py-10 text-2xl md:my-auto md:py-0 md:pb-0">
              A computer science student. Interest in Front-end web development, design,
              photography, and literature.
            </p>
          </div>
          <div className="relative flex justify-center md:row-span-2 md:!justify-end">
            <img alt="photo" className="z-10 w-7/12 md:w-60 lg:w-1/2" src="/images/web.png" />
            <div className="absolute bottom-0 mx-auto h-40 w-96 bg-[#414868] md:h-40 md:w-80 lg:visible lg:h-[200px] lg:w-[430px]"></div>
          </div>
          <div className="pt-20 md:py-0">
            <a
              className="flex justify-center md:flex-none md:justify-normal"
              href="mailto:alexisngaing@gmail.com"
              target="blank_"
            >
              <button className="btn-primary h-10 w-36 rounded-sm border-[#414868] bg-[#414868] text-lg text-[#C0CAF5] hover:border-[#4b516b] hover:bg-[#4b516b]">
                Contact me
              </button>
            </a>
            <p className="py-6 text-center text-xl font-bold md:text-start">Find me</p>
            <div className="flex justify-center gap-8 md:justify-normal">
              <div className="w-11 flex-initial">
                <a href="https://www.linkedin.com/in/alexis-divasonda-s-n/" target="blank_">
                  <img
                    alt="linkedin"
                    className="rounded-full hover:bg-[#4b516b]"
                    src="/images/linkedin.svg"
                  />
                </a>
              </div>
              <div className="w-11 flex-initial">
                <a href="https://twitter.com/alexis_ngaing" target="blank_">
                  <img
                    alt="twitter"
                    className="rounded-full hover:bg-[#4b516b]"
                    src="/images/twitter.svg"
                  />
                </a>
              </div>
              <div className="w-11 flex-initial">
                <a href="https://www.instagram.com/alexisngaing/" target="blank_">
                  <img
                    alt="instagram"
                    className="rounded-full hover:bg-[#4b516b]"
                    src="/images/instagram.svg"
                  />
                </a>
              </div>
              <div className="w-11 flex-initial">
                <a href="https://github.com/alexisngaing" target="blank_">
                  <img
                    alt="github"
                    className="rounded-full hover:bg-[#4b516b]"
                    src="/images/github.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
