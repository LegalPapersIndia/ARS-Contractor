import ContactHero from "../components/contact/ContactHero";
import ContactMain from "../components/contact/ContactMain";
import ContactMap from "../components/contact/ContactMap";
import NextSteps from "../components/contact/NextSteps";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactMain />
      <ContactMap />
      <NextSteps />

      {/* Extra white gap above the footer (change h-16 to adjust) */}
      <div className="h-16" />
    </>
  );
}