import { motion } from "framer-motion";

// Wrap anything in <FadeIn> and it slides up + fades in when it scrolls into view.
// `delay` (in seconds) lets you stagger items one after another.
const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
