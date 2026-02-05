import { site } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="pt-20 md:pt-24">
      {/* Layout: hero split with strong headline and a structured summary block for visual hierarchy. */}
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Legal Consultant
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Indian qualified lawyer (B.A., LL.B.) based in {site.location}.
          </p>
          <p className="mt-6 max-w-xl text-base text-slate-600">
            {site.summary.slice(0, 2).join(" ")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href={`tel:${site.phoneTel}`} variant="primary">
              Call
            </Button>
            <Button as="a" href={`mailto:${site.email}`} variant="secondary">
              Email
            </Button>
            <Button as="a" href="#contact" variant="outline">
              Book a consultation
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          {site.summary.slice(2).map((item) => (
            <Card key={item} className="border-l-4 border-amber-400">
              <p className="text-sm text-slate-700">{item}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
