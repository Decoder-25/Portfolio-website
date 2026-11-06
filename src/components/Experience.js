import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";
import { experience } from "@/data/about";

// One job card on the timeline
const Job = ({ job, index }) => {
  return (
    <FadeIn delay={index * 0.05} className="relative pl-8 md:pl-12">
      {/* dot on the timeline line */}
      <span className="absolute left-[-7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-primary ring-4 ring-primary/15" />

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
        <div className="flex flex-col justify-between gap-1 md:flex-row md:items-start">
          <div>
            <h3 className="text-lg font-bold text-zinc-900 md:text-xl">{job.role}</h3>
            {job.link ? (
              <a
                href={job.link}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                {job.company}
              </a>
            ) : (
              <span className="font-semibold text-primary">{job.company}</span>
            )}
          </div>
          <div className="text-sm text-zinc-500 md:text-right">
            <p className="font-medium text-zinc-700">{job.date}</p>
            <p>{job.location}</p>
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-zinc-600">
          {job.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              {point}
            </li>
          ))}
        </ul>

        {job.tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {job.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  );
};

const Experience = () => {
  return (
    <section className="py-20">
      <SectionTitle label="Experience" title="Where I've worked" />

      {/* the vertical line runs down the left; each Job sits on it */}
      <div className="ml-2 space-y-8 border-l-2 border-zinc-200">
        {experience.map((job, index) => (
          <Job key={job.company + job.role} job={job} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
