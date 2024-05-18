'use client';
import { useRouter } from 'next/navigation';

export const UseLayoutController = () => {
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.removeItem('email');
    router.push('/sign-in');
  };

  return { handleLogout };
};
