import { StyleSheet } from 'react-native';
import type { Theme } from '../../theme/types';
import type { ButtonVariant, ButtonSize } from './Button.types';

export const createButtonStyles = (theme: Theme) => {
  const base = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.spacing.sm,
      borderWidth: 1,
      gap: theme.spacing.xs,
    },
    text: {
      fontWeight: '600',
    },
    fullWidth: {
      width: '100%',
    },
    disabled: {
      opacity: 0.5,
    },
  });

  const variant: Record<ButtonVariant, { container: any; text: any }> = {
    primary: {
      container: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
      },
      text: { color: theme.colors.textInverse },
    },
    secondary: {
      container: {
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.secondary,
      },
      text: { color: theme.colors.textInverse },
    },
    outline: {
      container: {
        backgroundColor: 'transparent',
        borderColor: theme.colors.border,
      },
      text: { color: theme.colors.text },
    },
    ghost: {
      container: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      text: { color: theme.colors.primary },
    },
    danger: {
      container: {
        backgroundColor: theme.colors.error,
        borderColor: theme.colors.error,
      },
      text: { color: theme.colors.textInverse },
    },
  };

  const size: Record<ButtonSize, { container: any; text: any }> = {
    sm: {
      container: {
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.md,
        minHeight: 32,
      },
      text: { fontSize: theme.typography.fontSize.sm },
    },
    md: {
      container: {
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.lg,
        minHeight: 44,
      },
      text: { fontSize: theme.typography.fontSize.md },
    },
    lg: {
      container: {
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.xl,
        minHeight: 52,
      },
      text: { fontSize: theme.typography.fontSize.lg },
    },
  };

  return { base, variant, size };
};