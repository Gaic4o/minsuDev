import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { truncate } from './card.utils';
import { PostCardProps, PostContentProps, PostImageProps } from './card.type';
import styles from './card.module.css';

const PostImage: FC<PostImageProps> = ({ url, title }) => (
  <div className={styles.postImageContainer}>
    <Image src={url} layout="fill" objectFit="cover" alt={title} />
  </div>
);

const PostContent: FC<PostContentProps> = ({ title, date, content }) => (
  <>
    <h2 className={styles.postTitle}>{title}</h2>
    <time className={styles.postDate}>{date}</time>
    <p className={styles.postContent}>{truncate(content, 100)}</p>
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
    <Link href={`/content/${id}`} passHref>
      <div className={styles.postCardContainer}>
        <div className={styles.postContainer}>
          <PostImage url={preview_image_url ?? ''} title={title} />
          <PostContent title={title} date={formattedDate} content={content} />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
