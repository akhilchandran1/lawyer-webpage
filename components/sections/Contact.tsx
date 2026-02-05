import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { site } from "@/lib/constants";
import Section from "@/components/ui/Section";

export default function Contact() {
  return (
    <Section id="contact" tone="muted">
      {/* Layout: split contact cards with elevated form styling for trust and clarity. */}
      <SectionHeading
        title="Contact"
        subtitle="Reach out for a consultation or to discuss your needs."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="bg-white">
          <h3 className="text-lg font-semibold text-slate-900">Direct contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>
              Phone:{" "}
              <a
                href={`tel:${site.phoneTel}`}
                className="font-medium text-slate-900 hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-slate-900 hover:underline"
              >
                {site.email}
              </a>
            </p>
            <p>Location: {site.location}</p>
          </div>
        </Card>
        <Card className="bg-white">
          <h3 className="text-lg font-semibold text-slate-900">Send a message</h3>
          <p className="mt-2 text-sm text-slate-500">
            I will respond as soon as possible.
          </p>
          <form
            className="mt-6 grid gap-4"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-2">
              <label htmlFor="name" className="text-xs font-semibold text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <Button as="button" type="submit" variant="primary">
              Send message
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
