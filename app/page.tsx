import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Languages from "@/components/sections/Languages";
import Membership from "@/components/sections/Membership";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import { jsonLdAttorney } from "@/lib/jsonld";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAttorney) }}
      />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Languages />
      <Membership />
      <FAQ />
      <Contact />
    </>
  );
}
