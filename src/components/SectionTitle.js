import FadeIn from "./FadeIn";

// The small coloured label + big heading used at the top of each section.
const SectionTitle = ({ label, title }) => {
  return (
    <FadeIn className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        {label}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-zinc-900 md:text-4xl">
        {title}
      </h2>
    </FadeIn>
  );
};

export default SectionTitle;
