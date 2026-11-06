import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";
import { education } from "@/data/about";

const Education = () => {
  return (
    <section className="py-20">
      <SectionTitle label="Education" title="Education & certifications" />

      <div className="space-y-4">
        {education.map((item, index) => (
          <FadeIn
            key={item.title}
            delay={index * 0.08}
            className="flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
              <p className="font-medium text-zinc-700">{item.place}</p>
              <p className="mt-1 text-sm text-zinc-500">{item.note}</p>
            </div>
            <div className="shrink-0 md:text-right">
              <p className="text-sm font-medium text-zinc-700">{item.date}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {item.linkText} →
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Education;
