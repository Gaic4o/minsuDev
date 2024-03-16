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
  const { push } = useRouter();

  const handleLogout = useCallback(async () => {
    await supabase.auth.signOut();
    push('/');
  }, [push]);

  return (
    <>
      <div className={styles.infoContainer}>
        <b className={styles.email}>{user.email} 님 환영합니다.</b>
      </div>
      <Button type="button" onClick={handleLogout}>
        로그아웃
      </Button>
    </>
  );
};

export default UserInfo;
