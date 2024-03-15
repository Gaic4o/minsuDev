import { MarkdownViewer } from '@/components/common/markdown';
import { getPost } from '@/utils/supabase/post';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type ContentProps = { params: { id: string } };

export default async function Content({ params }: ContentProps) {
  const content = await getPost(params.id);
  if (!content) return notFound();
  return (
    <div className="flex flex-col gap-8 pb-40 pt-20">
      <h1 className="text-4xl text-white font-bold">{content.title}</h1>
      <div>
        <div className="flex flex-row flex-wrap mb-10 items-center gap-2">
          {content.tags.map(tag => (
            <Link
              href={`/tags/${tag}`}
              key={tag}
              className="rounded-md bg-slate-200 px-2 py-1 text-sm text-slate-500"
            >
              {tag}
            </Link>
          ))}
          <div className="text-sm text-gray-500">
            {format(new Date(content.created_at), 'yyyy년 M월 d일 HH:mm')}
          </div>
        </div>
        <MarkdownViewer source={content.content} className="min-w-full" />
      </div>
    </div>
  );
}
