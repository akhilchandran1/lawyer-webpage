import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { site } from "@/lib/constants";
import Section from "@/components/ui/Section";

export default function Membership() {
  return (
    <Section id="membership" tone="muted">
      <SectionHeading
        title="Membership"
        subtitle="Professional admissions and associations."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {site.membership.map((item) => (
          <Card key={item}>
            <p className="text-base font-semibold text-slate-900">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
