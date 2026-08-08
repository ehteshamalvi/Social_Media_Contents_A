import { assets } from '../theme';
import { GeneratedPosts, PlatformId, UploadedMedia } from '../types';

export function generatePosts(
  media: UploadedMedia | null,
  selected: Record<PlatformId, boolean>,
): GeneratedPosts {
  const imageUri = media?.uri ?? assets.workspace;
  const isReel = media?.type === 'video';
  const posts: GeneratedPosts = {};

  if (selected.linkedin) {
    posts.linkedin = {
      body: isReel
        ? "I just published a short reel breaking down how generative UI accelerates high-scale production. The impact on creative workflow is absolutely game-changing.\n\nIf you're still doing manual iterations, you're falling behind the curve. Efficiency isn't just about speed; it's about freedom to focus on..."
        : "I just discovered how to leverage generative UI for high-scale production. The impact on workflow is absolutely game-changing.\n\nIf you're still doing manual iterations, you're falling behind the curve. Efficiency isn't just about speed; it's about freedom to focus on...",
      hashtags: '#FutureOfWork #CreativeTech #AI',
    };
  }

  if (selected.instagram) {
    posts.instagram = {
      caption: isReel
        ? 'The vibe is immaculate. Dropping a new reel — reimagining the workspace with AI tools. ✨'
        : 'The vibe is immaculate. Reimagining the workspace with AI tools. ✨',
      imageUri,
    };
  }

  if (selected.reddit) {
    posts.reddit = {
      title: isReel
        ? 'How I turned one reel into multi-platform content with AI [Full Guide]'
        : 'How I integrated AI into my design workflow without losing my soul. [Full Guide]',
      body: 'Over the past 6 months, I\'ve been experimenting with various LLMs and generative design tools. The goal was simple: automate the grunt work, maximize the creativity. Here\'s a breakdown of the results and the specific tech stack I used...',
      subreddit: 'r/creators',
    };
  }

  if (selected.x) {
    posts.x = {
      body: isReel
        ? "AI is not replacing the creator; it's empowering the architect of ideas. Just shipped a new reel — stop fighting the tools, start building the future. 🚀\n\n#GenAI #DesignSystem #Web3"
        : "AI is not replacing the creator; it's empowering the architect of ideas. Stop fighting the tools, start building the future. 🚀\n\n#GenAI #DesignSystem #Web3",
    };
  }

  return posts;
}
