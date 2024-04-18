import { Post } from '@/types';

export type PostListProps = {
  tag?: string;
  initalPosts?: Post[];
};

export interface FetchPostsParams {
  tag?: string;
  pageParam?: number;
}

export interface FetchPostsResult {
  posts: Post[];
  nextPage: number | null;
}
