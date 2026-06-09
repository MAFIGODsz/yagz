import type { Config } from "tailwindcss";

/**
 * DESIGN SYSTEM — Yá Guayanaz
 * --------------------------------------------------------------------------
 * Tokens são definidos como CSS variables em src/app/globals.css e mapeados
 * aqui. Para ajustar a identidade (cores, etc.) edite globals.css em um único
 * lugar — todo o site reflete a mudança automaticamente.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Neutros / base
        pearl: "var(--pearl)",
        cloud: "var(--cloud)",
        offwhite: "var(--off-white)",
        mist: "var(--mist)",
        silver: "var(--silver)",

        // Azuis da marca (escala principal)
        azure: {
          50: "var(--azure-50)",
          100: "var(--azure-100)",
          200: "var(--azure-200)",
          300: "var(--azure-300)",
          400: "var(--azure-400)",
          500: "var(--azure-500)",
          600: "var(--azure-600)",
          700: "var(--azure-700)",
        },

        // Detalhes iridescentes (asa de borboleta)
        periwinkle: "var(--periwinkle)",
        lilac: "var(--lilac)",

        // Linha fina / bordas sutis
        hairline: "var(--hairline)",

        // Estado de erro (formulários)
        danger: "var(--danger)",

        // Tinta / texto
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          muted: "var(--ink-muted)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Escala tipográfica fluida e consistente
        "display-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 4.25rem)", { lineHeight: "1.06", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(30, 78, 104, 0.04), 0 8px 24px rgba(30, 78, 104, 0.06)",
        card: "0 4px 12px rgba(30, 78, 104, 0.05), 0 18px 50px -14px rgba(30, 78, 104, 0.18)",
        lift: "0 14px 28px rgba(30, 78, 104, 0.08), 0 40px 90px -26px rgba(30, 78, 104, 0.30)",
        glow: "0 0 0 1px rgba(255,255,255,0.6) inset, 0 12px 44px -12px rgba(46, 110, 146, 0.45)",
      },
      backgroundImage: {
        "iridescent": "linear-gradient(125deg, var(--azure-100) 0%, var(--lilac) 30%, var(--azure-300) 65%, var(--periwinkle) 100%)",
        "azure-soft": "linear-gradient(135deg, var(--azure-50) 0%, var(--mist) 100%)",
        "pearl-radial": "radial-gradient(130% 95% at 50% -10%, var(--cloud) 0%, var(--pearl) 42%, var(--mist) 115%)",
        "btn-primary": "linear-gradient(135deg, #2E6E92 0%, #1E4E68 100%)",
        "text-iridescent": "linear-gradient(120deg, var(--azure-700), var(--azure-500))",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(-4deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(0,-20px,0) rotate(6deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
      transitionTimingFunction: {
        "soft-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
