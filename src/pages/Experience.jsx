import { motion } from "framer-motion";
import { TIMELINE } from "../data/constants";
import { GlassCard } from "../components/common/GlassCard";
import { SectionHead } from "../components/common/SectionHead";

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: 0,
        maxWidth: 680,
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      <SectionHead title="Experience" sub="flowing through the stream of life" />
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 20,
            top: 8,
            bottom: 8,
            width: 2,
            background:
              "linear-gradient(to bottom, transparent, rgba(34,197,94,0.4), rgba(74,222,128,0.25), transparent)",
            borderRadius: 9999,
          }}
        />

        {TIMELINE.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.13 }}
            style={{
              display: "flex",
              gap: 22,
              marginBottom: i < TIMELINE.length - 1 ? 24 : 0,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 2,
                flexShrink: 0,
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "rgba(7,14,32,0.95)",
                  border: "2px solid rgba(34,197,94,0.38)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 19,
                }}
              >
              <div 
                style={{ 
                  width: 42, 
                  height: 42, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img 
                  src={ev.icon} 
                  alt={ev.role} 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain"
                  }} 
                />
              </div>
              </motion.div>
            </div>

            <GlassCard style={{ flex: 1, padding: "18px 22px" }}>
              <h4
                style={{
                  color: "#4ADE80",
                  fontWeight: 800,
                  fontSize: 15,
                  marginBottom: 4,
                }}
              >
                {ev.role}
              </h4>
              <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 13 }}>
                {ev.org}
              </p>
              <p
                style={{
                  color: "#adbcd1",
                  fontSize: 12,
                  marginTop: 5,
                  fontFamily: "monospace",
                }}
              >
                {ev.period}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
