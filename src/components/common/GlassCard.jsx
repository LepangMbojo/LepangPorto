import { motion } from "framer-motion";
import { useState } from "react";
import { glass } from "../../styles/theme";

export function GlassCard({ children, accent, style, hover }) {
  const [hot, setHot] = useState(false);
  
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : {}}
      onHoverStart={() => setHot(true)}
      onHoverEnd={() => setHot(false)}
      style={{
        ...glass,
       
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "rgba(10, 18, 41, 0.4)", 
        padding: 24,
        position: "relative",
        overflow: "hidden", 
        transition: "border-color 0.4s, box-shadow 0.4s",
        border: `1px solid ${
          hot && hover
            ? (accent || "#22C55E") + "55"
            : "rgba(255,255,255,0.08)"
        }`,
        boxShadow: hot && hover ? `0 12px 40px ${(accent || "#22C55E")}25` : "0 8px 32px rgba(0,0,0,0.2)",
        ...style,
      }}
    >
      {/* Overlay Tekstur Hujan / Noise Basah */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          zIndex: 0,
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Konten Kartu */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
}