import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { LoginForm } from '@/foo/login/loginForm';
import { WriteForm } from '@/foo/write/writeForm.tsx';

export default async function Write() {
  const supabase = createClient(cookies());
  const userResponse = await supabase.auth.getUser();

  return <>{!!userResponse?.data.user ? <WriteForm /> : <LoginForm />}</>;
}
