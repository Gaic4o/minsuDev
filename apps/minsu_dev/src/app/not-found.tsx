import styles from '../foo/layout.module.css';

export default function _404() {
  return (
    <div className={styles.notFoundWrapper}>
      <h2 className={styles.notFoundTitle}>찾을 수 없는 페이지입니다.</h2>
    </div>
  );
}
