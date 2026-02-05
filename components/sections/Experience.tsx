import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { site } from "@/lib/constants";
import Section from "@/components/ui/Section";

export default function Experience() {
  return (
    <Section id="experience" tone="muted">
      {/* Layout: timeline with a vertical guide for clearer chronology without bullet lists. */}
      <SectionHeading
        title="Experience"
        subtitle="A track record of independent practice and structured legal work."
      />
      <div className="relative space-y-6 border-l border-slate-200 pl-6">
        {site.experience.map((item) => (
          <div key={item.title} className="relative">
            <span className="absolute -left-[9px] top-4 h-4 w-4 rounded-full border-2 border-amber-400 bg-white" />
            <Card>
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.location}</p>
                </div>
                <p className="text-sm font-semibold text-slate-500">
                  {item.dates}
                </p>
              </div>
              <p className="mt-4 text-sm text-slate-700">
                {item.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
