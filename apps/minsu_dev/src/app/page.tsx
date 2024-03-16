import PostList from '@/components/common/post/list';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import styles from '../foo/layout.module.css';

export default async function Home() {
  const supabase = createClient(cookies());
  const { data } = await supabase.from('Post').select('*');
  return (
    <section className={styles.homeContainer}>
      <PostList
        initalPosts={data?.map(post => ({
          ...post,
          tags: JSON.parse(post.tags) as string[],
        }))}
      />
    </section>
  );
}
