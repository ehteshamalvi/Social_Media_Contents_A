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
import { InstagramPostCard } from '../components/posts/InstagramPostCard';
import { LinkedInPostCard } from '../components/posts/LinkedInPostCard';
import { RedditPostCard } from '../components/posts/RedditPostCard';
import { XPostCard } from '../components/posts/XPostCard';
import { TopAppBar } from '../components/TopAppBar';
import { GradientFill } from '../components/ui';
import { useApp } from '../context/AppContext';
import { RootStackParamList } from '../navigation/types';
import { colors, spacing } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Results'>;

export function ResultsScreen({ navigation }: Props) {
  const { posts, media } = useApp();

  const hasAny =
    posts &&
    (posts.linkedin || posts.instagram || posts.reddit || posts.x);

  return (
    <View style={styles.screen}>
      <TopAppBar />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.intro}>
          <Text style={styles.heading}>Generated Results</Text>
          <Text style={styles.subtext}>
            Your AI-crafted posts are ready for review and publishing.
          </Text>
        </View>

        {!hasAny ? (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>No posts yet</Text>
            <Text style={styles.emptyText}>
              Upload content and select platforms to generate social posts.
            </Text>
            <TouchableOpacity
              style={styles.emptyBtn}
              onPress={() => navigation.navigate('Upload')}
              activeOpacity={0.85}
            >
              <Text style={styles.emptyBtnText}>Start creating</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.feed}>
            {posts?.linkedin ? (
              <LinkedInPostCard
                body={posts.linkedin.body}
                hashtags={posts.linkedin.hashtags}
              />
            ) : null}
            {posts?.instagram ? (
              <InstagramPostCard
                caption={posts.instagram.caption}
                imageUri={posts.instagram.imageUri}
                isReel={media?.type === 'video'}
              />
            ) : null}
            {posts?.x ? <XPostCard body={posts.x.body} /> : null}
            {posts?.reddit ? (
              <RedditPostCard
                title={posts.reddit.title}
                body={posts.reddit.body}
                subreddit={posts.reddit.subreddit}
              />
            ) : null}
          </View>
        )}
      </ScrollView>

      {hasAny ? (
        <TouchableOpacity
          style={styles.fab}
          activeOpacity={0.85}
          onPress={() =>
            Alert.alert(
              'Share',
              'Sharing all generated posts across connected platforms...',
            )
          }
        >
          <GradientFill style={styles.fabInner}>
            <MaterialIcons name="share" size={28} color={colors.white} />
          </GradientFill>
        </TouchableOpacity>
      ) : null}

      <BottomNavBar
        active="history"
        onTabPress={(tab) => {
          if (tab === 'create') navigation.navigate('Upload');
          if (tab === 'history') navigation.navigate('Results');
        }}
      />
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
    paddingBottom: 120,
  },
  intro: {
    marginBottom: spacing.lg,
  },
  heading: {
    fontFamily: 'Sora_600SemiBold',
    fontSize: 24,
    lineHeight: 32,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  subtext: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.onSurfaceVariant,
  },
  feed: {
    gap: spacing.lg,
  },
  empty: {
    marginTop: spacing.xl,
    alignItems: 'center',
    padding: spacing.lg,
  },
  emptyTitle: {
    fontFamily: 'Sora_600SemiBold',
    fontSize: 18,
    color: colors.onSurface,
    marginBottom: spacing.sm,
  },
  emptyText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.onSurfaceVariant,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  emptyBtn: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(192, 193, 255, 0.4)',
  },
  emptyBtnText: {
    fontFamily: 'Inter_600SemiBold',
    color: colors.primary,
  },
  fab: {
    position: 'absolute',
    right: spacing.container,
    bottom: 104,
    zIndex: 50,
  },
  fabInner: {
    width: 56,
    height: 56,
    borderRadius: 28,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
});
