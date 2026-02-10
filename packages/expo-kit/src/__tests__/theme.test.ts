import { createTheme, lightTheme, darkTheme } from '../theme/defaultTheme';
import { lightColors, darkColors } from '../theme/tokens';

describe('Theme System', () => {
  describe('createTheme', () => {
    it('should create a light theme', () => {
      const theme = createTheme('light');
      expect(theme.colors).toEqual(lightColors);
    });

    it('should create a dark theme', () => {
      const theme = createTheme('dark');
      expect(theme.colors).toEqual(darkColors);
    });
  });

  describe('Default Themes', () => {
    it('should have lightTheme defined', () => {
      expect(lightTheme).toBeDefined();
      expect(lightTheme.colors.background).toBe('#FFFFFF');
    });

    it('should have darkTheme defined', () => {
      expect(darkTheme).toBeDefined();
      expect(darkTheme.colors.background).toBe('#212121');
    });
  });

  describe('Theme Structure', () => {
    it('should have all required properties', () => {
      expect(lightTheme).toHaveProperty('colors');
      expect(lightTheme).toHaveProperty('spacing');
      expect(lightTheme).toHaveProperty('typography');
      expect(lightTheme).toHaveProperty('borderRadius');
      expect(lightTheme).toHaveProperty('shadows');
    });
  });
});
