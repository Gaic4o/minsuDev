'use client';
import { FC, Fragment } from 'react';
import Link from 'next/link';

type TagProps = {
  name: string;
  id: number;
};

const Tag: FC<TagProps> = ({ name, id }) => {
  return (
    <Fragment>
      <Link
        href={`/posts/${id}`}
        passHref
        className="inline-block px-2 py-1 text-sm leading-5 text-[#585888] font-medium bg-transparent rounded-full mr-3 mt-2.5 hover:text-[#3a3a5a] hover:underline"
      >
        #{name}
      </Link>
    </Fragment>
  );
};

export default Tag;
