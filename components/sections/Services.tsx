import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { site } from "@/lib/constants";
import Section from "@/components/ui/Section";

export default function Services() {
  return (
    <Section id="services">
      {/* Layout: service grid with consistent cards for a professional catalogue feel. */}
      <SectionHeading
        title="Services"
        subtitle="Clear, practical support tailored to your legal needs."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {site.services.map((service) => (
          <Card key={service} className="text-center">
            <p className="text-base font-semibold text-slate-900">{service}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
