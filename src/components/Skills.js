import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";
import { skillOrbits, skills } from "@/data/about";

// A different coloured dot for each skill category
const DOT_COLORS = ["bg-sky-500", "bg-emerald-500", "bg-violet-500", "bg-amber-500", "bg-orange-500", "bg-blue-500", "bg-rose-500"];

// Seconds for one full turn. All rings turn together so pills never bump into each other.
const SPIN = { repeat: Infinity, ease: "linear", duration: 90 };

// One ring of the universe. The ring spins; each pill spins the opposite way
// at the same speed, so the text always stays upright.
const Orbit = ({ size, skills, index }) => {
  return (
    <motion.div
      className="absolute rounded-full border border-dashed border-zinc-300"
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div className="h-full w-full" animate={{ rotate: 360 }} transition={SPIN}>
        {skills.map((skill, i) => {
          // spread pills evenly around the circle
          const angle = (i / skills.length) * 2 * Math.PI + index;
          const left = 50 + 50 * Math.cos(angle);
          const top = 50 + 50 * Math.sin(angle);

          return (
            <div
              key={skill}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <motion.div animate={{ rotate: -360 }} transition={SPIN}>
                <span className="block cursor-default whitespace-nowrap rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-md transition hover:scale-110 hover:border-primary hover:text-primary">
                  {skill}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-20">
      <SectionTitle label="Skills" title="What I work with" />

      {/* The universe — only on larger screens, it's too wide for phones */}
      <div className="relative hidden h-[860px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-white to-zinc-100 md:flex">
        {skillOrbits.map((orbit, index) => (
          <Orbit key={orbit.size} index={index} {...orbit} />
        ))}

        {/* the "sun" in the middle */}
        <motion.div
          className="z-10 flex h-28 w-28 items-center justify-center rounded-full bg-zinc-900 text-center text-sm font-bold text-white shadow-2xl ring-8 ring-primary/20"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Backend
          <br />& Cloud
        </motion.div>
      </div>

      {/* Full list, grouped — one row per category */}
      <div className="mt-10 divide-y divide-zinc-100 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        {skills.map((group, index) => (
          <FadeIn
            key={group.title}
            delay={index * 0.06}
            className="grid gap-4 p-6 transition hover:bg-zinc-50/70 md:grid-cols-[240px_1fr] md:items-center md:px-8"
          >
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${DOT_COLORS[index % DOT_COLORS.length]}`} />
              <h3 className="font-bold text-zinc-900">{group.title}</h3>
              <span className="text-xs font-medium text-zinc-400">{group.items.length}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="cursor-default rounded-full bg-zinc-100 px-3.5 py-1.5 text-sm font-medium text-zinc-700 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Skills;
