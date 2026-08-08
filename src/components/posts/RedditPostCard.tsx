import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '../ui';
import { colors, spacing } from '../../theme';

interface RedditPostCardProps {
  title: string;
  body: string;
  subreddit: string;
}

export function RedditPostCard({ title, body, subreddit }: RedditPostCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MaterialIcons name="forum" size={20} color={colors.reddit} />
          <Text style={styles.platformLabel}>REDDIT</Text>
        </View>
        <MaterialIcons name="more-horiz" size={22} color={colors.onSurfaceVariant} />
      </View>

      <View style={styles.body}>
        <View style={styles.metaRow}>
          <View style={styles.subIcon}>
            <Text style={styles.subIconText}>r/</Text>
          </View>
          <Text style={styles.subreddit}>{subreddit}</Text>
          <Text style={styles.postedBy}> • Posted by u/sterl_dev</Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.snippet}>
          <Text style={styles.snippetText} numberOfLines={3}>
            {body}
          </Text>
        </View>

        <View style={styles.actions}>
          <View style={styles.votes}>
            <MaterialIcons name="arrow-upward" size={18} color={colors.onSurfaceVariant} />
            <Text style={styles.voteCount}>1.2k</Text>
            <MaterialIcons name="arrow-downward" size={18} color={colors.onSurfaceVariant} />
          </View>
          <View style={styles.action}>
            <MaterialIcons name="chat-bubble-outline" size={20} color={colors.onSurfaceVariant} />
            <Text style={styles.actionLabel}>84 Comments</Text>
          </View>
          <View style={styles.action}>
            <MaterialIcons name="card-giftcard" size={20} color={colors.onSurfaceVariant} />
            <Text style={styles.actionLabel}>Award</Text>
          </View>
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
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
    flexWrap: 'wrap',
  },
  subIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(192, 193, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
  subIconText: {
    fontSize: 10,
    fontFamily: 'Inter_700Bold',
    color: colors.primary,
  },
  subreddit: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: colors.onSurface,
  },
  postedBy: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: colors.onSurfaceVariant,
  },
  title: {
    fontFamily: 'Sora_600SemiBold',
    fontSize: 24,
    lineHeight: 32,
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  snippet: {
    backgroundColor: colors.surfaceContainer,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  snippetText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.onSurfaceVariant,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    flexWrap: 'wrap',
  },
  votes: {
    backgroundColor: colors.surfaceContainerHighest,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    gap: spacing.sm,
  },
  voteCount: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: colors.onSurface,
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
});
