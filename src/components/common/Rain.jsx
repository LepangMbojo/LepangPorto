import { useRef, useEffect } from "react";

export function Rain() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let raf;

    // Dimensi logis (CSS px) yang dipakai seluruh perhitungan posisi.
    let W = window.innerWidth;
    let H = window.innerHeight;

    // Mengatur ulang ukuran canvas mengikuti device pixel ratio, supaya garis
    // hujan dan daun teratai tidak buram di layar retina/HiDPI.
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = window.innerWidth;
      H = window.innerHeight;
      c.width = W * dpr;
      c.height = H * dpr;
      c.style.width = `${W}px`;
      c.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // 1. DATA HUJAN
    const drops = Array.from({ length: 140 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      l: 12 + Math.random() * 20,
      s: 4 + Math.random() * 4, // Sedikit dipercepat agar jatuh lebih natural
      a: 0.07 + Math.random() * 0.22,
    }));

    // 2. DATA LILYPAD (Daun Teratai)
    // Diletakkan di area bawah layar (80% - 95% dari tinggi layar)
    const lilypads = Array.from({ length: 12 }, () => {
      const radius = 20 + Math.random() * 30;
      return {
        xRatio: Math.random(), // Menyimpan rasio posisi X agar aman saat resize
        yRatio: 0.50 + Math.random() * 0.45, // Menyimpan rasio posisi Y di area bawah
        r: radius,
        color: `rgba(34, 197, 94, ${0.12 + Math.random() * 0.15})`, // Variasi warna hijau transparan
        glowColor: `rgba(74, 222, 128, 0.2)`,
        angle: Math.random() * Math.PI * 2, // Rotasi potongan daun (Pac-man style)
        bobSpeed: 0.015 + Math.random() * 0.02, // Kecepatan ambang bergoyang
        bobRange: 4 + Math.random() * 6, // Jarak naik turun goyangan
        bobTime: Math.random() * 100, // Offset waktu awal acak
      };
    });

    // 3. LOOP ANIMASI
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // ── GERAKAN & GAMBAR HUJAN ──
      drops.forEach((d) => {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 0.5, d.y + d.l); // Sedikit kemiringan mengikuti arah angin jatuh
        ctx.strokeStyle = `rgba(147,197,253,${d.a})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        d.y += d.s;
        if (d.y > H) {
          d.y = -d.l;
          d.x = Math.random() * W;
        }
      });

      // ── GERAKAN & GAMBAR LILYPAD ──
      lilypads.forEach((lp) => {
        // Update waktu untuk efek Math.sin (goyangan naik turun)
        lp.bobTime += lp.bobSpeed;
        const currentX = lp.xRatio * W;
        const currentY = lp.yRatio * H + Math.sin(lp.bobTime) * lp.bobRange;

        ctx.save();
        // Pindahkan koordinat canvas ke tengah-tengah lilypad
        ctx.translate(currentX, currentY);
        ctx.rotate(lp.angle);

        // Efek Glow/Neon tipis di pinggiran daun teratai
        ctx.shadowBlur = 15;
        ctx.shadowColor = lp.glowColor;

        // Menggambar lingkaran teratai dengan potongan V di ujungnya (seperti Pac-Man)
        ctx.beginPath();
        // Membuka arc dari 0.15 PI sampai 1.85 PI (menyisakan celah V sebesar 0.3 PI)
        ctx.arc(0, 0, lp.r, 0.15 * Math.PI, 1.85 * Math.PI);
        ctx.lineTo(0, 0); // Tarik garis ke tengah untuk menutup potongan V
        ctx.closePath();

        // Isi warna daun
        ctx.fillStyle = lp.color;
        ctx.fill();

        // Garis tepi teratai agar teksturnya terlihat premium
        ctx.shadowBlur = 0; // Matikan shadow untuk stroke agar tajam
        ctx.strokeStyle = "rgba(74, 222, 128, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.7, // Sedikit dinaikkan agar daun teratai lebih terlihat magis
      }}
    />
  );
}