import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { ThemeProvider, useTheme, Button } from '@expo-kit/ui';

function ButtonShowcase() {
  const { theme, colorScheme, toggleColorScheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const handleAsync = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      contentContainerStyle={styles.container}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Button Component
      </Text>

      <Button variant="outline" size="sm" onPress={toggleColorScheme}>
        Toggle {colorScheme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>

      <Text style={[styles.section, { color: theme.colors.text }]}>Variants</Text>
      {(['primary', 'secondary', 'outline', 'ghost', 'danger'] as const).map((v) => (
        <Button key={v} variant={v} onPress={() => Alert.alert(`${v} pressed`)}>
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </Button>
      ))}

      <Text style={[styles.section, { color: theme.colors.text }]}>Sizes</Text>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <Button key={s} size={s} onPress={() => {}}>
          Size: {s}
        </Button>
      ))}

      <Text style={[styles.section, { color: theme.colors.text }]}>States</Text>
      <Button loading={loading} onPress={handleAsync}>
        {loading ? 'Loading...' : 'Tap for Loading State'}
      </Button>
      <Button disabled>Disabled Button</Button>
      <Button fullWidth>Full Width Button</Button>
    </ScrollView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ButtonShowcase />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, gap: 12 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  section: { fontSize: 18, fontWeight: '600', marginTop: 16 },
});