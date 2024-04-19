import { useRouter } from 'next/navigation';
import { createClient } from '@/supabase/client';

const supabase = createClient();

export const useLogin = () => {
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!authData.user || error) {
      alert('로그인에 실패했습니다.');
      return false;
    } else {
      router.refresh();
      return true;
    }
  };

  return { login };
};
