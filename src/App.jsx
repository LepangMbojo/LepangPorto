import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "./components/common/Loader";
import { Rain } from "./components/common/Rain";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PremiumProfileCard } from "./components/common/PremiumProfileCard";

import "./styles/global.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0a0e1a 0%, #1a2f4a 50%, #0f1729 100%)",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        overflowX: "clip",
      }}
    >
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: rgba(10,14,26,0.5); }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #22C55E 0%, #4ADE80 100%); border-radius: 9999px; box-shadow: 0 0 12px rgba(34,197,94,0.4); }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #4ADE80 0%, #86EFAC 100%); box-shadow: 0 0 16px rgba(34,197,94,0.6); }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.24); }
        button { font-family: inherit; }


        .profile-sidebar {
          position: sticky;
          top: 100px;
          flex-basis: 350px;
          flex-shrink: 0;
          height: max-content; /* Penting agar kartu tidak melar ke bawah */
          z-index: 30;
        }

        /* Saat di layar HP (lebar di bawah 900px), matikan sticky-nya! */
        @media (max-width: 900px) {
          .profile-sidebar {
            position: relative; /* Berubah jadi kartu biasa */
            top: 0;
            flex-basis: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 24px;
          }
        }
  
      `}</style>

      <AnimatePresence>
        {loading && <Loader key="loader" done={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Rain />
          <Navigation />

          {/* LAYOUT DUA KOLOM UTAMA UNTUK SELURUH HALAMAN */}
          <main
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "40px 24px",
              display: "flex",
              gap: "40px",
              alignItems: "flex-start", // Wajib agar sticky berfungsi
              flexWrap: "wrap",
            }}
          >
            {/* KIRI: SIDEBAR STICKY */}
            <aside className="profile-sidebar">
              <PremiumProfileCard 
                name="Lepang Mbojo"
                title="Like a frog exploring every corner of the pond, I continuously learn, adapt, and build innovative digital solutions through code."
                image="/corpme.JPG"
                socials={{
                  github: "https://github.com/LepangMbojo",
                  linkedin: "https://www.linkedin.com/in/m-khalid-al-rejeki-3826b7337/",
                  instagram: "https://www.instagram.com/lepangmbojo/",
                  email: "khalidrizki54@gmail.com",
                }}
              />
            </aside>

            {/* KANAN: KONTEN UTAMA */}
            <div style={{ flex: 1, minWidth: "300px" }}>
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </div>
          </main>
        </motion.div>
      )}
    </div>
  );
}