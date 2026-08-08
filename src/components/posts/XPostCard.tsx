import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '../ui';
import { assets, colors, spacing } from '../../theme';

interface XPostCardProps {
  body: string;
}

export function XPostCard({ body }: XPostCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MaterialIcons name="close" size={20} color={colors.onSurface} />
          <Text style={styles.platformLabel}>X (TWITTER)</Text>
        </View>
        <MaterialIcons name="more-horiz" size={22} color={colors.onSurfaceVariant} />
      </View>

      <View style={styles.body}>
        <View style={styles.authorRow}>
          <Image source={{ uri: assets.avatar }} style={styles.avatar} />
          <View>
            <View style={styles.nameRow}>
              <Text style={styles.authorName}>Alex Sterling</Text>
              <MaterialIcons name="verified" size={16} color={colors.primary} />
            </View>
            <Text style={styles.handle}>@sterl_design</Text>
          </View>
        </View>

        <Text style={styles.postText}>{body}</Text>

        <View style={styles.metrics}>
          <View style={styles.metric}>
            <MaterialIcons name="chat-bubble-outline" size={20} color={colors.onSurfaceVariant} />
            <Text style={styles.metricText}>42</Text>
          </View>
          <View style={styles.metric}>
            <MaterialIcons name="repeat" size={20} color={colors.onSurfaceVariant} />
            <Text style={styles.metricText}>128</Text>
          </View>
          <View style={styles.metric}>
            <MaterialIcons name="favorite-border" size={20} color={colors.onSurfaceVariant} />
            <Text style={styles.metricText}>2.4k</Text>
          </View>
          <MaterialIcons name="share" size={20} color={colors.onSurfaceVariant} />
        </View>
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
  body: {
    padding: spacing.lg,
  },
  authorRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  authorName: {
    fontFamily: 'Sora_600SemiBold',
    fontSize: 16,
    color: colors.onSurface,
  },
  handle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: colors.onSurfaceVariant,
  },
  postText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    lineHeight: 28,
    color: colors.onSurface,
    marginBottom: spacing.lg,
  },
  metrics: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.md,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metricText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: colors.onSurfaceVariant,
  },
});
