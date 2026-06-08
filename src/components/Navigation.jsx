import { useState } from "react"; // 1. TAMBAHKAN INI
import { motion, AnimatePresence } from "framer-motion"; // 2. TAMBAHKAN AnimatePresence
import { User, Wrench, Folder, Briefcase, Mail } from "lucide-react";

export function Navigation() {
  // 3. KITA BUAT PELACAK HOVER
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { id: "about", icon: <User size={20} strokeWidth={2} />, label: "About" },
    { id: "skills", icon: <Wrench size={20} strokeWidth={2} />, label: "Skills" },
    { id: "projects", icon: <Folder size={20} strokeWidth={2} />, label: "Projects" },
    { id: "experience", icon: <Briefcase size={20} strokeWidth={2} />, label: "Experience" },
    { id: "contact", icon: <Mail size={20} strokeWidth={2} />, label: "Contact" },
  ];

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "32px", 
        left: "55%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "max-content",
      }}
    >
      <motion.nav
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
          padding: "14px 28px",
          background: "rgba(7, 14, 32, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "9999px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        }}
      >
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => go(item.id)}
            aria-label={item.label}
            style={{
              position: "relative", // Wajib ada agar tooltip posisinya nempel ke tombol ini
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.45)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              padding: "4px",
            }}
            onMouseEnter={(e) => {
              setHovered(item.id); // Beritahu React icon ini sedang di-hover
              e.currentTarget.style.color = "#4ADE80";
              e.currentTarget.style.transform = "scale(1.2) translateY(-3px)";
              e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(74,222,128,0.4))";
            }}
            onMouseLeave={(e) => {
              setHovered(null); // Sembunyikan label saat mouse pergi
              e.currentTarget.style.color = "rgba(255,255,255,0.45)";
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.filter = "none";
            }}
          >
            {item.icon}

            {/* 4. LABEL TOOLTIP ANIMASI */}
            <AnimatePresence>
              {hovered === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: "absolute",
                    top: "100%", 
                    marginTop: "16px",
                    background: "rgba(10, 14, 26, 0.9)",
                    color: "#4ADE80",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 700,
                    border: "1px solid rgba(74,222,128,0.3)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                    pointerEvents: "none", 
                    whiteSpace: "nowrap", 
                  }}
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>

          </button>
        ))}
      </motion.nav>
    </div>
  );
}