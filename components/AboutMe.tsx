import React from "react";

function AboutMe() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-10 lg:py-28">
      <div className="w-10/12">
        <div className="flex items-center gap-12">
          <div className="h-[2px] w-full bg-[#C0CAF5]"></div>
          <h1 className="min-w-fit text-4xl font-bold text-[#C0CAF5] md:text-5xl">About me</h1>
        </div>
        <div className="px-2 pt-12 text-justify text-lg md:gap-12 md:px-10 md:text-start md:text-xl">
          <div>
            <p>
              My name is Alexis Divasonda Sigat Ngaing, a programmer enthusiast. Here’s a glimpse of
              me.
            </p>
            <br />
            <p>
              I was born and raised in East Borneo, Indonesia. I developed a keen interest in
              coding, design, photography, and writing, which has shaped my perspective on live and
              influenced my personal and professional endeavors.
            </p>
            <br />
            <p>
              I studied Computer Science at Universitas Atma Jaya Yogyakarta. At my university, I
              served as the chairman of the Linux Study Group for the 2022/2023 period. I also
              joined the board of the Computer Science Student Association (HIMAFORKA) as a member
              of the Academic and Achievement (APRES) committee. I am also an Assistant Lecturer for
              the course of Database from August 2023 to January 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
