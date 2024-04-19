'use client';

import Input from '@/components/input';
import { MarkdownEditor } from '@/components/common/markdown';
import { useTags } from '@/utils/supabase/post';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRef } from 'react';
import ReactSelect from 'react-select/creatable';
import { Controller, useForm } from 'react-hook-form';
import Button from '@/components/button';
import styles from './writeForm.module.css';
import { useCreatePost } from './writeForm.hooks';

const schema = yup.object({
  title: yup.string().required('제목을 입력해주세요.'),
  tags: yup.array().min(1, '태그를 입력해주세요.'),
  content: yup.string().required('글 내용을 입력해주세요.'),
});

const WriteForm = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const { data: existingTags } = useTags();
  const createPost = useCreatePost();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      tags: [],
      content: '',
    },
  });

  // TODO: I'm not sure about the type yet.
  const onSubmit = async (data: any) => {
    await createPost({
      title: data.title,
      tags: data.tags.map((tag: any) => tag.value),
      content: data.content,
      previewImage: fileRef.current?.files?.[0],
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>글 생성하기</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input type="text" placeholder="제목" {...field} />
          )}
        />
        {errors.title && (
          <p className={styles.errorMessage}>{errors.title.message}</p>
        )}
        <Input type="file" accept="image/*" ref={fileRef} />
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <ReactSelect
              className={styles.select}
              options={(existingTags ?? []).map(tag => ({
                label: tag,
                value: tag,
              }))}
              isMulti
              onChange={e => setValue('tags', e ? e.map(x => x.value) : [])}
              placeholder="태그"
            />
          )}
        />
        {errors.tags && (
          <p className={styles.errorMessage}>{errors.tags.message}</p>
        )}

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <MarkdownEditor
              className={styles.editor}
              height={500}
              value={field.value}
              onChange={s => field.onChange(s)}
            />
          )}
        />
        {errors.content && (
          <p className={styles.errorMessage}>{errors.content.message}</p>
        )}

        <Button type={'submit'}>작성하기</Button>
      </form>
    </div>
  );
};

export default WriteForm;
