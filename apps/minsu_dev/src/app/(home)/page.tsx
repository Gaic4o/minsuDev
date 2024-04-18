import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { PostList } from '@/foo/home/list';
import styles from '@/foo/layout.module.css';

export default async function Home() {
  const supabase = createClient(cookies());
  const { data } = await supabase
    .from('Post')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <section className={styles.homeContainer}>
      <PostList
        initialPosts={data?.map(post => ({
          ...post,
          tags: JSON.parse(post.tags) as string[],
        }))}
      />
    </section>
  );
}
