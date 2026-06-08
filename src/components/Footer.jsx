import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function BlinkFrog() {
  const [b, setB] = useState(false);

  useEffect(() => {
    let timer;
    const schedule = () => {
      timer = setTimeout(
        () => {
          setB(true);
          setTimeout(() => {
            setB(false);
            schedule();
          }, 160);
        },
        2600 + Math.random() * 2200
      );
    };
    schedule();
    return () => clearTimeout(timer);
  }, []);

  return (
   <motion.span
  animate={{ scale: b ? 0.96 : 1 }}
  transition={{ duration: 0.18 }}
  style={{ 
    width: 34,  
    height: 34,
    display: "inline-flex",  
    justifyContent: "center", 
    alignItems: "center",    
    verticalAlign: "middle"
  }}
>
  <img
    src={b ? "/fklop.png" : "/fOpen.png"} 
    style={{
      width: "200%", 
      height: "200%",
      objectFit: "contain",
  
    }}
  />
</motion.span>
  );
}

export function Footer() {
  const socials = [
    { label: "GH", href: "https://github.com/LepangMbojo", text: "GitHub" },
    { label: "LI", href: "https://www.linkedin.com/in/m-khalid-al-rejeki-3826b7337/", text: "LinkedIn" },
    { label: "EM", href: "mailto:khalidrizki54@gmail.com", text: "Email" },
    { label: "IG", href: "https://www.instagram.com/lepangmbojo/", text: "Instagram" },
  ];

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        padding: "60px 24px 30px",
        borderTop: "1px solid rgba(34,197,94,0.08)",
        textAlign: "center",
        background:
          "linear-gradient(to top, rgba(4,8,18,0.75), transparent)",
      }}
    >
      <div
        style={{
          fontSize: 28,
          letterSpacing: 20,
          opacity: 0.2,
          marginBottom: 12,
          userSelect: "none",
        }}
      >
        ≡ ≡ ≡ ≡ ≡ ≡ ≡
      </div>

      <BlinkFrog />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 14,
          margin: "22px 0",
        }}
      >
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            aria-label={s.text}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2.2 + i * 0.28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.18,
            }}
            whileHover={{ scale: 1.2 }}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(34,197,94,0.07)",
              border: "1px solid rgba(34,197,94,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4ADE80",
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            {s.label}
          </motion.a>
        ))}
      </div>

      <p style={{ color: "#d9e3f1", fontSize: 13 }}>
        🐸 Built with hope & raindrops by{" "}
        <span style={{ color: "#4ADE80", fontWeight: 700 }}>
          M. Khalid Al Rejeki
        </span>
      </p>
      <p style={{ color: "#bac3cf", fontSize: 12, marginTop: 5 }}>
        © 2025 · Mataram, NTB, Indonesia
      </p>
    </footer>
  );
}
