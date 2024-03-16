import Link from 'next/link';
import { FC } from 'react';
import styles from './footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://github.com/Gaic4o"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        ©MinsuKim
      </Link>
    </footer>
  );
};

export default Footer;
