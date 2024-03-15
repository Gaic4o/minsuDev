import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { format } from 'date-fns';

type PostCardProps = Omit<Post, 'tags'> & {
  className?: string;
};

const PostImage: FC<{ url: string; title: string }> = ({ url, title }) => (
  <div
    className="border border-[#e0e0e0] rounded-lg mt-10 relative overflow-hidden w-full mob:h-64"
    style={{ aspectRatio: '1.8 / 1' }}
  >
    <Image src={url} layout="fill" objectFit="cover" alt={title} />
  </div>
);

const PostContent: FC<{ title: string; date: string; content: string }> = ({
  title,
  date,
  content,
}) => (
  <>
    <h2 className="text-2xl text-thinGray100 font-bold mt-4 mb-2 break-words">
      {title}
    </h2>
    <p className="text-sm text-thinGray300 mt-1.25 mb-0.5 mob:text-xs">
      {date}
    </p>
    <p className="text-thinGray400 text-lg mt-2.5 mb-5 mob:text-base">
      {content}
    </p>
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
    <div className="w-full px-3 pb-7.5 border-b border-[#cecfd3] mob:w-[700px]">
      <Link href={`/content/${id}`} passHref>
        <div className="cursor-pointer">
          <PostImage url={preview_image_url ?? ''} title={title} />
          <PostContent title={title} date={formattedDate} content={content} />
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
