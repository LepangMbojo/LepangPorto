import { motion } from "framer-motion";
import { useEffect } from "react";

export function Loader({ done }) {
  useEffect(() => {
    const t = setTimeout(done, 3500);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#060d1a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* ── CONTAINER UTAMA (DIBESARKAN JADI 320x320) ── */}
      <div 
        style={{ 
          position: "relative", 
          display: "grid", 
          placeItems: "center", 
          width: 320, 
          height: 320 
        }}
      >
        {/* 1. RIAK AIR 1 (DIBESARKAN) */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: [0.3, 2.4], opacity: [0.9, 0] }}
          transition={{ delay: 0.55, duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            gridArea: "1/1",
            justifySelf: "center",
            alignSelf: "center",
            width: 180, 
            height: 55,  
            borderRadius: "50%",
            border: "2.5px solid rgba(147, 197, 253, 0.6)",
            boxShadow: "0 0 20px rgba(147, 197, 253, 0.4)",
            y: 50, 
            zIndex: 1,
          }}
        />

        {/* 2. RIAK AIR 2 (DIBESARKAN) */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: [0.3, 3.2], opacity: [0.5, 0] }}
          transition={{ delay: 0.75, duration: 1.4, ease: "easeOut" }}
          style={{
            position: "absolute",
            gridArea: "1/1",
            justifySelf: "center",
            alignSelf: "center",
            width: 180,
            height: 55, 
            borderRadius: "50%",
            border: "2px solid rgba(74, 222, 128, 0.4)",
            y: 50, 
            zIndex: 1,
          }}
        />

        {/* 3. LILYPAD (DIBESARKAN) */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -15, y: 50 }}
          animate={{ scale: 1, opacity: 1, rotate: 0, y: 50 }} 
          transition={{ type: "spring", stiffness: 110, damping: 12, delay: 0.35 }}
          style={{
            gridArea: "1/1",
            zIndex: 2,
            width: 220,  
            height: 110,
            justifySelf: "center",
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(0 10px 25px rgba(34,197,94,0.45))", 
          }}
        >
          <img 
            src="/llpad.png" 
            alt="Lilypad Asset"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              imageRendering: "pixelated" 
            }}
          />
        </motion.div>

        {/* 4. ANIMASI KODOK JATUH (DIBESARKAN & DI-SINKRONKAN) */}
        <motion.div
          initial={{ y: -380, rotate: -20 }}
          animate={{ y: 15, rotate: 0 }} // 💡 PAS: y=15 membuat bokong/kaki kodok menempel sempurna di daun teratai y=50
          transition={{ type: "spring", stiffness: 140, damping: 13, delay: 0.15 }}
          style={{ 
            width: 120, 
            height: 120, 
            zIndex: 3, 
            gridArea: "1/1",
            justifySelf: "center",
            alignSelf: "center",
            display: "flex",          
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img 
            src="/fOpen.png" 
            alt="Frog Landing"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              imageRendering: "pixelated" 
            }}
          />
        </motion.div>
      </div>

      {/* ── TEKS PROGRESS ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          color: "#4ADE80",
          marginTop: 20,
          letterSpacing: "0.28em",
          fontSize: 13,
          fontFamily: "monospace",
        }}
      >
        ~ splashing in ~
      </motion.p>

      {/* ── LOADING BAR PROGRESS ── */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 240 }}
        transition={{ delay: 1.5, duration: 1.2, ease: "easeInOut" }}
        style={{
          height: 3, 
          marginTop: 16,
          borderRadius: 9999,
          background: "linear-gradient(to right, #22C55E, #4ADE80)",
          boxShadow: "0 0 10px rgba(74,222,128,0.5)",
        }}
      />
    </motion.div>
  );
}