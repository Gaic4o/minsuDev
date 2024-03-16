import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import UserInfo from '@/foo/login/userInfo';
import LoginForm from '@/foo/login/loginForm';
import styles from './login.module.css';

export default async function Login() {
  const supabase = createClient(cookies());
  const userResponse = await supabase.auth.getUser();

  return (
    <div className={styles.container}>
      {!!userResponse?.data.user ? (
        <UserInfo user={userResponse.data.user} />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
