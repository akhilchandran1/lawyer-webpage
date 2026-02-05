import clsx from "clsx";
import { ReactNode } from "react";

type Tone = "base" | "muted";

export default function Section({
  id,
  tone = "base",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "py-16 md:py-20",
        tone === "muted" ? "bg-slate-50" : "bg-white",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}
