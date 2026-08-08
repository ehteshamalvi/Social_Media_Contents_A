import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing } from '../theme';

export type NavTab = 'create' | 'history' | 'assets' | 'settings';

interface BottomNavBarProps {
  active: NavTab;
  onTabPress: (tab: NavTab) => void;
}

const TABS: { id: NavTab; label: string; icon: keyof typeof MaterialIcons.glyphMap }[] = [
  { id: 'create', label: 'Create', icon: 'add-circle' },
  { id: 'history', label: 'History', icon: 'history' },
  { id: 'assets', label: 'Assets', icon: 'folder-special' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];

export function BottomNavBar({ active, onTabPress }: BottomNavBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <View style={styles.row}>
        {TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.item, isActive && styles.itemActive]}
              onPress={() => onTabPress(tab.id)}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={tab.label}
            >
              <MaterialIcons
                name={tab.icon}
                size={24}
                color={isActive ? colors.primary : colors.onSurfaceVariant}
              />
              <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(32, 31, 33, 0.9)',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
    shadowColor: colors.primaryContainer,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -4 },
    elevation: 12,
  },
  row: {
    height: 80,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 64,
  },
  itemActive: {
    backgroundColor: 'rgba(128, 131, 255, 0.2)',
  },
  label: {
    marginTop: 4,
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    lineHeight: 14,
    color: colors.onSurfaceVariant,
  },
  labelActive: {
    color: colors.primary,
  },
});
