import {
  ThemeColors,
  ThemeSpacing,
  ThemeTypography,
  ThemeBorderRadius,
  ThemeShadows,
} from './types';

// Base color palette
const palette = {
  // Blues
  blue50: '#E3F2FD',
  blue100: '#BBDEFB',
  blue500: '#2196F3',
  blue600: '#1E88E5',
  blue700: '#1976D2',

  // Purples
  purple50: '#F3E5F5',
  purple100: '#E1BEE7',
  purple500: '#9C27B0',
  purple600: '#8E24AA',
  purple700: '#7B1FA2',

  // Greens
  green50: '#E8F5E9',
  green500: '#4CAF50',
  green600: '#43A047',

  // Oranges
  orange50: '#FFF3E0',
  orange500: '#FF9800',
  orange600: '#FB8C00',

  // Reds
  red50: '#FFEBEE',
  red500: '#F44336',
  red600: '#E53935',

  // Cyans
  cyan50: '#E0F7FA',
  cyan500: '#00BCD4',
  cyan600: '#00ACC1',

  // Grays
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',

  // Pure
  white: '#FFFFFF',
  black: '#000000',
};

// Light theme colors
export const lightColors: ThemeColors = {
  primary: palette.blue600,
  primaryLight: palette.blue100,
  primaryDark: palette.blue700,

  secondary: palette.purple600,
  secondaryLight: palette.purple100,
  secondaryDark: palette.purple700,

  success: palette.green600,
  warning: palette.orange600,
  error: palette.red600,
  info: palette.cyan600,

  background: palette.white,
  surface: palette.gray50,
  card: palette.white,

  text: palette.gray900,
  textSecondary: palette.gray700,
  textTertiary: palette.gray600,
  textInverse: palette.white,

  border: palette.gray300,
  borderLight: palette.gray200,

  disabled: palette.gray400,
  overlay: 'rgba(0, 0, 0, 0.5)',

  inputBackground: palette.white,
  inputBorder: palette.gray300,
  placeholder: palette.gray500,
};

// Dark theme colors
export const darkColors: ThemeColors = {
  primary: palette.blue500,
  primaryLight: palette.blue700,
  primaryDark: palette.blue600,

  secondary: palette.purple500,
  secondaryLight: palette.purple700,
  secondaryDark: palette.purple600,

  success: palette.green500,
  warning: palette.orange500,
  error: palette.red500,
  info: palette.cyan500,

  background: palette.gray900,
  surface: palette.gray800,
  card: palette.gray800,

  text: palette.gray50,
  textSecondary: palette.gray300,
  textTertiary: palette.gray400,
  textInverse: palette.gray900,

  border: palette.gray700,
  borderLight: palette.gray800,

  disabled: palette.gray600,
  overlay: 'rgba(0, 0, 0, 0.7)',

  inputBackground: palette.gray800,
  inputBorder: palette.gray700,
  placeholder: palette.gray500,
};

// Spacing scale (in pixels)
export const spacing: ThemeSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
};

// Typography scale
export const typography: ThemeTypography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    semiBold: 'System',
    bold: 'System',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  lineHeight: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
};

// Border radius scale
export const borderRadius: ThemeBorderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Shadow presets (iOS-style)
export const shadows: ThemeShadows = {
  none: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
};
