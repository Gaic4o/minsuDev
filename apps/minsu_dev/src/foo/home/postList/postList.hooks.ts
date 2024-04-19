import { getPosts } from '@/utils/supabase/post';
import { QUERY_KEYS } from '@/utils/supabase/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';
import { FetchPostsParams, FetchPostsResult } from './postList.types';

export const fetchPosts = async ({
  tag,
  pageParam = 0,
}: FetchPostsParams): Promise<FetchPostsResult> => {
  const posts = await getPosts({ tag, page: pageParam });
  return {
    posts: posts || [],
    nextPage: posts && posts.length === 10 ? pageParam + 10 : null,
  };
};

export const useInfinitePosts = (
  tag: string,
  initialPosts?: FetchPostsResult['posts'],
) => {
  // @ts-ignore useInfiniteQuery query type added later
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.POSTS, tag],
    queryFn: ({ pageParam }) => fetchPosts({ tag, pageParam }),
    initialData: initialPosts
      ? {
          pages: [
            {
              posts: initialPosts,
              nextPage: initialPosts.length === 10 ? 10 : null,
            },
          ],
          pageParams: [0],
        }
      : undefined,
    getNextPageParam: lastPage => lastPage.nextPage,
  });
};
