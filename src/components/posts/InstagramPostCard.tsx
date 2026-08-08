import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '../ui';
import { colors, spacing } from '../../theme';

interface InstagramPostCardProps {
  caption: string;
  imageUri: string;
  isReel?: boolean;
}

export function InstagramPostCard({ caption, imageUri, isReel }: InstagramPostCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MaterialIcons name="camera-alt" size={20} color={colors.instagram} />
          <Text style={styles.platformLabel}>INSTAGRAM</Text>
        </View>
        <MaterialIcons name="more-horiz" size={22} color={colors.onSurfaceVariant} />
      </View>

      <View style={styles.mediaWrap}>
        <Image source={{ uri: imageUri }} style={styles.media} />
        <View style={styles.badge}>
          <MaterialIcons
            name={isReel ? 'movie' : 'photo-library'}
            size={18}
            color={colors.white}
          />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.actions}>
          <View style={styles.actionsLeft}>
            <MaterialIcons name="favorite-border" size={24} color={colors.onSurface} />
            <MaterialIcons name="chat-bubble-outline" size={24} color={colors.onSurface} />
            <MaterialIcons name="send" size={24} color={colors.onSurface} />
          </View>
          <MaterialIcons name="bookmark-border" size={24} color={colors.onSurface} />
        </View>
        <Text style={styles.caption}>
          <Text style={styles.username}>alex_sterling </Text>
          {caption}
        </Text>
        <Text style={styles.comments}>View all 12 comments</Text>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
  header: {
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  platformLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 0.6,
    color: colors.onSurfaceVariant,
  },
  mediaWrap: {
    aspectRatio: 1,
    position: 'relative',
    backgroundColor: colors.surfaceContainerHighest,
  },
  media: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 8,
  },
  body: {
    padding: spacing.lg,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  actionsLeft: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  caption: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: colors.onSurface,
  },
  username: {
    fontFamily: 'Inter_600SemiBold',
  },
  comments: {
    marginTop: spacing.sm,
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: colors.onSurfaceVariant,
  },
});
