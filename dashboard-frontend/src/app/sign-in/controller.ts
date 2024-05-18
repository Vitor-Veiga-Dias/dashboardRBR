'use client';
import { set, useForm } from 'react-hook-form';
import { SignDataProps } from './types';
import { SignIn } from '@/services/users';
import { useRouter } from 'next/navigation';
import { useLocalStorage } from '@/hooks/useLocalStorage';
export const UseSignInController = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignDataProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { setValue } = useLocalStorage('email', '');

  const handleSignIn = async (data: SignDataProps) => {
    await SignIn(data);
    setValue(data.email);
    router.push('/dashboard');
  };

  return {
    handleSignIn,
    register,
    errors,
    handleSubmit,
    control,
  };
};
