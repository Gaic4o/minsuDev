import { MarkdownViewer } from '@/components/markdown';
import ContentComment from '@/foo/content/comment';
import { getPost } from '@/supabase/post';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './id.module.css';
import { FC } from 'react';
import { Metadata } from 'next';

type ContentProps = { params: { id: string } };

export const generateMetadata = async ({
  params,
}: ContentProps): Promise<Metadata> => {
  const content = await getPost(params.id);

  return {
    title: content?.title,
    description: `${content?.tags} 관한 블로그 포스트 글 입니다.`,
  };
};

const TagList: FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <>
      {tags.map(tag => (
        <Link href={`/tags/${tag}`} key={tag} className={styles.tag}>
          {tag}
        </Link>
      ))}
    </>
  );
};

const FormattedDate: FC<{ dateString: string }> = ({ dateString }) => {
  return (
    <div className={styles.formatWrapper}>
      {format(new Date(dateString), 'yyyy년 M월 d일 HH:mm')}
    </div>
  );
};

const MetaInfo: FC<{ tags: string[]; dateString: string }> = ({
  tags,
  dateString,
}) => (
  <div className={styles.metaContainer}>
    <TagList tags={tags} />
    <FormattedDate dateString={dateString} />
  </div>
);

export default async function Content({ params }: ContentProps) {
  const content = await getPost(params.id);
  if (!content) return notFound();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{content.title}</h2>
      <MetaInfo tags={content.tags} dateString={content.created_at} />
      <MarkdownViewer source={content.content} />
      <ContentComment />
    </div>
  );
}
