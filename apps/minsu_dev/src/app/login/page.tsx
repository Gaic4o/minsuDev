import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import UserInfo from '@/foo/login/userInfo';
import LoginForm from '@/foo/login/loginForm';

export default async function Login() {
  const supabase = createClient(cookies());
  const userResponse = await supabase.auth.getUser();

  return (
    <div className={'container flex flex-col pb-20 pt-12'}>
      {!!userResponse?.data.user ? (
        <UserInfo user={userResponse.data.user} />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
