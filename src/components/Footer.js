const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row">
        <span>© {new Date().getFullYear()} Disha Biswas</span>
        <span>
          Built with <span className="text-primary">♥</span> using Next.js, Tailwind & Framer Motion
        </span>
        <a
          href="mailto:bidisha2125@gmail.com"
          className="font-semibold text-zinc-800 transition hover:text-primary"
        >
          Say hello →
        </a>
      </div>
    </footer>
  );
};

export default Footer;
