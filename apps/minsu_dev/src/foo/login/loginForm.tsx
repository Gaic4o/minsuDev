'use client';

import {Fragment} from "react";
import {createClient} from "@/utils/supabase/client";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface LoginFormInputs {
    email: string;
    password: string;
}

const supabase = createClient()
const LoginForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();


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
        <Fragment>
            <div className={'flex flex-col gap-8'}>
                <h1 className={'text'}>로그인</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input type='text' placeholder={'이메일'} {...register('email', {required: true})}/>
                        <input type={'password'} placeholder={'비밀번호'} {...register('password', {required: true})}/>
                    </div>
                    {errors.email && <span>이메일을 입력해주세요.</span>}
                    {errors.password && <span>비밀번호를 입력해주세요.</span>}
                    <button
                        type={'submit'}
                        className="mt-4 w-full rounded-md bg-gray-800 py-2 text-white"
                    >
                        로그인
                    </button>
                </form>
            </div>
        </Fragment>
    )
}

export default LoginForm;