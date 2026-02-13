export const colors = {
  primary: {
    dark: '#312e41',    // Main dark color
    DEFAULT: '#312e41',
  },
  accent: {
    cyan: '#29b5e8',    // Primary accent
    orange: '#f89551',  // Secondary accent
    gold: '#e0cb98',    // Tertiary accent
  },
  neutral: {
    light: '#f0f0ec',   // Light background
    gray: '#c6c3d5',    // Gray tones
  },
} as const;

export type ColorKey = keyof typeof colors;