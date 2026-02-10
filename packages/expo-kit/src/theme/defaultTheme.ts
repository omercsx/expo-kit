import { Theme, ColorScheme } from './types';
import { lightColors, darkColors, spacing, typography, borderRadius, shadows } from './tokens';

export const createTheme = (colorScheme: ColorScheme): Theme => ({
  colors: colorScheme === 'dark' ? darkColors : lightColors,
  spacing,
  typography,
  borderRadius,
  shadows,
});

export const lightTheme: Theme = createTheme('light');
export const darkTheme: Theme = createTheme('dark');
