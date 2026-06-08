import { motion } from "framer-motion";

export function SectionHead({ emoji, title, sub }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 52 }}>
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 900,
          color: "#fff",
          marginBottom: 7,
          letterSpacing: "-0.01em",
        }}
      >
        {emoji} {title}
      </motion.h2>
      <p style={{ color: "#dddfe0", fontSize: 13, letterSpacing: "0.07em" }}>
        {sub}
      </p>
      <div
        style={{
          width: 56,
          height: 3,
          background: "linear-gradient(to right, #22C55E, #4ADE80)",
          margin: "14px auto 0",
          borderRadius: 9999,
        }}
      />
    </div>
  );
}
