export const glass = {
  background:
    "linear-gradient(135deg, rgba(10,18,40,0.45) 0%, rgba(20,30,60,0.35) 100%)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(34,197,94,0.15)",
  borderRadius: 16,
  boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.08)",
};

export const buttonStyles = {
  base: {
    position: "relative",
    overflow: "hidden",
    padding: "12px 28px",
    borderRadius: 9999,
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "0.02em",
  },
  primary: {
    background: "linear-gradient(135deg, #22C55E, #4ADE80)",
    color: "#081a0f",
    border: "none",
    boxShadow: "0 4px 16px rgba(34,197,94,0.3)",
  },
  ghost: {
    background: "rgba(10,18,40,0.6)",
    color: "#4ADE80",
    border: "1.5px solid rgba(34,197,94,0.35)",
    backdropFilter: "blur(12px)",
    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)",
  },
};

export const inputStyles = {
  base: {
    width: "100%",
    padding: "11px 15px",
    borderRadius: 10,
    background: "rgba(10,18,40,0.4)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(34,197,94,0.2)",
    color: "#fff",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    transition: "border-color 0.2s, background 0.2s",
  },
};

export const labelStyles = {
  color: "#4ADE80",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.1em",
  display: "block",
  marginBottom: 7,
  textTransform: "uppercase",
};

export const animations = {
  slideInFromTop: {
    initial: { y: -60 },
    animate: { y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  scaleHover: (scale = 1.05) => ({
    whileHover: { scale },
    whileTap: { scale: 0.96 },
  }),
  floatLoop: (duration = 2.2, delay = 0) => ({
    animate: { y: [0, -5, 0] },
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  }),
};

