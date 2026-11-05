import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import Challenges from "../components/projects/Challenges";
import ProjectsCTA from "../components/projects/ProjectsCTA";

export default function Projects() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <Challenges />

      {/* White gap between Challenges and the CTA (change h-16 to adjust) */}
      <div className="h-16 bg-white" />

      <ProjectsCTA />

      {/* Extra white gap above the footer (change h-16 to adjust) */}
      <div className="h-16" />
    </>
  );
}