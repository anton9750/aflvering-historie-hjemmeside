export interface Theme {
  mode: 'light' | 'dark';
  background: string;
  cardBackground: string;
  bannerBackground: string;
  textPrimary: string;
  textSecondary: string;
  accentGold: string;
  border: string;
  fontHeading: string;
  fontBody: string;
}

export const darkTheme: Theme = {
  mode: 'dark',
  background: '#141210',
  cardBackground: '#1f1c19',
  bannerBackground: 'rgba(31, 28, 25, 0.9)',
  textPrimary: '#f5efe3',
  textSecondary: '#c9bfae',
  accentGold: '#c8a24d',
  border: '#c8a24d',
  fontHeading: "'Playfair Display', Georgia, serif",
  fontBody: "'Cormorant Garamond', Georgia, serif",
};

export const lightTheme: Theme = {
  mode: 'light',
  background: '#f4efe6',
  cardBackground: '#ffffff',
  bannerBackground: 'rgba(255, 255, 255, 0.95)',
  textPrimary: '#2a2622',
  textSecondary: '#5c554b',
  accentGold: '#b68d40',
  border: '#b68d40',
  fontHeading: "'Playfair Display', Georgia, serif",
  fontBody: "'Cormorant Garamond', Georgia, serif",
};
