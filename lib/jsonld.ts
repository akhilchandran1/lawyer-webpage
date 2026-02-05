import { site } from "@/lib/constants";

export const jsonLdAttorney = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  email: site.email,
  telephone: site.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "UAE",
  },
  areaServed: "Dubai, UAE",
};
