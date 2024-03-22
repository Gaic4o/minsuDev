import WriteForm from '@/foo/write/form';
import LoginForm from '@/foo/login/loginForm';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import styles from './write.module.css';

export default async function Write() {
  const supabase = createClient(cookies());
  const userResponse = await supabase.auth.getUser();

  return (
    <>
      {!!userResponse?.data.user ? (
        <WriteForm />
      ) : (
        <div className={styles.loginContainer}>
          <LoginForm />
        </div>
      )}
    </>
  );
}
