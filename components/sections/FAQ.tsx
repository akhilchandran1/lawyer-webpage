import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { site } from "@/lib/constants";
import Section from "@/components/ui/Section";

export default function FAQ() {
  return (
    <Section id="faq">
      <SectionHeading
        title="FAQ"
        subtitle="Answers to common questions about working together."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {site.faq.map((item) => (
          <Card key={item.q}>
            <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.a}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
