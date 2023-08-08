import React from "react";

function AboutMe() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center pb-12 md:pb-0">
      <div className="w-10/12 text-[#C0CAF5]">
        <div className="flex items-center gap-12">
          <div className="h-[2px] w-full bg-[#C0CAF5]"></div>
          <h1 className="min-w-fit text-4xl font-bold md:text-6xl">About me</h1>
        </div>
        <div className="px-2 py-6 text-center text-lg md:grid md:grid-cols-2 md:gap-12 md:p-10 md:text-start md:text-xl">
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
              My skills include: <br /> Beginner in <span className="font-bold">C</span>,{" "}
              <span className="font-bold">Java</span>, <span className="font-bold">Python</span>,{" "}
              <span className="font-bold">SQL</span>,<span className="font-bold"> HTML</span>,{" "}
              <span className="font-bold">CSS</span>, <span className="font-bold">JavaScript</span>,{" "}
              <span className="font-bold">TypeScript</span>,{" "}
              <span className="font-bold">React</span>, <span className="font-bold">Linux</span>,{" "}
              <span className="font-bold">Git</span>, and <span className="font-bold">GitHub</span>.
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
