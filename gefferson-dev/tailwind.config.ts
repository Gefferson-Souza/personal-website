import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cores extraídas do seu design 'stitch'
        term: {
          bg: "#0c0c0c",       // Fundo Absoluto
          card: "#141414",     // Fundo dos Cards
          border: "#333333",   // Bordas sutis
          text: "#e5e5e5",     // Texto principal
          muted: "#888888",    // Texto secundário (datas, detalhes)
          accent: "#a855f7",   // Roxo Neon (para links/hover)
          success: "#22c55e",  // Verde (para o 'Compiling...')
        }
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
