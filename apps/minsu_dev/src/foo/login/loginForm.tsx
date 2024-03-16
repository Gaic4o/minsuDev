'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Button from '@/components/common/button';
import Input from '@/components/common/input';
import styles from './loginForm.module.css';

interface LoginFormInputs {
  email: string;
  password: string;
}

const supabase = createClient();
const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    const response = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (!response.data.user) {
      return alert('로그인에 실패했습니다.');
    }

    router.refresh();
  };

  return (
    <div className={styles.loginFormContainer}>
      <h2 className={styles.formTitle}>로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <Input
            type="text"
            className={styles.inputMargin}
            placeholder={'이메일'}
            {...register('email', { required: true })}
          />
          <Input
            type={'password'}
            placeholder={'비밀번호'}
            {...register('password', { required: true })}
          />
        </div>
        {errors.email && <span>이메일을 입력해주세요.</span>}
        {errors.password && <span>비밀번호를 입력해주세요.</span>}
        <Button type={'submit'}>로그인</Button>
      </form>
    </div>
  );
};

export default LoginForm;
