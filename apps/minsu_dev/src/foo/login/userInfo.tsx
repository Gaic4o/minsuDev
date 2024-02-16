'use client';

import {FC, Fragment, useCallback} from "react";
import { useRouter } from 'next/navigation';
import {createClient} from "@/utils/supabase/client";
import {User} from "@supabase/supabase-js";

interface UserInfoProps {
    user: User;
}

const supabase = createClient();
const UserInfo: FC<UserInfoProps> = ({ user }) => {
    const router = useRouter()

    const handleLogout = useCallback(async () => {
        await supabase.auth.signOut();
        router.push('/');
    }, [router]);

    return (
        <Fragment>
            <div className={'flex flex-col gap-2'}>
                <div className={'mb-8'}>
                    <b>{user.email}</b>님 환영합니다.
                </div>
            </div>
            <button
                type={'button'}
                onClick={handleLogout}
            >
                로그아웃
            </button>
        </Fragment>
    )
}

export default UserInfo;

