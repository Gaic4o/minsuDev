'use client';

import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './list.module.css';
import { PostCard } from '@/components/common/post/card';
import { useInfinitePosts } from './list.hooks';
import { PostListProps } from './list.types';

const PostList: FC<PostListProps> = ({ tag, initialPosts }) => {
  const { ref, inView } = useInView();
  const {
    data: postPages,
    fetchNextPage,
    hasNextPage,
    // @ts-ignore useInfiniteQuery query type added later
  } = useInfinitePosts(tag, initialPosts);

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className={styles.postListContainer}>
      {postPages?.pages
        .flatMap(page => page.posts)
        .map(post => <PostCard key={post.id} {...post} />)}
      <div ref={ref}></div>
    </div>
  );
};

export default PostList;
