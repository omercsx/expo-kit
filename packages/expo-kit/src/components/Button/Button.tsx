import React, { useRef, useMemo } from 'react';
import { Animated, Pressable, Text, ActivityIndicator, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { createButtonStyles } from './Button.styles';
import type { ButtonProps } from './Button.types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  testID,
  onPressIn,
  onPressOut,
  ...pressableProps
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createButtonStyles(theme), [theme]);

  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = (e: any) => {
    Animated.spring(scale, {
      toValue: 0.95,
      damping: 15,
      stiffness: 300,
      mass: 1,
      useNativeDriver: true,
    }).start();
    onPressIn?.(e);
  };

  const handlePressOut = (e: any) => {
    Animated.spring(scale, {
      toValue: 1,
      damping: 15,
      stiffness: 300,
      mass: 1,
      useNativeDriver: true,
    }).start();
    onPressOut?.(e);
  };

  const isDisabled = disabled || loading;
  const variantStyle = styles.variant[variant];
  const sizeStyle = styles.size[size];
  const spinnerColor = variantStyle.text.color;

  return (
    <AnimatedPressable
      testID={testID}
      disabled={isDisabled}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.base.container,
        variantStyle.container,
        sizeStyle.container,
        fullWidth && styles.base.fullWidth,
        isDisabled && styles.base.disabled,
        { transform: [{ scale }] },
        style,
      ]}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      {...pressableProps}
    >
      {loading ? (
        <ActivityIndicator color={spinnerColor} size="small" />
      ) : (
        <>
          {leftIcon && <View>{leftIcon}</View>}
          <Text style={[styles.base.text, variantStyle.text, sizeStyle.text, textStyle]}>
            {children}
          </Text>
          {rightIcon && <View>{rightIcon}</View>}
        </>
      )}
    </AnimatedPressable>
  );
};