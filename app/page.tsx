import AboutMe from "@/components/AboutMe";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

// import Skills from "@/components/Skills";

// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      {/* <Skills /> */}
      <Gallery />
    </>
  );
}
