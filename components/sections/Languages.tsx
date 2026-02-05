import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { site } from "@/lib/constants";
import Section from "@/components/ui/Section";

export default function Languages() {
  return (
    <Section id="languages">
      <SectionHeading
        title="Languages"
        subtitle="Clear communication in the languages you prefer."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {site.languages.map((lang) => (
          <Card key={lang.language}>
            <p className="text-base font-semibold text-slate-900">
              {lang.language}
            </p>
            <p className="text-sm text-slate-600">{lang.level}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
