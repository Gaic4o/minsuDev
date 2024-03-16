import { MarkdownViewer } from '@/components/common/markdown';
import ContentComment from '@/foo/content/comment';
import { getPost } from '@/utils/supabase/post';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './id.module.css';

type ContentProps = { params: { id: string } };

export default async function Content({ params }: ContentProps) {
  const content = await getPost(params.id);
  if (!content) return notFound();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{content.title}</h2>
      <div>
        <div className={styles.contentContainer}>
          {content.tags.map(tag => (
            <Link href={`/tags/${tag}`} key={tag} className={styles.tag}>
              {tag}
            </Link>
          ))}
          <div className={styles.formatWrapper}>
            {format(new Date(content.created_at), 'yyyy년 M월 d일 HH:mm')}
          </div>
        </div>
        <MarkdownViewer source={content.content} />
      </div>

      <ContentComment />
    </div>
  );
}
