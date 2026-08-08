import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors, radii } from '../theme';

interface GradientButtonProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function GradientFill({ children, style }: GradientButtonProps) {
  return (
    <LinearGradient
      colors={[colors.primaryContainer, colors.secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
}

export function GlassCard({
  children,
  style,
  highlighted,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
  highlighted?: boolean;
}) {
  return (
    <View
      style={[
        styles.glass,
        highlighted && styles.glassHighlight,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glass: {
    backgroundColor: colors.glass,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    borderRadius: radii.lg,
  },
  glassHighlight: {
    borderColor: 'rgba(192, 193, 255, 0.3)',
  },
});
