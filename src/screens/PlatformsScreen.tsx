import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BottomNavBar } from '../components/BottomNavBar';
import { ToggleSwitch } from '../components/ToggleSwitch';
import { TopAppBar } from '../components/TopAppBar';
import { GlassCard, GradientFill } from '../components/ui';
import { useApp } from '../context/AppContext';
import { PLATFORMS } from '../data/platforms';
import { RootStackParamList } from '../navigation/types';
import { colors, radii, spacing } from '../theme';
import { PlatformId } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Platforms'>;

const ICON_MAP: Record<string, keyof typeof MaterialIcons.glyphMap> = {
  work: 'work',
  'photo-camera': 'photo-camera',
  forum: 'forum',
  terminal: 'code',
};

export function PlatformsScreen({ navigation }: Props) {
  const { selected, togglePlatform, generate, hasSelection, media } = useApp();

  const onGenerate = () => {
    if (!hasSelection) {
      Alert.alert('Select a platform', 'Choose at least one platform to generate posts.');
      return;
    }
    if (!media) {
      Alert.alert('No media', 'Upload an image or reel first.', [
        { text: 'Upload', onPress: () => navigation.navigate('Upload') },
        { text: 'Cancel', style: 'cancel' },
      ]);
      return;
    }
    generate();
    navigation.navigate('Results');
  };

  return (
    <View style={styles.screen}>
      <TopAppBar />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.intro}>
          <Text style={styles.heading}>Select Platforms</Text>
          <Text style={styles.subtext}>
            Choose where your creative spark should land today. Each platform is optimized for
            reach.
          </Text>
        </View>

        <View style={styles.list}>
          {PLATFORMS.map((platform) => {
            const isOn = selected[platform.id as PlatformId];
            return (
              <GlassCard key={platform.id} style={styles.card} highlighted={isOn}>
                <View style={styles.cardInner}>
                  <TouchableOpacity
                    style={styles.cardLeft}
                    activeOpacity={0.85}
                    onPress={() => togglePlatform(platform.id)}
                  >
                    <View
                      style={[
                        styles.iconWrap,
                        {
                          backgroundColor: platform.accentBg,
                          borderColor: platform.accentBorder,
                        },
                      ]}
                    >
                      <MaterialIcons
                        name={ICON_MAP[platform.icon] ?? 'apps'}
                        size={28}
                        color={platform.accent}
                      />
                    </View>
                    <View style={styles.cardText}>
                      <Text style={styles.platformName}>{platform.name}</Text>
                      <Text style={styles.platformDesc}>{platform.description}</Text>
                    </View>
                  </TouchableOpacity>
                  <ToggleSwitch
                    value={isOn}
                    onValueChange={() => togglePlatform(platform.id)}
                  />
                </View>
              </GlassCard>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.generateWrap}
          onPress={onGenerate}
          activeOpacity={0.9}
        >
          <GradientFill style={styles.generateBtn}>
            <Text style={styles.generateText}>Generate Posts</Text>
            <MaterialIcons name="auto-awesome" size={22} color={colors.onPrimary} />
          </GradientFill>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavBar
        active="create"
        onTabPress={(tab) => {
          if (tab === 'history') navigation.navigate('Results');
          if (tab === 'create') navigation.navigate('Upload');
        }}
      />

      <View style={styles.glowTop} pointerEvents="none" />
      <View style={styles.glowBottom} pointerEvents="none" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.container,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    maxWidth: 640,
    width: '100%',
    alignSelf: 'center',
  },
  intro: {
    marginBottom: spacing.xl,
  },
  heading: {
    fontFamily: 'Sora_600SemiBold',
    fontSize: 24,
    lineHeight: 32,
    color: colors.onSurface,
    marginBottom: spacing.sm,
  },
  subtext: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: colors.onSurfaceVariant,
  },
  list: {
    gap: spacing.md,
  },
  card: {
    borderRadius: radii.lg,
  },
  cardInner: {
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flex: 1,
    paddingRight: spacing.md,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    flex: 1,
  },
  platformName: {
    fontFamily: 'Sora_600SemiBold',
    fontSize: 18,
    lineHeight: 28,
    color: colors.onSurface,
  },
  platformDesc: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    lineHeight: 14,
    color: colors.onSurfaceVariant,
  },
  generateWrap: {
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },
  generateBtn: {
    width: '100%',
    paddingVertical: 16,
    flexDirection: 'row',
    gap: spacing.sm,
    shadowColor: colors.primaryContainer,
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  generateText: {
    fontFamily: 'Sora_700Bold',
    fontSize: 16,
    color: colors.onPrimary,
  },
  glowTop: {
    position: 'absolute',
    top: '-10%',
    right: '-10%',
    width: '50%',
    height: '50%',
    borderRadius: 999,
    backgroundColor: 'rgba(192, 193, 255, 0.05)',
    zIndex: -1,
  },
  glowBottom: {
    position: 'absolute',
    bottom: '-10%',
    left: '-10%',
    width: '40%',
    height: '40%',
    borderRadius: 999,
    backgroundColor: 'rgba(68, 226, 205, 0.05)',
    zIndex: -1,
  },
});
