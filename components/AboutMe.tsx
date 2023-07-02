import React from "react";

function AboutMe() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-base-200">
      <div className="w-10/12 text-[#C0CAF5]">
        <div className="flex items-center gap-12">
          <div className="h-[2px] w-full bg-[#C0CAF5]"></div>
          <h1 className="min-w-fit text-6xl font-bold">About me</h1>
        </div>
        <div className="grid grid-cols-2 gap-12 p-10 text-2xl">
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
              of the Academic and Achievement (APRES) committee.
            </p>
          </div>
          <div>
            <p>
              Some of the subjects I studied in my courses include Basic Programming, which uses the
              C language, Data Structures (C), Databases (SQL), Object-Oriented Programming (Java),
              and Machine Learning & Deep Learning (Python).
            </p>
            <br />
            <p>
              My skills include: beginner in <span className="font-bold">C</span>,{" "}
              <span className="font-bold">Java</span>, <span className="font-bold">Python</span>,
              <span className="font-bold">SQL</span>, and <span className="font-bold">Linux</span>.
              I am also a beginner in <span className="font-bold">HTML</span>,{" "}
              <span className="font-bold">CSS</span>, <span className="font-bold">JavaScript</span>,
              and <span className="font-bold">TypeScript</span>, which I have learned self-taught.
            </p>
            <br />
            <p>
              Intermediate at Photography and Design (specially{" "}
              <span className="font-bold">Photoshop</span> and{" "}
              <span className="font-bold">Figma</span>).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
