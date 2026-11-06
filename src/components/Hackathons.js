import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";
import { hackathons } from "@/data/about";

const Hackathons = () => {
  return (
    <section className="py-20">
      <SectionTitle label="Hackathons" title="Building under pressure" />

      <div className="grid gap-6 md:grid-cols-2">
        {hackathons.map((h, index) => (
          <FadeIn key={h.name} delay={index * 0.1}>
            <a
              href={h.link}
              target="_blank"
              rel="noreferrer"
              className="group block h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
                  {h.date}
                </span>
                <span className="text-zinc-400 transition group-hover:translate-x-1 group-hover:text-primary">
                  →
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-zinc-900">{h.name}</h3>
              <p className="text-sm font-semibold text-primary">{h.role}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">{h.summary}</p>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
