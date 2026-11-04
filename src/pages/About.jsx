import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import Industries from "../components/about/Industries";
import Commitments from "../components/about/Commitments";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Industries />
      <Commitments />
      <AboutCTA />
    </>
  );
}