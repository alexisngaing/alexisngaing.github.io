function Hero() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-base-200 pt-28">
      <div className="w-10/12 text-[#C0CAF5]">
        <div className="w-full">
          <h1 className="text-7xl">Hi! I'm</h1>
        </div>

        <div className="flex items-center gap-12">
          <h1 className="min-w-fit text-7xl font-bold">Alexis Ngaing</h1>
          <div className="h-[2px] w-full bg-[#C0CAF5]"></div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2">
          <p className="py-20 text-3xl">
            I’m a computer science student. I’m interest in <br />
            Front-end web development, design, photography, <br />
            and writing story.
          </p>
          <div className="relative row-span-2 flex !justify-end">
            <img alt="photo" className="z-10 w-1/2" src="/images/web.png" />
            <div className="absolute bottom-0 h-[200px] w-[430px] bg-[#414868]"></div>
          </div>
          <div>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
              target="blank_"
            >
              <button className="btn-primary btn rounded-sm border-[#414868] bg-[#414868] text-[#C0CAF5] hover:border-[#4b516b] hover:bg-[#4b516b]">
                Contact me
              </button>
            </a>
            <p className="py-6 text-[24px] font-bold">Find me</p>
            <div className="flex gap-8">
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
      </div>
    </div>
  );
}

export default Hero;
