import React from "react";

function Awards() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-10 lg:py-28">
      <div className="w-10/12 text-[#C0CAF5]">
        <div className="flex items-center gap-12">
          <div className="h-[2px] w-full bg-[#C0CAF5]"></div>
          <h1 className="min-w-fit text-4xl font-bold md:text-5xl">Awards</h1>
        </div>
        <div className="pt-12 lg:flex lg:gap-6">
          <div className="card mx-auto w-80 content-center rounded-sm bg-[#1d232a] shadow-xl md:mx-0 md:w-96">
            <figure className="md:px-5 md:pt-5">
              <a
                href="https://sites.google.com/dexa-medica.com/digihatch/pengumuman-pemenang"
                target="blank_"
              >
                <img
                  alt="digihatch"
                  className="max-w-xs rounded-sm transition duration-300 ease-in-out hover:scale-110"
                  src="/images/digihatch.png"
                />
              </a>
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                Top 10 Finalist Dexa Group Hackathon for Talent Catch
              </h2>
              <p className="font-semibold">Team Theta</p>
              <div className="flex gap-2">
                <div className="rounded-xl bg-[#42465e] p-1.5 hover:bg-slate-500">
                  <a
                    href="https://drive.google.com/file/d/1GvFnzvhW3nJCbU1fqsyxb4Mc8X_OgBfq/view?usp=sharing"
                    target="_blank"
                  >
                    <p className="text-center italic text-white">Proposal</p>
                  </a>
                </div>
                <div className="rounded-xl bg-[#42465e] p-1.5 hover:bg-slate-500">
                  <a
                    href="https://github.com/stefanusvemas/theta-pharmacy-distribution-management"
                    target="_blank"
                  >
                    <p className="text-center italic text-white">Web</p>
                  </a>
                </div>
                <div className="rounded-xl bg-[#42465e] p-1.5 hover:bg-slate-500">
                  <a href="https://github.com/tiopramudyaa/theta.git" target="_blank">
                    <p className="text-center italic text-white">Mobile</p>
                  </a>
                </div>
                <div className="rounded-xl bg-[#42465e] p-1.5 hover:bg-slate-500">
                  <a
                    href="https://drive.google.com/file/d/11mOw1rnx-WUN425SB5D4O9P6-aXm9hBe/view?usp=sharing"
                    target="_blank"
                  >
                    <p className="text-center italic text-white">Team</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
