import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#00247d',
        'red': '#cf142b',
        'white': '#ffffff',
        'gold': '#d4af37',
        'silver': '#c0c0c0',
        'royal-blue': '#4169e1',
        'dark-navy': '#001f3f',
        'light-gold': '#f5eacb',
        'light-silver': '#e6e6e6',
        'cream': '#f8f4e4',
        'charcoal': '#333333',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(to right, #d4af37, #f5eacb, #d4af37)",
        "gradient-silver": "linear-gradient(to right, #c0c0c0, #e6e6e6, #c0c0c0)",
        "gradient-navy": "linear-gradient(135deg, #00247d, #001f3f)",
        "union-jack": "url('/images/union-jack-pattern.png')",
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
        'gold': '0 5px 15px rgba(212, 175, 55, 0.25)',
        'navy': '0 5px 15px rgba(0, 36, 125, 0.25)',
      },
      typography: {
        elegant: {
          css: {
            fontFamily: 'var(--font-inter)',
            color: '#333333',
            lineHeight: '1.6',
          },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config; 