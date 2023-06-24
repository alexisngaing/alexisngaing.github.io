import React from "react";

function AboutMe() {
  return (
    <div className="hero !justify-end min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <div className="flex justify-center items-center gap-12">
            <div className="w-[500px] h-[1px] bg-white"></div>
            <h1 className="text-[64px]">About me</h1>
          </div>
          <p>
            My name is Alexis Divasonda Sigat Ngaing, a programmer enthusiast.
            Here’s a glimpse of me.
          </p>
          <br />
          <p>
            I was born and raised in East Borneo, Indonesia. I developed a keen
            interest in coding, design, photography, and writing, which has
            shaped my perspective on live and influenced my personal and
            professional endeavors.
          </p>
          <br />
          <p>I studied Computer Science at Universitas Atma Jaya Yogyakarta.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;