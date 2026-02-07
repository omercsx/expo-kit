import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { View, Text } from 'react-native';

function Greeting({ name }: { name: string }) {
  return (
    <View>
      <Text testID="greeting">Hello, {name}!</Text>
    </View>
  );
}

describe('Testing Infrastructure', () => {
  it('renders a React Native component correctly', () => {
    render(<Greeting name="Expo Kit" />);

    const greeting = screen.getByTestId('greeting');
    expect(greeting).toBeOnTheScreen();
    expect(greeting).toHaveTextContent('Hello, Expo Kit!');
  });

  it('supports snapshot testing', () => {
    const tree = render(<Greeting name="World" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
