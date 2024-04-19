import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link className={styles.title} prefetch href={'/'} passHref>
          minsuDev
        </Link>
      </h1>
      <div>
        <Link
          href="https://github.com/Gaic4o"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Github
        </Link>
      </div>
    </header>
  );
};
export default Header;
