import { site } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold">{site.name}</p>
            <p className="text-sm text-slate-200">{site.location}</p>
          </div>
          <div className="text-sm text-slate-200">
            <p>
              <a
                href={`tel:${site.phoneTel}`}
                className="hover:text-white"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-white"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-300">
          Information on this site is for general purposes and does not
          constitute legal advice.
        </p>
        <p className="mt-3 text-xs text-slate-400">
          Created by{" "}
          <a
            href="https://akhilchandran.com"
            className="font-semibold text-slate-200 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Akhil Chandran
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
