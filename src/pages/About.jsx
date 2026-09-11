import { motion } from "framer-motion";
import { ROLES, SKILLS } from "../data/constants"; // Mengambil ROLES dan SKILLS
import { glass } from "../styles/theme.js";
import { useTyping } from "../hooks/useTyping";

export function About() {
  const typed = useTyping(ROLES);
  const categoryDescriptions = [
    "Building native mobile apps and modern, responsive web platforms from scratch.",
    "Implementing intelligent algorithms, data processing, and machine learning models.",
    "Designing reliable network topologies and managing robust system architectures."
  ];

  return (
    <section
      id="about"
      style={{
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* ── HERO HEADER ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          textAlign: "left",
          marginBottom: 60,
        }}
      >
        {/* Floating pixel art — dipatok ke sisi kanan container, bukan koordinat
            px tetap, supaya tidak meluber keluar layar di viewport sempit. */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "clamp(48px, 9vw, 75px)",
            height: "clamp(48px, 9vw, 75px)",
            opacity: 0.9,
            filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.2))",
            pointerEvents: "none",
          }}
        >
          <img
            src="/fOpen.png"
            alt=""
            aria-hidden="true"
            style={{
              width: "100%", 
              height: "100%", 
              objectFit: "contain",
              imageRendering: "pixelated" 
            }} 
          />
        </motion.div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(2rem, 5.5vw, 3.7rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.12,
            marginBottom: 14,
            letterSpacing: "-0.02em",
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22C55E 0%, #4ADE80 60%, #86EFAC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            M. Khalid Al Rejeki
          </span>
        </h1>

        {/* Sub-badge */}
        <p
          style={{
            color: "#93C5FD",
            fontSize: 12,
            letterSpacing: "0.15em",
            marginBottom: 22,
            fontWeight: 600,
          }}
        >
          Informatics Engineering Student passionate about software development, problem-solving, and building innovative digital solutions.
        </p>

        {/* Typing animation */}
        <div
          style={{
            fontSize: "clamp(1.1rem, 2.8vw, 1.6rem)",
            color: "#22C55E",
            fontWeight: 700,
            fontFamily: "'Courier New', monospace",
            minHeight: 48,
          }}
        >
          {typed}
          <span
            style={{
              display: "inline-block",
              width: 2,
              background: "#4ADE80",
              marginLeft: 3,
              animation: "blink 1s step-end infinite",
              verticalAlign: "middle",
              height: "1.1em",
            }}
          />
        </div>
      </motion.div>

      {/* ── WHAT I DO SECTION (Otomatis dari data SKILLS) ── */}
      <div style={{ marginTop: 20 }}>
        <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
          What I Do
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}>
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5, borderColor: `${skill.color}80` }}
              style={{
                ...glass,
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                cursor: "default",
                transition: "border-color 0.3s ease",
              }}
            >
              {/* Menampilkan 3 Icon Framework Utama dari constant SKILLS */}
              <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                {skill.items.slice(0, 3).map((tech, j) => (
                  <span key={j} style={{ fontSize: 26, color: skill.color }}>
                    {tech.icon}
                  </span>
                ))}
              </div>
              
              <div style={{ color: skill.color, fontWeight: 700, fontSize: 15 }}>
                {skill.cat}
              </div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.6 }}>
                {categoryDescriptions[i] || "Delivering high-quality digital solutions."}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── GITHUB STATS SECTION ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          ...glass,
          marginTop: 32, 
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: 0 }}>
             GitHub Activity
          </h3>
          <div style={{ background: "rgba(34, 197, 94, 0.15)", border: "1px solid rgba(34, 197, 94, 0.3)", padding: "4px 12px", borderRadius: 20 }}>
            <span style={{ color: "#4ADE80", fontSize: 12, fontWeight: 600 }}>Total Repos: 24</span>
          </div>
        </div>

        {/* Tabel Aktif Push (Contribution Graph) */}
        <div style={{ 
          width: "100%", 
          overflowX: "auto", 
          paddingTop: 8 
        }}>
          <img 
            src={`https://ghchart.rshah.org/22C55E/LepangMbojo`} 
            alt="Khalid's Github Activity" 
            style={{ width: "100%", minWidth: "600px", opacity: 0.9 }}
          />
        </div>
      </motion.div>
    </section>
  );
}