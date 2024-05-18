'use client';
import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { UseSignInController } from './controller';
import { SignDataProps } from './types';
import { Form, useForm } from 'react-hook-form';
import Link from 'next/link';

const SignIn = () => {
  const { errors, handleSignIn, handleSubmit, register, control } =
    UseSignInController();

  return (
    <Stack spacing={4} justifyContent="center" marginTop="100px">
      <Form control={control} onSubmit={(data) => handleSignIn(data.data)}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Entre na sua conta</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            para gerenciar sua <Link href="#">empresa</Link> ✌️
          </Text>
        </Stack>
        <FormControl id="email" isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...register('email', { required: 'Email é obrigatório' })}
          />
          {errors.email && <Text color="red.500">{errors.email.message}</Text>}
        </FormControl>
        <FormControl id="password" isInvalid={!!errors.password}>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            {...register('password', { required: 'Senha é obrigatória' })}
          />
          {errors.password && (
            <Text color="red.500">{errors.password.message}</Text>
          )}
        </FormControl>
        <Button
          backgroundColor="#d91b31"
          width={400}
          color="white"
          type="submit"
          mt={8}
        >
          Entrar
        </Button>
      </Form>
      <Text fontSize={'lg'} color={'gray.600'} mt={4}>
        {' '}
        Ainda não tem uma conta? <Link href="/sign-up">Registre-se</Link>
      </Text>
    </Stack>
  );
};

export default SignIn;
