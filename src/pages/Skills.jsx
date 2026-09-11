import { motion } from "framer-motion";
import { SKILLS } from "../data/constants";
import { GlassCard } from "./common/GlassCard";
import { SectionHead } from "./common/SectionHead";

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "90px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      <SectionHead title="Skills" sub="floating on the tech pond" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 22,
        }}
      >
        {SKILLS.map((sk, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.45,
            }}
          >
            <GlassCard hover accent={sk.color} style={{ height: "100%", padding: 28 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 22,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: `${sk.color}1a`,
                    border: `1px solid ${sk.color}38`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  {sk.icon}
                </div>
                <h3
                  style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}
                >
                  {sk.cat}
                </h3>
              </div>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {sk.items.map((item, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "6px 14px",
                      borderRadius: 9999,
                      background: `${sk.color}14`,
                      border: `1px solid ${sk.color}30`,
                      color: sk.color,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "default",
                      transition: "background 0.2s",
                    }}
                  >
                    <span style={{ fontSize: 16, display: "flex" }}>
                      {item.icon}
                    </span>
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}