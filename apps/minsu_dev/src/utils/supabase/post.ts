import { createClient as createBrowserClient } from './client';
import { createClient as createServerClient } from './server';
import { cache } from 'react';

const initializeSupabase = () =>
  typeof window === 'undefined' ? createServerClient() : createBrowserClient();

interface GetPostsParams {
  tag?: string;
  page?: number;
}

export const getPosts = cache(async ({ tag, page = 0 }: GetPostsParams) => {
  const supabase = initializeSupabase();

  let request = supabase.from('Post').select('*');

  if (tag) request = request.like('tags', `#${tag}`);

  const { data } = await request
    .order('created_at', { ascending: false })
    .range(page, page + 10);

  return data?.map(post => ({
    ...post,
    tags: JSON.parse(post.tags) as string[],
  }));
});

export const getPost = cache(async (id: string) => {
  const supabase = initializeSupabase();

  const { data } = await supabase.from('Post').select('*').eq('id', id);

  if (!data) return null;
  return {
    ...data[0],
    tags: JSON.parse(data[0].tags) as string[],
  };
});
