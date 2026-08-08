import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme';

interface ToggleSwitchProps {
  value: boolean;
  onValueChange: (next: boolean) => void;
}

export function ToggleSwitch({ value, onValueChange }: ToggleSwitchProps) {
  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      style={styles.hit}
    >
      {value ? (
        <LinearGradient
          colors={[colors.primaryContainer, colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.track}
        >
          <View style={[styles.dot, styles.dotOn]} />
        </LinearGradient>
      ) : (
        <View style={[styles.track, styles.trackOff]}>
          <View style={[styles.dot, styles.dotOff]} />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: {
    width: 48,
    height: 24,
  },
  track: {
    width: 48,
    height: 24,
    borderRadius: 999,
    justifyContent: 'center',
  },
  trackOff: {
    backgroundColor: colors.surfaceContainerHighest,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    position: 'absolute',
  },
  dotOn: {
    right: 4,
    backgroundColor: colors.white,
  },
  dotOff: {
    left: 4,
    backgroundColor: colors.onSurfaceVariant,
  },
});
