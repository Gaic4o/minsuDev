import PostList from '@/components/common/post/list';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Home() {
  const supabase = createClient(cookies());
  const { data } = await supabase.from('Post').select('*');
  return (
    <section className="flex flex-col items-center">
      <PostList
        initalPosts={data?.map(post => ({
          ...post,
          tags: JSON.parse(post.tags) as string[],
        }))}
      />
    </section>
  );
}
