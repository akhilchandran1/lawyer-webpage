import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { site } from "@/lib/constants";
import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section id="about" tone="muted">
      {/* Layout: two-column bio with a grid of value cards to avoid bullet-heavy presentation. */}
      <SectionHeading
        title="About"
        subtitle="A focused, analytical approach to legal work."
      />
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <Card className="h-full">
          <p className="text-base text-slate-700">
            {site.name} is an Indian qualified lawyer with a B.A. and LL.B. from
            Indian universities. Based in {site.location}, she provides legal
            consultation grounded in thorough research, careful drafting, and
            trial preparation.
          </p>
        </Card>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Why work with me
          </h3>
          <div className="mt-5 grid gap-4">
            {site.whyWorkWithMe.map((item) => (
              <Card key={item} className="border-l-4 border-slate-900/10">
                <p className="text-sm text-slate-700">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
