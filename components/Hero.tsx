function Hero() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-base-200 pt-16 md:pt-28">
      <div className="w-10/12 text-[#C0CAF5]">
        <div className="w-full">
          <h1 className="text-6xl md:text-8xl">Hi! I'm</h1>
        </div>

        <div className="flex items-center gap-12 sm:text-center">
          <h1 className="min-w-fit text-6xl font-bold md:text-8xl">Alexis Ngaing</h1>
          <div className="invisible h-[2px] w-full bg-[#C0CAF5] md:visible"></div>
        </div>

        <div className="md:grid md:grid-cols-2 md:grid-rows-2">
          <p className="pb-6 pt-16 text-2xl md:py-24 md:pb-0 md:text-4xl">
            I’m a computer science student. I’m interest in <br />
            Front-end web development, design, photography, and literature.
          </p>
          <div className="relative flex justify-center md:row-span-2 md:!justify-end">
            <img alt="photo" className="z-10 w-7/12 md:w-1/2" src="/images/web.png" />
            <div className="absolute bottom-0 mx-auto h-40 w-96 bg-[#414868] md:h-[200px] md:w-[430px] lg:visible"></div>
          </div>
          <div className="py-20 md:py-0">
            <a
              className="flex justify-center md:flex-none md:justify-normal"
              href="mailto:alexisngaing@gmail.com"
              target="blank_"
            >
              <button className="btn-primary btn h-16 w-44 rounded-sm border-[#414868] bg-[#414868] text-lg text-[#C0CAF5] hover:border-[#4b516b] hover:bg-[#4b516b]">
                Contact me
              </button>
            </a>
            <p className="py-6 text-center text-2xl font-bold md:text-start">Find me</p>
            <div className="flex justify-center gap-8 md:justify-normal">
              <div className="w-14 flex-initial">
                <a
                  href="https://www.linkedin.com/in/alexis-divasonda-s-n-92231a222/"
                  target="blank_"
                >
                  <img
                    alt="linkedin"
                    className="rounded-full hover:bg-[#4b516b]"
                    src="/images/linkedin.svg"
                  />
                </a>
              </div>
              <div className="w-14 flex-initial">
                <a href="https://twitter.com/alexis_ngaing" target="blank_">
                  <img
                    alt="twitter"
                    className="rounded-full hover:bg-[#4b516b]"
                    src="/images/twitter.svg"
                  />
                </a>
              </div>
              <div className="w-14 flex-initial">
                <a href="https://www.instagram.com/alexisngaing/" target="blank_">
                  <img
                    alt="instagram"
                    className="rounded-full hover:bg-[#4b516b]"
                    src="/images/instagram.svg"
                  />
                </a>
              </div>
              <div className="w-14 flex-initial">
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
        {/* <div className="visible relative row-span-2 flex !justify-center lg:invisible">
          <img alt="photo" className="z-10 w-9/12 lg:w-0" src="/images/web.png" />
          <div className="absolute bottom-0 h-[200px] w-[430px] bg-[#414868]"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
