import WriteForm from '@/foo/write/form';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { Login } from '@/foo/login';

export default async function Write() {
  const supabase = createClient(cookies());
  const userResponse = await supabase.auth.getUser();

  return <>{!!userResponse?.data.user ? <WriteForm /> : <Login />}</>;
}
