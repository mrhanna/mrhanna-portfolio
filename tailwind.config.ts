import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            colors: {
                background: {
                    '50': '#fcf8f0',
                    '100': '#f7ead5',
                    '200': '#f1d9b7',
                    '300': '#e7be8a',
                    '400': '#dc9b5b',
                    '500': '#d5813a',
                    '600': '#c66a30',
                    '700': '#a55329',
                    '800': '#844328',
                    '900': '#6b3823',
                    '950': '#391b11',
                },

                foreground: 'var(--foreground)',
            },

            animation: {
                fadeIn: 'fadeIn ease .2s',
                fadeOut: 'fadeOut ease .2s forwards',
                slideIn: 'slideIn ease .2s',
                slideOut: 'slideOut ease .2s forwards',
            },

            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeOut: {
                    from: { opacity: '1' },
                    to: { opacity: '0' },
                },
                slideIn: {
                    from: {
                        transform: 'scale(0.5) translateY(50%)',
                        opacity: '0',
                    },
                    to: { transform: 'scale(1) translateY(0)', opacity: '1' },
                },
                slideOut: {
                    from: { transform: 'scale(1) translateY(0)', opacity: '1' },
                    to: {
                        transform: 'scale(0.5) translateY(50%)',
                        opacity: '0',
                    },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
