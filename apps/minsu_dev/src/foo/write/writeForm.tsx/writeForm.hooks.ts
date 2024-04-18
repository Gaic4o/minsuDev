import { useRouter } from 'next/navigation';
import { CreatePostData } from './writeForm.types';

export const useCreatePost = () => {
  const router = useRouter();

  const createPost = async ({
    title,
    tags,
    content,
    previewImage,
  }: CreatePostData) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('tags', JSON.stringify(tags));
    formData.append('content', content);

    if (previewImage) {
      formData.append('preview_image', previewImage);
    }

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.id) {
        router.push(`/posts/${result.id}`);
      } else {
        throw new Error('글 생성에 실패했습니다.');
      }
    } catch (error) {
      console.error('글 생성 중 에러가 발생했습니다:', error);
      throw new Error('글 생성 중 에러가 발생했습니다.');
    }
  };

  return createPost;
};
