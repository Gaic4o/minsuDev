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
  const { refresh } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const handleLogin = async (data: LoginFormInputs) => {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (!authData.user || error) {
      alert('로그인에 실패했습니다.');
      return;
    }

    refresh();
  };

  return (
    <div className={styles.loginFormContainer}>
      <h2 className={styles.formTitle}>로그인</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className={styles.inputContainer}>
          <Input
            type="text"
            className={styles.inputMargin}
            placeholder={'이메일'}
            {...register('email', { required: true })}
          />
          <Input
            type="password"
            placeholder={'비밀번호'}
            {...register('password', { required: true })}
          />
        </div>
        {errors.email && (
          <span className={styles.errorMessage}>이메일을 입력해주세요.</span>
        )}
        {errors.password && (
          <span className={styles.errorMessage}>비밀번호를 입력해주세요.</span>
        )}
        <Button type={'submit'}>로그인</Button>
      </form>
    </div>
  );
};

export default LoginForm;
