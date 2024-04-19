import { createClient } from '@/supabase/server';
import { cookies } from 'next/headers';
import { WriteForm } from '@/foo/write/writeForm.tsx';
import { redirect } from 'next/navigation';

export default async function Write() {
  const supabase = createClient(cookies());
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }

  return <WriteForm />;
}
