import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";
import ServicesList from "../components/services/ServicesList";
import Equipment from "../components/services/Equipment";
import ChooseMethod from "../components/services/ChooseMethod";
import ServicesFAQ from "../components/services/ServicesFAQ";
import ServicesCTA from "../components/services/ServicesCTA";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <ServicesList />
      <Equipment />
      <ChooseMethod />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}