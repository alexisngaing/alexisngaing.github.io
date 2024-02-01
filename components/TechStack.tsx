import React from "react";

function TechStack() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-10 lg:py-28">
      <div className="w-10/12">
        <div className="flex items-center gap-12">
          <h1 className="min-w-fit text-4xl font-bold text-[#C0CAF5] md:text-5xl">Tech Stack</h1>
          <div className="h-[2px] w-full bg-[#C0CAF5]"></div>
        </div>
        <div className="px-2 pt-6 text-lg md:grid md:grid-cols-2 md:gap-12 md:px-10">
          <div>
            <h4 className="text-center text-xl font-semibold text-white md:text-start md:text-2xl">
              Coding
            </h4>
            <div className="flex flex-wrap items-center justify-center pb-6 md:items-start md:justify-normal">
              <img alt="html" className="w-16 md:w-20" src="/images/techstack/icons8-html.svg" />
              <img alt="css" className="w-16 md:w-20" src="/images/techstack/icons8-css.svg" />
              <img
                alt="javascript"
                className="w-16 md:w-20"
                src="/images/techstack/icons8-javascript.svg"
              />
              <img
                alt="typescript"
                className="w-16 md:w-20"
                src="/images/techstack/icons8-typescript.svg"
              />
              <img
                alt="bootstrap"
                className="w-16 md:w-20"
                src="/images/techstack/icons8-bootstrap.svg"
              />
              <img
                alt="tailwind"
                className="w-16 md:w-20"
                src="/images/techstack/icons8-tailwind-css.svg"
              />
              <img alt="react" className="w-16 md:w-20" src="/images/techstack/icons8-react.svg" />
              <div className="flex h-16 w-16 items-center rounded-full bg-white text-center md:h-20 md:w-20">
                <img alt="nextjs" className="mx-auto w-14" src="/images/techstack/nextjs.svg" />
              </div>
              <img
                alt="laravel"
                className="w-16 md:w-20"
                src="/images/techstack/icons8-laravel-96.png"
              />
              <img alt="vuejs" className="w-16 md:w-20" src="/images/techstack/icons8-vue-js.svg" />
              <img
                alt="flutter"
                className="w-16 md:w-20"
                src="/images/techstack/icons8-flutter.svg"
              />
              <img alt="dart" className="w-16 md:w-20" src="/images/techstack/icons8-dart.svg" />
              <img alt="git" className="w-16 md:w-20" src="/images/techstack/icons8-git.svg" />
              <div className="flex h-16 w-16 items-center rounded-full bg-white text-center md:h-20 md:w-20">
                <img
                  alt="github"
                  className="mx-auto w-16 md:w-20"
                  src="/images/techstack/icons8-github.svg"
                />
              </div>
              <img alt="c" className="w-16 md:w-20" src="/images/techstack/icons8-c.svg" />
              <img alt="php" className="w-16 md:w-20" src="/images/techstack/icons8-php.svg" />
              <img alt="java" className="w-16 md:w-20" src="/images/techstack/icons8-java.svg" />
              <img alt="mysql" className="w-16 md:w-20" src="/images/techstack/icons8-mysql.svg" />
              <img
                alt="mongodb"
                className="w-16 md:w-20"
                src="/images/techstack/icons8-mongodb.svg"
              />
              <img
                alt="ubuntu"
                className="w-16 md:w-20"
                src="/images/techstack/icons8-ubuntu-96.png"
              />
              {/* <div className="flex items-center">
                <p className="italic">p.s. all beginner :v</p>
              </div> */}
            </div>
          </div>
          <div>
            <h4 className="text-center text-xl font-semibold text-white md:text-start md:text-2xl">
              Design
            </h4>
            <div className="flex flex-wrap items-center justify-center md:items-start md:justify-normal">
              <img
                alt="photoshop"
                className="w-16 md:w-20"
                src="/images/techstack/icons8-photoshop.svg"
              />
              <img
                alt="lightroom"
                className="w-16 md:w-20"
                src="/images/techstack/icons8-adobe-lightroom.svg"
              />
              <img alt="figma" className="w-14" src="/images/techstack/icons8-figma.svg" />
              {/* <img alt="valorant" className="w-16 md:w-20" src="/images/techstack/icons8-valorant.svg" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
