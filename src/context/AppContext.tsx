import React, { createContext, useContext, useMemo, useState } from 'react';
import { DEFAULT_SELECTED } from '../data/platforms';
import { generatePosts } from '../data/generatePosts';
import {
  GeneratedPosts,
  PlatformId,
  UploadedMedia,
} from '../types';

interface AppContextValue {
  media: UploadedMedia | null;
  setMedia: (media: UploadedMedia | null) => void;
  selected: Record<PlatformId, boolean>;
  togglePlatform: (id: PlatformId) => void;
  posts: GeneratedPosts | null;
  generate: () => GeneratedPosts;
  clearPosts: () => void;
  hasSelection: boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [media, setMedia] = useState<UploadedMedia | null>(null);
  const [selected, setSelected] = useState<Record<PlatformId, boolean>>(DEFAULT_SELECTED);
  const [posts, setPosts] = useState<GeneratedPosts | null>(null);

  const togglePlatform = (id: PlatformId) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const generate = () => {
    const next = generatePosts(media, selected);
    setPosts(next);
    return next;
  };

  const clearPosts = () => setPosts(null);

  const hasSelection = useMemo(
    () => Object.values(selected).some(Boolean),
    [selected],
  );

  const value = useMemo(
    () => ({
      media,
      setMedia,
      selected,
      togglePlatform,
      posts,
      generate,
      clearPosts,
      hasSelection,
    }),
    [media, selected, posts, hasSelection],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within AppProvider');
  }
  return ctx;
}
