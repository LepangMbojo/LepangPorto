import { useLocation, useOutlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Rain } from "../components/common/Rain";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { PremiumProfileCard } from "../components/common/PremiumProfileCard";

export function MainLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <Rain />
      <Navigation />

      {/* LAYOUT DUA KOLOM UTAMA UNTUK SELURUH HALAMAN */}
      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "130px 24px 40px",
          display: "flex",
          gap: "40px",
          alignItems: "flex-start", // Wajib agar sticky berfungsi
          flexWrap: "wrap",
        }}
      >
        {/* KIRI: SIDEBAR STICKY (tetap hidup saat pindah halaman) */}
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

        {/* KANAN: HALAMAN AKTIF, dengan animasi transisi antar halaman */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ position: "relative", zIndex: 2 }}
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
          <Footer />
        </div>
      </main>
    </>
  );
}
