import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { assets, colors, spacing } from '../theme';

interface TopAppBarProps {
  onMenuPress?: () => void;
}

export function TopAppBar({ onMenuPress }: TopAppBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top }]}>
      <View style={styles.bar}>
        <View style={styles.left}>
          <TouchableOpacity
            onPress={onMenuPress}
            style={styles.menuBtn}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel="Open menu"
          >
            <MaterialIcons name="menu" size={24} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.title}>Creator Workspace</Text>
        </View>
        <View style={styles.avatarRing}>
          <Image source={{ uri: assets.avatar }} style={styles.avatar} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(19, 19, 21, 0.8)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    zIndex: 50,
  },
  bar: {
    height: 64,
    paddingHorizontal: spacing.container,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flex: 1,
  },
  menuBtn: {
    padding: spacing.sm,
    borderRadius: 8,
  },
  title: {
    fontFamily: 'Sora_600SemiBold',
    fontSize: 24,
    lineHeight: 32,
    color: colors.primary,
    letterSpacing: -0.5,
  },
  avatarRing: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(192, 193, 255, 0.2)',
    padding: 2,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
});
