import { LoginForm } from '@/foo/login/loginForm';
import { createClient } from '@/supabase/server';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: '/test.png',
        alt: '',
      },
    ],
  },
  twitter: {
    images: [
      {
        url: '/test.png',
        alt: '',
      },
    ],
  },
};

export default async function Login() {
  const supabase = createClient(cookies());
  const { data, error } = await supabase.auth.getUser();

  if (!error || data?.user) {
    redirect('/write');
  }

  return <LoginForm />;
}
