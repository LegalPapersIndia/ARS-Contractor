import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import AboutIntro from "../components/home/AboutIntro";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowWeWork from "../components/home/HowWeWork";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ServiceAreas from "../components/home/ServiceAreas";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutIntro />
      <WhyChooseUs />
      <HowWeWork />
      <ProjectsPreview />
      <ServiceAreas />
    </>
  );
}