import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { TwitterIcon, GithubIcon, LinkedInIcon, EmailIcon } from "./Icons";

const pages = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
];

const socials = [
  { href: "https://twitter.com/decode_py", icon: <TwitterIcon />, label: "Twitter" },
  { href: "https://github.com/Decoder-25", icon: <GithubIcon />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/disha-biswas-coder/", icon: <LinkedInIcon />, label: "LinkedIn" },
  { href: "mailto:bidisha2125@gmail.com", icon: <EmailIcon />, label: "Email" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    // sticky + blurred background so it stays on top while you scroll
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-zinc-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-violet-600 text-sm text-white">
            DB
          </span>
          <span className="hidden sm:inline">Disha Biswas</span>
        </Link>

        {/* Page links — the active page gets a dark pill that slides between links */}
        <nav className="flex items-center gap-1 rounded-full bg-zinc-100 p-1">
          {pages.map((page) => {
            const active = router.pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                className={`relative rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  active ? "text-white" : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-zinc-900"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{page.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Social icons (hidden on small phones to save space) */}
        <div className="hidden items-center gap-4 md:flex">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
