import { Post } from '@/types';

export interface PostImageProps {
  url: string;
  title: string;
}

export interface PostContentProps {
  title: string;
  date: string;
  content: string;
}

export type PostCardProps = Omit<Post, 'tags'> & {
  className?: string;
};
