'use client';

import { FC, Fragment } from 'react';
import Link from 'next/link';
import styles from './tag.module.css';

type TagProps = {
  name: string;
  id: number;
};

const Tag: FC<TagProps> = ({ name, id }) => {
  return (
    <Fragment>
      <Link href={`/posts/${id}`} passHref className={styles.button}>
        #{name}
      </Link>
    </Fragment>
  );
};

export default Tag;
