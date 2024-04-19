'use client';

import { useForm } from 'react-hook-form';
import Button from '@/components/common/button';
import Input from '@/components/common/input';
import styles from './loginForm.module.css';
import { LoginFormInputs } from './loginForm.types';
import { useLogin } from './loginForm.hooks';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const { login } = useLogin();

  const onSubmit = (data: LoginFormInputs) => {
    login(data.email, data.password);
  };

  return (
    <div>
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
              type="password"
              placeholder={'비밀번호'}
              {...register('password', { required: true })}
            />
          </div>
          {errors.email && (
            <span className={styles.errorMessage} role="alert">
              이메일을 입력해주세요.
            </span>
          )}
          {errors.password && (
            <span className={styles.errorMessage} role="alert">
              비밀번호를 입력해주세요.
            </span>
          )}
          <Button type={'submit'} aria-label="로그인 버튼">
            로그인
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
