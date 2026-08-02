import { motion } from "framer-motion";
import { useState } from "react";
import { buttonStyles } from "../../styles/theme";

export function RippleBtn({
  children,
  primary,
  onClick,
  style,
  type = "button",
  disabled,
}) {
  const [rp, setRp] = useState([]);

  const click = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRp((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRp((p) => p.filter((x) => x.id !== id)), 900);
    onClick?.(e);
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.96 }}
      onClick={click}
      style={{
        ...buttonStyles.base,
        ...(primary ? buttonStyles.primary : buttonStyles.ghost),
        ...style,
      }}
    >
      {children}
      {rp.map((r) => (
        <motion.span
          key={r.id}
          initial={{ scale: 0, opacity: 0.45 }}
          animate={{ scale: 5.5, opacity: 0 }}
          transition={{ duration: 0.85 }}
          style={{
            position: "absolute",
            left: r.x - 14,
            top: r.y - 14,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: primary
              ? "rgba(255,255,255,0.28)"
              : "rgba(74,222,128,0.28)",
            pointerEvents: "none",
          }}
        />
      ))}
    </motion.button>
  );
}
