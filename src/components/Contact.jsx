import { useState } from "react";
import { GlassCard } from "./common/GlassCard";
import { RippleBtn } from "./common/RippleBtn";
import { SectionHead } from "./common/SectionHead";
import { inputStyles, labelStyles } from "../styles/theme.js";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [isSending, setIsSending] = useState(false); // State untuk efek loading

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const sendMessage = async () => {
    // Validasi sederhana: pastikan semua kolom terisi
    if (!form.name || !form.email || !form.msg) {
      alert("🐸 Tolong isi semua kolom sebelum melempar pesan ke kolam!");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // GANTI TULISAN DI BAWAH INI DENGAN ACCESS KEY DARI EMAILMU
          access_key: "b76b5e1f-bba8-4a62-bc81-ff8acfa30a7c", 
          name: form.name,
          email: form.email,
          message: form.msg,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("🐸💦 Message dropped in the pond! I will reply soon.");
        setForm({ name: "", email: "", msg: "" }); // Kosongkan form setelah sukses
      } else {
        alert("Waduh, kataknya sedang tidur. Gagal mengirim pesan.");
      }
    } catch (error) {
      alert("Terjadi masalah jaringan. Silakan coba lagi.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "90px 24px",
        maxWidth: 560,
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      <SectionHead  title="Contact" sub="writing on a foggy, wet window" />
      <GlassCard style={{ padding: 38 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={labelStyles}>Name</label>
            <input
              style={inputStyles.base}
              placeholder="🐸 Your name..."
              value={form.name}
              onChange={set("name")}
              onFocus={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.2)")}
            />
          </div>
          <div>
            <label style={labelStyles}>Email</label>
            <input
              type="email"
              style={inputStyles.base}
              placeholder="💧 your@email.com"
              value={form.email}
              onChange={set("email")}
              onFocus={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.2)")}
            />
          </div>
          <div>
            <label style={labelStyles}>Message</label>
            <textarea
              style={{ ...inputStyles.base, resize: "vertical" }}
              rows={5}
              placeholder="🌿 Leave a message in the pond..."
              value={form.msg}
              onChange={set("msg")}
              onFocus={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.2)")}
            />
          </div>
          <RippleBtn
            primary
            onClick={sendMessage}
            // Mencegah tombol ditekan berkali-kali saat sedang loading
            style={{ opacity: isSending ? 0.7 : 1, pointerEvents: isSending ? "none" : "auto" }}
          >
            {isSending ? "⏳ Sending..." : "🌊 Send Message"}
          </RippleBtn>
        </div>
      </GlassCard>
    </section>
  );
}