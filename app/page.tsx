import AboutMe from "@/components/AboutMe";
import Awards from "@/components/Awards";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="bg-[#191e24]">
      <Hero />
      <AboutMe />
      <Gallery />
      <Awards />
      <TechStack />
    </div>
  );
}
