/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "oklch(var(--background))",
          foreground: "oklch(var(--foreground))",
          destructive: "oklch(var(--destructive))",
          "destructive-foreground": "oklch(var(--destructive-foreground))",
          primary: "oklch(var(--primary))",
          "primary-foreground": "oklch(var(--primary-foreground))",
          secondary: "oklch(var(--secondary))",
          "secondary-foreground": "oklch(var(--secondary-foreground))",
          muted: "oklch(var(--muted))",
          "muted-foreground": "oklch(var(--muted-foreground))",
          border: "oklch(var(--border))",
          input: "oklch(var(--input))",
          ring: "oklch(var(--ring))",
        },
      },
    },
    plugins: [],
  }
  