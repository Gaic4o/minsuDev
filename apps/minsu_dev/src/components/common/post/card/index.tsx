import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { format } from 'date-fns';
import styles from './card.module.css';

type PostCardProps = Omit<Post, 'tags'> & {
  className?: string;
};

const PostImage: FC<{ url: string; title: string }> = ({ url, title }) => (
  <div className={styles.postImageContainer}>
    <Image src={url} layout="fill" objectFit="cover" alt={title} />
  </div>
);

const PostContent: FC<{ title: string; date: string; content: string }> = ({
  title,
  date,
  content,
}) => (
  <>
    <p className={styles.postTitle}>{title}</p>
    <p className={styles.postDate}>{date}</p>
    <p className={styles.postContent}>{content}</p>
  </>
);

const PostCard: FC<PostCardProps> = ({
  id,
  title,
  content,
  created_at,
  preview_image_url,
}) => {
  const formattedDate = format(new Date(created_at), 'yyyy년 M월 d일');

  return (
    <div className={styles.postCardContainer}>
      <Link href={`/content/${id}`} passHref>
        <div className={styles.postContainer}>
          <PostImage url={preview_image_url ?? ''} title={title} />
          <PostContent title={title} date={formattedDate} content={content} />
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
