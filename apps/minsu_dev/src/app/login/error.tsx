'use client';

import { useEffect } from 'react';
import styles from './login.module.css';
import { Button } from '@/components/button';

// TODO: we will add a common UI style to each page and later make the error UI different for each page.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>로그인 시도 중 실패했습니다.</h2>
      <Button className={styles.errorButton} onClick={() => reset()}>
        다시 시도하세요.
      </Button>
    </div>
  );
}
