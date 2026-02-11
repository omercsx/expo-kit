import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { ThemeProvider, useTheme, Button } from '@expo-kit/ui';

function ButtonShowcase() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ButtonShowcase />
    </ThemeProvider>
  );
}
