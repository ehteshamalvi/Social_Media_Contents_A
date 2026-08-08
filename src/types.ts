export type PlatformId = 'linkedin' | 'instagram' | 'reddit' | 'x';

export type MediaType = 'image' | 'video';

export interface UploadedMedia {
  uri: string;
  type: MediaType;
  name?: string;
}

export interface PlatformConfig {
  id: PlatformId;
  name: string;
  description: string;
  icon: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
}

export interface GeneratedPosts {
  linkedin?: {
    body: string;
    hashtags: string;
  };
  instagram?: {
    caption: string;
    imageUri: string;
  };
  reddit?: {
    title: string;
    body: string;
    subreddit: string;
  };
  x?: {
    body: string;
  };
}
