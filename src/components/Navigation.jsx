import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wrench, Folder, Briefcase, Mail } from "lucide-react";

export function Navigation() {
  const [hovered, setHovered] = useState(null);
  const { pathname } = useLocation();

  // 1. KITA BUAT PELACAK HOVER UNTUK SELURUH NAVBAR
  const [navHovered, setNavHovered] = useState(false);

  const navItems = [
    { to: "/", icon: <User size={20} strokeWidth={2} />, label: "About" },
    { to: "/skills", icon: <Wrench size={20} strokeWidth={2} />, label: "Skills" },
    { to: "/projects", icon: <Folder size={20} strokeWidth={2} />, label: "Projects" },
    { to: "/experience", icon: <Briefcase size={20} strokeWidth={2} />, label: "Experience" },
    { to: "/contact", icon: <Mail size={20} strokeWidth={2} />, label: "Contact" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: "32px", 
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "max-content",
      }}
      // 2. DETEKSI SAAT MOUSE MASUK ATAU KELUAR DARI AREA NAVBAR
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => setNavHovered(false)}
    >
      <motion.nav
        initial={{ y: -50, opacity: 0 }} 
        // 3. ATUR ANIMASI OPACITY BERDASARKAN navHovered
        animate={{ 
          y: 0, 
          opacity: navHovered ? 1 : 0.4, 
          scale: navHovered ? 1 : 0.95  
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
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
        {navItems.map((item) => {
          const active = pathname === item.to;

          return (
          <Link
            key={item.to}
            to={item.to}
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
            style={{
              position: "relative",
              background: "none",
              border: "none",
              color: active ? "#4ADE80" : "rgba(255,255,255,0.45)",
              filter: active ? "drop-shadow(0 0 8px rgba(74,222,128,0.4))" : "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              padding: "4px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              setHovered(item.to);
              e.currentTarget.style.color = "#4ADE80";
              e.currentTarget.style.transform = "scale(1.2) translateY(-3px)";
              e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(74,222,128,0.4))";
            }}
            onMouseLeave={(e) => {
              setHovered(null);
              e.currentTarget.style.color = active ? "#4ADE80" : "rgba(255,255,255,0.45)";
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.filter = active ? "drop-shadow(0 0 8px rgba(74,222,128,0.4))" : "none";
            }}
          >
            {item.icon}

            {/* TITIK PENANDA HALAMAN AKTIF */}
            {active && (
              <motion.span
                layoutId="nav-active-dot"
                style={{
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  translateX: "-50%",
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#4ADE80",
                  boxShadow: "0 0 8px rgba(74,222,128,0.8)",
                }}
              />
            )}

            {/* LABEL TOOLTIP ANIMASI */}
            <AnimatePresence>
              {hovered === item.to && (
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

          </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}