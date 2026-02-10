import React, { createContext, useState, useEffect, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';

import type { Theme, ColorScheme, ThemeContextValue } from '../theme/types';
import { createTheme } from '../theme/defaultTheme';

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialColorScheme?: ColorScheme;
  theme?: Partial<Theme>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialColorScheme,
  theme: customTheme,
}) => {
  const systemColorScheme = useColorScheme() as ColorScheme;

  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(
    initialColorScheme || systemColorScheme || 'light',
  );

  const [theme, setTheme] = useState<Theme>(() => {
    const baseTheme = createTheme(colorScheme);

    if (customTheme) {
      return {
        ...baseTheme,
        ...customTheme,
        colors: { ...baseTheme.colors, ...customTheme.colors },
        spacing: { ...baseTheme.spacing, ...customTheme.spacing },
        typography: { ...baseTheme.typography, ...customTheme.typography },
        borderRadius: { ...baseTheme.borderRadius, ...customTheme.borderRadius },
        shadows: { ...baseTheme.shadows, ...customTheme.shadows },
      };
    }

    return baseTheme;
  });

  useEffect(() => {
    const newTheme = createTheme(colorScheme);

    if (customTheme) {
      setTheme({
        ...newTheme,
        ...customTheme,
        colors: { ...newTheme.colors, ...customTheme.colors },
        spacing: { ...newTheme.spacing, ...customTheme.spacing },
        typography: { ...newTheme.typography, ...customTheme.typography },
        borderRadius: { ...newTheme.borderRadius, ...customTheme.borderRadius },
        shadows: { ...newTheme.shadows, ...customTheme.shadows },
      });
    } else {
      setTheme(newTheme);
    }
  }, [colorScheme, customTheme]);

  const toggleColorScheme = () => {
    setColorSchemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setColorScheme = (scheme: ColorScheme) => {
    setColorSchemeState(scheme);
  };

  const value: ThemeContextValue = {
    theme,
    colorScheme,
    toggleColorScheme,
    setColorScheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
