import { Link } from "react-router-dom";
import { glass } from "../styles/theme.js";

export function NotFoundPage() {
  return (
    <section style={{ ...glass, padding: "48px 32px", textAlign: "center" }}>
      <img
        src="/fklop.png"
        alt=""
        aria-hidden="true"
        style={{ width: 72, height: 72, objectFit: "contain", imageRendering: "pixelated" }}
      />
      <h1 style={{ color: "#fff", fontSize: 48, fontWeight: 900, margin: "12px 0 4px" }}>404</h1>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 24 }}>
        Halaman ini nggak ada di kolam ini.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "10px 22px",
          borderRadius: 9999,
          background: "rgba(34,197,94,0.14)",
          border: "1px solid rgba(34,197,94,0.35)",
          color: "#4ADE80",
          fontWeight: 700,
          fontSize: 13,
          textDecoration: "none",
        }}
      >
        Balik ke Home
      </Link>
    </section>
  );
}
