'use client';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PostCard from '@/components/common/post/card';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '@/utils/supabase/post';
import { QUERY_KEYS } from '@/utils/supabase/queryKey';
import {
  FetchPostsParams,
  FetchPostsResult,
  PostListProps,
} from '@/types/post';

const fetchPosts = async ({
  tag,
  pageParam = 0,
}: FetchPostsParams): Promise<FetchPostsResult> => {
  const posts = await getPosts({ tag, page: pageParam });
  return {
    posts: posts || [],
    nextPage: posts && posts.length === 10 ? pageParam + 10 : null,
  };
};

const PostList: FC<PostListProps> = ({ tag, initalPosts }) => {
  const { ref, inView } = useInView();
  const {
    data: postPages,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.POSTS, tag],
    queryFn: ({ pageParam }) => fetchPosts({ tag, pageParam }),
    initialData: !!initalPosts
      ? {
          pages: [
            {
              posts: initalPosts,
              nextPage: initalPosts.length === 10 ? 10 : null,
            },
          ],
          pageParams: [0],
        }
      : undefined,
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextPage,
  });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="mt-1">
      {postPages?.pages
        .flatMap(page => page.posts)
        .map(post => <PostCard key={post.id} {...post} />)}
      <div ref={ref}></div>
    </div>
  );
};

export default PostList;
