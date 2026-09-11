import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "./components/common/Loader";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { MainLayout } from "./layouts/MainLayout";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFoundPage";

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
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </motion.div>
      )}
    </div>
  );
}
