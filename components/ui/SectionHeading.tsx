export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 md:mb-12">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-base text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
