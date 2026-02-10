import React from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { ThemeProvider } from '../context/ThemeContext';
import { useTheme } from '../hooks/useTheme';

const ThemedExample: React.FC = () => {
  const { theme, colorScheme, toggleColorScheme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Theme System Demo</Text>

        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.colors.textSecondary }]}>Dark Mode</Text>
          <Switch value={colorScheme === 'dark'} onValueChange={toggleColorScheme} />
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.subtitle, { color: theme.colors.text }]}>Colors</Text>

        <View style={styles.colorGrid}>
          <ColorSwatch label="Primary" color={theme.colors.primary} />
          <ColorSwatch label="Secondary" color={theme.colors.secondary} />
          <ColorSwatch label="Success" color={theme.colors.success} />
          <ColorSwatch label="Error" color={theme.colors.error} />
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.subtitle, { color: theme.colors.text }]}>Spacing</Text>

        <View style={styles.spacingDemo}>
          {Object.entries(theme.spacing).map(([key, value]) => (
            <View key={key} style={styles.spacingItem}>
              <Text style={[styles.spacingLabel, { color: theme.colors.textSecondary }]}>
                {key}: {value}px
              </Text>
              <View
                style={{
                  width: value,
                  height: 20,
                  backgroundColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.sm,
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const ColorSwatch: React.FC<{ label: string; color: string }> = ({ label, color }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.colorSwatch}>
      <View
        style={[styles.colorBox, { backgroundColor: color, borderRadius: theme.borderRadius.md }]}
      />
      <Text style={[styles.colorLabel, { color: theme.colors.textSecondary }]}>{label}</Text>
    </View>
  );
};

// Usage in your app
export const ThemeExample: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedExample />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  colorSwatch: {
    alignItems: 'center',
    width: 80,
  },
  colorBox: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  colorLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  spacingDemo: {
    gap: 8,
  },
  spacingItem: {
    gap: 8,
  },
  spacingLabel: {
    fontSize: 14,
  },
});
