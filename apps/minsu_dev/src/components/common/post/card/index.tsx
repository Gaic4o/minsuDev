import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { format } from 'date-fns';

type PostCardProps = Omit<Post, 'category' | 'tags'> & {
  className?: string;
};

const PostCard: FC<PostCardProps> = ({
  id,
  title,
  content,
  created_at,
  preview_image_url,
}) => {
  return (
    <div className="w-full px-3 pb-7.5 border-b border-[#cecfd3] mob:w-[700px]">
      <></>
    </div>
  );
};

export default PostCard;
