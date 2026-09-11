import { useState } from "react";
import { GlassCard } from "../components/common/GlassCard";
import { RippleBtn } from "../components/common/RippleBtn";
import { SectionHead } from "../components/common/SectionHead";
import { inputStyles, labelStyles } from "../styles/theme.js";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [isSending, setIsSending] = useState(false); // State untuk efek loading

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const sendMessage = async (e) => {
    e?.preventDefault();
    if (isSending) return;

    // Validasi sederhana: pastikan semua kolom terisi
    if (!form.name.trim() || !form.email.trim() || !form.msg.trim()) {
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
    } catch (err) {
      console.error("Gagal mengirim pesan:", err);
      alert("Terjadi masalah jaringan. Silakan coba lagi.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: 0,
        maxWidth: 560,
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      <SectionHead  title="Contact" sub="writing on a foggy, wet window" />
      <GlassCard style={{ padding: 38 }}>
        <form
          onSubmit={sendMessage}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <div>
            <label htmlFor="contact-name" style={labelStyles}>Name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              style={inputStyles.base}
              placeholder="🐸 Your name..."
              value={form.name}
              onChange={set("name")}
              onFocus={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.2)")}
            />
          </div>
          <div>
            <label htmlFor="contact-email" style={labelStyles}>Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              style={inputStyles.base}
              placeholder="💧 your@email.com"
              value={form.email}
              onChange={set("email")}
              onFocus={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(34,197,94,0.2)")}
            />
          </div>
          <div>
            <label htmlFor="contact-msg" style={labelStyles}>Message</label>
            <textarea
              id="contact-msg"
              name="message"
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
            type="submit"
            // Mencegah tombol ditekan berkali-kali saat sedang loading
            disabled={isSending}
            style={{ opacity: isSending ? 0.7 : 1, cursor: isSending ? "not-allowed" : "pointer" }}
          >
            {isSending ? "⏳ Sending..." : "🌊 Send Message"}
          </RippleBtn>
        </form>
      </GlassCard>
    </section>
  );
}