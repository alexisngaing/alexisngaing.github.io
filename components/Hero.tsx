function Hero() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-base-200 py-28">
      <div className="w-10/12">
        <div className="w-full">
          <h1 className="text-8xl">Hi! I'm</h1>
        </div>

        <div className="flex items-center gap-12">
          <h1 className="min-w-fit text-8xl font-bold">Alexis Ngaing</h1>
          <div className="h-[2px] w-full bg-white"></div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2">
          <p className="pt-16 text-3xl">
            I’m a computer science student. I’m interest in <br />
            Front-end web development, design, photography, <br />
            and writing story.
          </p>
          <div className="relative row-span-2 flex !justify-end">
            <img alt="photo" className="z-10 max-w-[350px]" src="/images/web.png" />
            <div className="absolute bottom-0 z-0 h-[200px] w-[430px] bg-[#414868]"></div>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D">
              <button className="btn-primary btn border-[#414868] bg-[#414868] hover:border-[#4b516b] hover:bg-[#4b516b]">
                Contact me
              </button>
            </a>
            <p className="py-4 text-[24px] font-bold">Find me</p>
            <div className="flex gap-8">
              <div className="w-14 flex-initial">
                <a href="https://www.linkedin.com/in/alexis-divasonda-s-n-92231a222/">
                  <img alt="linkedin" className="hover:bg-[#4b516b]" src="/images/linkedin.svg" />
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
