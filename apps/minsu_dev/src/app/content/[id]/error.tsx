'use client';

import { useEffect } from 'react';
import styles from './id.module.css';

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
      <h2 className={styles.errorTitle}>
        Post Content를 가져오는 중 에러가 발생했습니다.
      </h2>
      <button className={styles.errorButton} onClick={() => reset()}>
        다시 시도하세요.
      </button>
    </div>
  );
}
