import Hero from "@/components/sections/Hero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import BusinessSectors from "@/components/sections/BusinessSectors";
import Statistics from "@/components/sections/Statistics";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SustainabilityPreview from "@/components/sections/SustainabilityPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import Partners from "@/components/sections/Partners";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <BusinessSectors />
      <Statistics />
      <WhyChooseUs />
      <SustainabilityPreview />
      <ProjectsPreview />
      <Partners />
      <ContactCTA />
    </>
  );
}
