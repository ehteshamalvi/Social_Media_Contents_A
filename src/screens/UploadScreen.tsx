import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BottomNavBar } from '../components/BottomNavBar';
import { TopAppBar } from '../components/TopAppBar';
import { GlassCard } from '../components/ui';
import { useApp } from '../context/AppContext';
import { RootStackParamList } from '../navigation/types';
import { assets, colors, radii, spacing } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Upload'>;

export function UploadScreen({ navigation }: Props) {
  const { setMedia } = useApp();

  const goWithMedia = (
    uri: string,
    type: 'image' | 'video',
    name?: string,
  ) => {
    setMedia({ uri, type, name });
    navigation.navigate('Platforms');
  };

  const pickMedia = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert(
        'Permission needed',
        'Allow photo library access to upload an image or reel.',
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      quality: 0.9,
      allowsEditing: false,
    });

    if (!result.canceled && result.assets[0]) {
      const asset = result.assets[0];
      const type = asset.type === 'video' ? 'video' : 'image';
      goWithMedia(asset.uri, type, asset.fileName ?? undefined);
    }
  };

  const selectRecent = (uri: string) => {
    goWithMedia(uri, 'image', 'recent-asset.jpg');
  };

  return (
    <View style={styles.screen}>
      <TopAppBar />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.intro}>
          <Text style={styles.heading}>Upload your content</Text>
          <Text style={styles.subtext}>
            Share your latest masterpiece with the world. Drag and drop or browse your local
            files.
          </Text>
        </View>

        <GlassCard style={styles.uploadCard}>
          <TouchableOpacity
            style={styles.uploadDashed}
            onPress={pickMedia}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Click to browse files"
          >
            <View style={styles.plusCircle}>
              <MaterialIcons name="add" size={36} color={colors.primary} />
            </View>
            <Text style={styles.uploadTitle}>Click to browse</Text>
            <Text style={styles.uploadHint}>MP4, MOV, or WEBM (Max. 2GB)</Text>
          </TouchableOpacity>
        </GlassCard>

        <View style={styles.quickSelect}>
          <TouchableOpacity
            style={styles.libraryBtn}
            onPress={pickMedia}
            activeOpacity={0.85}
          >
            <MaterialIcons name="folder-open" size={20} color={colors.primary} />
            <Text style={styles.libraryLabel}>Select from library</Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.dividerLabel}>RECENT ASSETS</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.recentGrid}>
            {assets.recent.map((uri) => (
              <TouchableOpacity
                key={uri}
                style={styles.recentItem}
                onPress={() => selectRecent(uri)}
                activeOpacity={0.85}
              >
                <Image source={{ uri }} style={styles.recentImage} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
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
    alignItems: 'center',
  },
  intro: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    maxWidth: 420,
  },
  heading: {
    fontFamily: 'Sora_600SemiBold',
    fontSize: 24,
    lineHeight: 32,
    color: colors.onSurface,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  subtext: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: colors.onSurfaceVariant,
    textAlign: 'center',
  },
  uploadCard: {
    width: '100%',
    maxWidth: 640,
    aspectRatio: 16 / 9,
    borderRadius: radii.xxl,
    padding: spacing.md,
  },
  uploadDashed: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.primaryContainer,
    borderStyle: 'dashed',
    borderRadius: radii.xxl,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  plusCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(128, 131, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  uploadTitle: {
    fontFamily: 'Sora_600SemiBold',
    fontSize: 24,
    lineHeight: 32,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  uploadHint: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.onSurfaceVariant,
  },
  quickSelect: {
    marginTop: spacing.xl,
    width: '100%',
    maxWidth: 420,
    gap: spacing.md,
    alignItems: 'center',
  },
  libraryBtn: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: colors.glass,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  libraryLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 0.6,
    color: colors.onSurface,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: spacing.md,
    gap: spacing.md,
  },
  divider: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  dividerLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    letterSpacing: 2,
    color: colors.onSurfaceVariant,
  },
  recentGrid: {
    flexDirection: 'row',
    gap: spacing.sm,
    width: '100%',
  },
  recentItem: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: radii.lg,
    overflow: 'hidden',
    backgroundColor: colors.glass,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  recentImage: {
    width: '100%',
    height: '100%',
  },
  glowTop: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'rgba(192, 193, 255, 0.05)',
    zIndex: -1,
  },
  glowBottom: {
    position: 'absolute',
    bottom: 40,
    left: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(68, 226, 205, 0.05)',
    zIndex: -1,
  },
});
