'use client';

import { FC, Fragment, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import Button from '@/components/common/button';
import styles from './userInfo.module.css';

interface UserInfoProps {
  user: User;
}

const supabase = createClient();
const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await supabase.auth.signOut();
    router.push('/');
  }, [router]);

  return (
    <Fragment>
      <div className={styles.infoContainer}>
        <b className={styles.email}>{user.email} 님 환영합니다.</b>
      </div>
      <Button type={'button'} onClick={handleLogout}>
        로그아웃
      </Button>
    </Fragment>
  );
};

export default UserInfo;
