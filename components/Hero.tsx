function Hero() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-base-200 py-36">
      <div className="w-10/12">
        <div className="w-full">
          <h1 className="text-[64px]">Hi! I'm</h1>
        </div>

        <div className="flex items-center gap-12">
          <h1 className="min-w-fit text-8xl font-bold">Alexis Ngaing</h1>
          <div className="h-1 w-full bg-white"></div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2">
          <p className="text-[20px]">
            I’m a computer science student. I’m interest in <br />
            Front-end web development, design, photography, <br />
            and writing story.
          </p>
          <div className="relative row-span-2 flex items-start">
            <img alt="MY HANDSOME FACE" className="z-10 max-w-[350px] pr-8" src="/images/web.png" />
            <div className="absolute z-0 h-64 w-64 bg-white"></div>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D">
              <button className="btn-primary btn">Contact me</button>
            </a>
            <p className=" py-4 text-[24px] font-bold">Find me</p>
            <div className="flex gap-8">
              <div className="w-14 flex-initial ">
                <a href="https://www.linkedin.com/in/alexis-divasonda-s-n-92231a222/">
                  <img alt="linkedin" src="/images/linkedin.svg" />
                </a>
              </div>
              <div className="w-14 flex-initial">
                <a href="https://twitter.com/alexis_ngaing">
                  <img alt="twitter" src="/images/twitter.svg" />
                </a>
              </div>
              <div className="w-14 flex-initial">
                <a href="https://www.instagram.com/alexisngaing/">
                  <img alt="instagram" src="/images/instagram.svg" />
                </a>
              </div>
              <div className="w-14 flex-initial">
                <a href="https://github.com/alexisngaing">
                  <img alt="github" src="/images/github.svg" />
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
