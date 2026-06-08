import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export function PremiumProfileCard({
  name = "M. Khalid Al Rejeki",
  title = "Informatics Engineering Student",
  image = "/corpme.JPG",
  socials = {

  },
}) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const [raindrops] = useState(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: 2 + Math.random() * 1.5,
      delay: Math.random() * 0.5,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        position: "relative",
        width: "100%", 
        maxWidth: "440px", 
        margin: "0 auto",
        zIndex: 20,
        perspective: 1200,
      }}
    >
      {/* Outer glow effect */}
      <motion.div
        animate={{
          opacity: isHovering ? 0.4 : 0.2,
        }}
        style={{
          position: "absolute",
          inset: -20,
          background:
            "radial-gradient(circle at center, rgba(34, 197, 94, 0.3) 0%, transparent 70%)",
          borderRadius: 64,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Main glass card */}
      <motion.div
        animate={{
          y: isHovering ? -12 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          background: "rgba(7, 14, 32, 0.45)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(34, 197, 94, 0.25)",
          borderRadius: 48,
          padding: "48px 40px",
          position: "relative",
          overflow: "hidden",
          boxShadow:
            "0 25px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Rain droplets on glass */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 48 }}>
          {raindrops.map((drop) => (
            <motion.div
              key={drop.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 600, opacity: [0, drop.opacity, drop.opacity, 0] }}
              transition={{
                duration: drop.duration,
                delay: drop.delay,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                left: `${drop.x}%`,
                width: "2px",
                height: "12px",
                background: "rgba(147, 197, 253, 0.6)",
                borderRadius: "2px",
                filter: "blur(0.5px)",
              }}
            />
          ))}
        </div>

        {/* Wet glass overlay with condensation */}
        <motion.div
          animate={{
            opacity: mousePos.y < 0.3 ? 0.15 : 0.08,
          }}
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)`,
            pointerEvents: "none",
            borderRadius: 48,
          }}
        />

        {/* Light refraction effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.3), transparent)",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        />

        {/* Decorative top-right curve */}
        <svg
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 180,
            height: 180,
            opacity: 0.25,
            pointerEvents: "none",
          }}
        >
          <path
            d="M 100 0 Q 150 40, 180 120"
            stroke="#22C55E"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="8,6"
          />
          <circle cx="180" cy="120" r="4" fill="#22C55E" opacity="0.5" />
        </svg>

        {/* Decorative bottom-left curve */}
        <svg
          style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 180,
            height: 180,
            opacity: 0.25,
            pointerEvents: "none",
          }}
        >
          <path
            d="M 0 80 Q 40 140, 120 180"
            stroke="#22C55E"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="8,6"
          />
          <circle cx="0" cy="80" r="4" fill="#22C55E" opacity="0.5" />
        </svg>

        {/* Content wrapper */}
        <div style={{ position: "relative", zIndex: 5 }}>
          {/* Profile image container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              position: "relative",
              marginBottom: 32,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Image glow background */}
            <motion.div
              animate={{
                boxShadow: isHovering
                  ? "0 0 40px rgba(34, 197, 94, 0.5)"
                  : "0 0 20px rgba(34, 197, 94, 0.2)",
              }}
              style={{
                position: "absolute",
                inset: -12,
                borderRadius: 32,
                background: "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(74, 222, 128, 0.1))",
              }}
            />

            {/* Image frame with gradient border */}
            <div
              style={{
                position: "relative",
                width: 220,
                height: 220,
                borderRadius: 28,
                background: "linear-gradient(135deg, #22C55E, #4ADE80)",
                padding: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={image}
                alt={name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 26,
                }}
              />

              {/* Image overlay shine effect */}
              <motion.div
                animate={{
                  opacity: isHovering ? 0.3 : 0.1,
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 50%)",
                  borderRadius: 26,
                  pointerEvents: "none",
                }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 8,
              textAlign: "center",
              letterSpacing: "-0.01em",
              background: "linear-gradient(135deg, #22C55E, #4ADE80, #86EFAC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {name}
          </motion.h2>

         {/* ── THE GAP: Garis Putus-putus & Ikon (Sesuai Referensimu) ── */}
          <div 
            style={{ 
              position: "relative", 
              width: "100%", 
              height: "70px",
              display: "flex", 
              justifyContent: "center", 
              marginTop: 4 
            }}
          >

          </div>

          {/* ── DESKRIPSI (Kata-kata di Bawah Gap) ── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              lineHeight: 1.6,
              fontWeight: 500,
              padding: "0 10px",
              marginBottom: 24,
            }}
          >
            {title}
          </motion.p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginTop: 24,
            }}
          >
            {socials?.github && (
              <motion.a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  color: "#22C55E",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <FaGithub size={20} />
              </motion.a>
            )}

            {socials?.linkedin && (
              <motion.a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  color: "#22C55E",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <FaLinkedin size={20} />
              </motion.a>
            )}

            {socials?.twitter && (
              <motion.a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  color: "#22C55E",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <FaTwitter size={20} />
              </motion.a>
            )}

            {socials?.instagram && (
              <motion.a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  color: "#22C55E",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <FaInstagram size={20} />
              </motion.a>
            )}

            {socials?.email && (
              <motion.a
                href={socials.email}
                whileHover={{ scale: 1.25, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  color: "#22C55E",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <FaEnvelope size={20} />
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>

    {/* Floating pixel-art elements around the card */}
<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  style={{
    position: "absolute",
    top: -20,
    right: -20,
    width: 64,  
    height: 64, 
    opacity: 0.8,
    filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))",
  }}
>
  <img 
    src="/frog.png"
    alt="Pixel Frog Heart" 
    style={{ 
      width: "100%", 
      height: "100%", 
      objectFit: "contain",
      imageRendering: "pixelated" 
    }} 
  />
</motion.div>

<motion.div
  animate={{ y: [0, 15, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
  style={{
    position: "absolute",
    bottom: -20,
    left: -20,
    width: 80, 
    height: 80,
    opacity: 0.7,
    filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.2))",
  }}
>
  <img 
    src="/llpad.png" 
    alt="Pixel Decor" 
    style={{ 
      width: "100%", 
      height: "100%", 
      objectFit: "contain",
      imageRendering: "pixelated" 
    }} 
  />
</motion.div>

     
    </motion.div>
  );
}