import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../ui';
import { assets, colors, spacing } from '../../theme';

interface LinkedInPostCardProps {
  body: string;
  hashtags: string;
}

export function LinkedInPostCard({ body, hashtags }: LinkedInPostCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const truncated = body.length > 180 && !expanded;
  const display = truncated ? `${body.slice(0, 180).trimEnd()}... ` : body;

  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MaterialIcons name="share" size={20} color={colors.linkedin} />
          <Text style={styles.platformLabel}>LINKEDIN</Text>
        </View>
        <MaterialIcons name="more-horiz" size={22} color={colors.onSurfaceVariant} />
      </View>

      <View style={styles.body}>
        <View style={styles.authorRow}>
          <Image source={{ uri: assets.avatar }} style={styles.avatar} />
          <View style={styles.authorMeta}>
            <Text style={styles.authorName}>Alex Sterling</Text>
            <Text style={styles.authorTitle}>Creative Strategist | AI Enthusiast</Text>
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>2h • </Text>
              <MaterialIcons name="public" size={14} color="rgba(199, 196, 215, 0.6)" />
            </View>
          </View>
        </View>

        <Text style={styles.postText}>
          {display}
          {truncated ? (
            <Text style={styles.seeMore} onPress={() => setExpanded(true)}>
              See more
            </Text>
          ) : null}
        </Text>
        <Text style={styles.hashtags}>{hashtags}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <TouchableOpacity style={styles.action} activeOpacity={0.7}>
            <MaterialIcons name="thumb-up-off-alt" size={18} color={colors.onSurfaceVariant} />
            <Text style={styles.actionLabel}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} activeOpacity={0.7}>
            <MaterialIcons name="chat-bubble-outline" size={18} color={colors.onSurfaceVariant} />
            <Text style={styles.actionLabel}>Comment</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendBtn} activeOpacity={0.7}>
          <MaterialIcons name="send" size={20} color={colors.primary} />
        </TouchableOpacity>
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
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  authorMeta: {
    flex: 1,
  },
  authorName: {
    fontFamily: 'Sora_600SemiBold',
    fontSize: 16,
    color: colors.onSurface,
  },
  authorTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: colors.onSurfaceVariant,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: 'rgba(199, 196, 215, 0.6)',
  },
  postText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  seeMore: {
    color: colors.primary,
    fontFamily: 'Inter_500Medium',
  },
  hashtags: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 0.6,
    color: colors.primary,
  },
  footer: {
    marginTop: 'auto',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLeft: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: colors.onSurfaceVariant,
  },
  sendBtn: {
    padding: 8,
    borderRadius: 999,
  },
});
