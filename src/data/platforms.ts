import { colors } from '../theme';
import { PlatformConfig, PlatformId } from '../types';

export const PLATFORMS: PlatformConfig[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Professional reach & Networking',
    icon: 'work',
    accent: colors.primary,
    accentBg: 'rgba(128, 131, 255, 0.1)',
    accentBorder: 'rgba(128, 131, 255, 0.2)',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Visual storytelling & Lifestyle',
    icon: 'photo-camera',
    accent: colors.tertiary,
    accentBg: 'rgba(227, 100, 167, 0.1)',
    accentBorder: 'rgba(227, 100, 167, 0.2)',
  },
  {
    id: 'reddit',
    name: 'Reddit',
    description: 'Community discussion & Niche focus',
    icon: 'forum',
    accent: colors.error,
    accentBg: 'rgba(147, 0, 10, 0.1)',
    accentBorder: 'rgba(147, 0, 10, 0.2)',
  },
  {
    id: 'x',
    name: 'X',
    description: 'Real-time updates & Viral potential',
    icon: 'terminal',
    accent: colors.onSurfaceVariant,
    accentBg: 'rgba(199, 196, 215, 0.1)',
    accentBorder: 'rgba(199, 196, 215, 0.2)',
  },
];

export const DEFAULT_SELECTED: Record<PlatformId, boolean> = {
  linkedin: true,
  instagram: true,
  reddit: false,
  x: true,
};
