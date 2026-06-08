import { 
  SiKotlin, 
  SiAndroid, 
  SiReact, 
  SiLaravel, 
  SiPython, 
  SiCisco,
  SiJavascript,
  SiTensorflow,
  SiGit, 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const ROLES = [
  "React Developer",
  "Android Developer",
  "Full Stack Developer",
  "AI & ML Enthusiast",
];

export const SKILLS = [
  {
    cat: "App & Web Development",
    icon: "💻", 
    color: "#38BDF8", // Biru air
    items: [
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "Android XML", icon: <SiAndroid /> },
      { name: "React", icon: <SiReact /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Java Swing", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    cat: "AI & Data Science",
    icon: "🧠", 
    color: "#A855F7", // Ungu
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
    ],
  },
  {
    cat: "Networking & Tools",
    icon: "📡", 
    color: "#22C55E", // Hijau neon
    items: [
      { name: "Cisco", icon: <SiCisco /> },
      { name: "Git", icon: <SiGit /> },
      // { name: "Google Cloud", icon: <SiGoogleCloud/> },
    ],
  },
];


export const TIMELINE = [
  { role: "React Web Dev Graduate", org: "Dicoding", period: "januari 2026 - juli 2026", icon: "/logos/Dicoding.jpg" },
  { role: "Google Student Ambassador", org: "Google", period: "september 2025 - desember 2025 ", icon: "/logos/GSA.jpg" },
  { role: "Informatics Engineering", org: "University of Mataram", period: "2023 – sekarang", icon: "/logos/unram.png" },
];

export const ABOUT_ITEMS = [
  { 
    icon: "/logos/unram.png", 
    label: "Informatics Engineering", 
    sub: "University of Mataram", 
    color: "#22C55E" 
  },
  { 
    icon: "/logos/GSA.jpg", 
    label: "Google Student Ambassador", 
    sub: "2025/2026 Term", 
    color: "#4ADE80" 
  },
  { 
    icon: "/logos/Dicoding.jpg", 
    label: "Dicoding Graduate", 
    sub: "Multi-Platform App Developer", 
    color: "#93C5FD" 
  },
];

export const SOCIAL_LINKS = [
  { icon: "GitHub", href: "#", label: "GitHub" },
  { icon: "LinkedIn", href: "#", label: "LinkedIn" },
  { icon: "Email", href: "#", label: "Email" },
  { icon: "Instagram", href: "#", label: "Instagram" },
];

export const COLORS = {
  primary: "#22C55E",
  secondary: "#4ADE80",
  accent: "#38BDF8",
  muted: "#475569",
  dark: "#060d1a",
  darkAlt: "#0a1228",
  text: "#fff",
  textMuted: "rgba(255,255,255,0.5)",
};

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.8,
};
