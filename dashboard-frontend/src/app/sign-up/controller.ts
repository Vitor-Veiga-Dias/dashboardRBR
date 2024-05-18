'use client';
import { SignUp } from '@/services/users';
import { useForm } from 'react-hook-form';
import { SignUpDataProps } from './types';
import { useRouter } from 'next/navigation';
import { UserRoleEnum } from '@/common/users/enums/userRole.enum';
export const UseSignUpController = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignUpDataProps>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: UserRoleEnum.ADMIN,
    },
  });

  const handleSignIn = async (data: SignUpDataProps) => {
    await SignUp(data);
    router.push('/sign-in');
  };

  return {
    handleSignIn,
    register,
    errors,
    handleSubmit,
    control,
  };
};
