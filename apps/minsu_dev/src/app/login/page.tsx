import { LoginForm } from '@/foo/login/loginForm';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Login() {
  const supabase = createClient(cookies());
  const { data, error } = await supabase.auth.getUser();

  if (!error || data?.user) {
    redirect('/write');
  }

  return <LoginForm />;
}
