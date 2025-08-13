"use client";

import React, { useEffect, useRef, useState } from "react";

function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`flex w-full flex-col items-center justify-center py-10 transition-opacity duration-1000 ease-in-out lg:py-28 ${
        isVisible ? "animate-slideUp opacity-100" : "opacity-0"
      }`}
      ref={galleryRef}
    >
      <div className="w-10/12 text-[#C0CAF5]">
        <div className="flex items-center gap-12">
          <h1 className="min-w-fit text-4xl font-bold md:text-5xl">My works</h1>
          <div className="h-[2px] w-full bg-[#C0CAF5]"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-12 lg:grid-cols-3">
          <div className="card mx-auto mb-10 w-80 content-center rounded-sm bg-[#1d232a] shadow-xl md:mx-0 md:mb-10 md:w-96">
            <a href="https://ksl.himaforka-uajy.org" target="blank_">
              <figure className="md:px-5 md:pt-5">
                <img
                  alt="ksl"
                  className="max-w-xs rounded-sm transition duration-300 ease-in-out hover:scale-110"
                  src="/images/ksl-uajy-v4.png"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Web KSL UAJY v4</h2>
                <p className="font-semibold">Front-end - Team</p>
                <p className="italic">React, Tailwind, Next.js, Typescript, Firebase</p>
              </div>
            </a>
          </div>
          <div className="card mx-auto mb-10 w-80 content-center rounded-sm bg-[#1d232a] shadow-xl md:mx-0 md:mb-10 md:w-96">
            <a href="https://github.com/alexisngaing/ugd-d-4-hospital" target="blank_">
              <figure className="md:px-5 md:pt-5">
                <img
                  alt="hospital"
                  className="max-w-xs rounded-sm transition duration-300 ease-in-out hover:scale-110"
                  src="/images/hospital.png"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Hospital App University Project</h2>
                <p className="font-semibold">Fullstack - Team</p>
                <p className="italic">Flutter, Dart, Laravel, PHP</p>
              </div>
            </a>
          </div>
          <div className="card mx-auto mb-10 w-80 content-center rounded-sm bg-[#1d232a] shadow-xl md:mx-0 md:mb-10 md:w-96">
            <a href="https://github.com/alexisngaing/TubesPW_B_7" target="blank_">
              <figure className="md:px-5 md:pt-5">
                <img
                  alt="sihs"
                  className="max-w-xs rounded-sm transition duration-300 ease-in-out hover:scale-110"
                  src="/images/sihs.png"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Semesta Int. High School - Uni. Project</h2>
                <p className="font-semibold">Fullstack - Team</p>
                <p className="italic">PHP, Laravel, Blade, HTML, CSS, Javascript</p>
              </div>
            </a>
          </div>
          <div className="card mx-auto mb-10 w-80 content-center rounded-sm bg-[#1d232a] shadow-xl md:mx-0 md:mb-10 md:w-96">
            <a href="https://github.com/alexisngaing/apb_backend" target="blank_">
              <figure className="md:px-5 md:pt-5">
                <img
                  alt="sihs"
                  className="max-w-xs rounded-sm transition duration-300 ease-in-out hover:scale-110"
                  src="/images/logo-muaraenim.png"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Agenda Bupati Kab. Muara Enim</h2>
                <p className="font-semibold">Fullstack</p>
                <p className="italic">
                  PHP, Laravel, Blade, HTML, CSS, Javascript, Tailwind, Flowbite
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
