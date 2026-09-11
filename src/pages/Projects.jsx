import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react"; // Tambah useEffect
import { glass } from "../styles/theme.js";
import { SectionHead } from "./common/SectionHead";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa"; // Icon tambahan

function ProjCard({ p, i }) {
  const [rp, setRp] = useState([]);
  const [hot, setHot] = useState(false);
  const cardRef = useRef(null);

  const onEnter = (e) => {
    setHot(true);
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const id = Date.now();
    setRp((prev) => [...prev, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRp((prev) => prev.filter((x) => x.id !== id)), 1200);
  };

  // Menentukan warna aksen secara acak untuk setiap kartu agar tetap berwarna-warni
  const colors = ["#22C55E", "#38BDF8", "#A855F7", "#F59E0B", "#EC4899"];
  const accent = colors[i % colors.length];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.09 }}
      whileHover={{ y: -9 }}
      onHoverStart={onEnter}
      onHoverEnd={() => setHot(false)}
      style={{
        ...glass,
        padding: 26,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        border: `1px solid ${hot ? accent + "55" : "rgba(255,255,255,0.07)"}`,
        transition: "border-color 0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Memastikan tombol selalu di bawah
      }}
    >
      {/* Efek Cipratan Air */}
      {rp.map((r) => (
        <motion.div
          key={r.id}
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{ duration: 1.15, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: r.x - 24,
            top: r.y - 24,
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: `1px solid ${accent}50`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      {/* Konten Kartu */}
      <div style={{ position: "relative", zIndex: 1, flexGrow: 1 }}>
        <h3
          style={{
            color: accent,
            fontWeight: 800,
            fontSize: 18,
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {p.name}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.58)",
            fontSize: 14,
            lineHeight: 1.6,
            marginBottom: 18,
            // Memotong teks jika terlalu panjang (max 3 baris)
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {p.description || "No description provided."}
        </p>
        
        {/* Bahasa Pemrograman & Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 22, alignItems: "center" }}>
          {p.language && (
            <span
              style={{
                padding: "3px 10px",
                borderRadius: 9999,
                background: `${accent}12`,
                border: `1px solid ${accent}28`,
                color: accent,
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              {p.language}
            </span>
          )}
          
          <div style={{ display: "flex", gap: 10, color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><FaStar /> {p.stargazers_count}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><FaCodeBranch /> {p.forks_count}</span>
          </div>
        </div>
      </div>
      
      {/* Tombol Aksi (Selalu di bawah) */}
      <div style={{ display: "flex", gap: 10, position: "relative", zIndex: 1, marginTop: "auto" }}>
        <motion.a
          href={p.html_url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.93 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "7px 14px",
            borderRadius: 9999,
            background: `${accent}18`,
            border: `1px solid ${accent}38`,
            color: accent,
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <FaGithub /> Repo
        </motion.a>
        
        {p.homepage && (
          <motion.a
            href={p.homepage}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "7px 14px",
              borderRadius: 9999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <FaExternalLinkAlt /> Live
          </motion.a>
        )}
      </div>
    </motion.div>

    
  );
}

export function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GANTI INI DENGAN USERNAME GITHUB KAMU
  const GITHUB_USERNAME = "LepangMbojo";

  useEffect(() => {
    const controller = new AbortController();

    // Mengambil data dari GitHub API (diurutkan berdasarkan yang terbaru)
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      { signal: controller.signal }
    )
      .then(async (res) => {
        const data = await res.json();
        // Saat rate limit (60 request/jam tanpa token) atau user tidak ditemukan,
        // GitHub membalas objek { message: ... }, bukan array.
        if (!res.ok || !Array.isArray(data)) {
          throw new Error(data?.message || `GitHub API error (${res.status})`);
        }
        // Memfilter repo yang bukan fork (jika kamu mau menampilkan fork, hapus filter ini)
        setRepos(data.filter((repo) => !repo.fork));
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.error("Error fetching GitHub repos:", err);
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <section
      id="projects"
      style={{
        padding: "90px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      <SectionHead title="Latest Repositories" sub="recent catches from the code pond" />
      
      {loading ? (
        <div style={{ textAlign: "center", color: "#22C55E", padding: "40px" }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ display: "inline-block", fontSize: 32 }}>
            <FaGithub />
          </motion.div>
          <p style={{ marginTop: 12 }}>Fetching from GitHub...</p>
        </div>
      ) : repos.length === 0 ? (
        <div
          style={{
            ...glass,
            padding: "32px 24px",
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
            fontSize: 14,
            lineHeight: 1.7,
          }}
        >
          <p style={{ marginBottom: 14 }}>
            {error
              ? "🐸 The pond is quiet — couldn't load repositories right now."
              : "🐸 No public repositories to show yet."}
          </p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 9999,
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.3)",
              color: "#4ADE80",
              fontSize: 12,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <FaGithub /> Visit GitHub profile
          </a>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22,
          }}
        >
          {repos.map((repo, i) => (
            <ProjCard key={repo.id} p={repo} i={i} />
          ))}
        </div>
      )}
    </section>

    
  );
}