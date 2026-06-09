import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Insights } from "@/components/sections/Insights";
import { Brands } from "@/components/sections/Brands";
import { Services } from "@/components/sections/Services";
import { GlossProject } from "@/components/sections/GlossProject";
import { PartnershipCTA } from "@/components/sections/PartnershipCTA";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Insights />
      <Brands />
      <Services />
      <GlossProject />
      <PartnershipCTA />
      <ContactForm />
    </>
  );
}
