import { Post } from '@/supabase/types';

export type PostListProps = {
  tag?: string;
  initialPosts?: Post[];
};

export interface FetchPostsParams {
  tag?: string;
  pageParam?: number;
}

export interface FetchPostsResult {
  posts: Post[];
  nextPage: number | null;
}
