import React from "react";

function AboutMe() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-base-200">
      <div className="w-10/12">
        <div>
          <div className="flex items-center gap-12">
            <div className="h-[2px] w-full bg-white"></div>
            <h1 className="min-w-fit text-6xl">About me</h1>
          </div>
          <div className="grid grid-cols-2 gap-12 p-10 text-2xl">
            <div>
              <p>
                My name is Alexis Divasonda Sigat Ngaing, a programmer enthusiast. Here’s a glimpse
                of me.
              </p>
              <br />
              <p>
                I was born and raised in East Borneo, Indonesia. I developed a keen interest in
                coding, design, photography, and writing, which has shaped my perspective on live
                and influenced my personal and professional endeavors.
              </p>
              <br />
              <p>I studied Computer Science at Universitas Atma Jaya Yogyakarta.</p>
            </div>
            <div>
              <p>
                My name is Alexis Divasonda Sigat Ngaing, a programmer enthusiast. Here’s a glimpse
                of me.
              </p>
              <br />
              <p>
                I was born and raised in East Borneo, Indonesia. I developed a keen interest in
                coding, design, photography, and writing, which has shaped my perspective on live
                and influenced my personal and professional endeavors.
              </p>
              <br />
              <p>I studied Computer Science at Universitas Atma Jaya Yogyakarta.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
