'use client';
import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Select,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Form } from 'react-hook-form';
import { UseSignUpController } from './controller';
import { UserRoleEnum } from '@/common/users/enums/userRole.enum';

const SignUp = () => {
  const { errors, handleSignIn, handleSubmit, register, control } =
    UseSignUpController();

  return (
    <Stack spacing={4} justifyContent="center" marginTop="100px">
      <Form control={control} onSubmit={(data) => handleSignIn(data.data)}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Crie uma conta</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            para gerenciar sua <Link color={'blue.400'}>empresa</Link> ✌️
          </Text>
        </Stack>
        <FormControl id="name" isInvalid={!!errors.name}>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            {...register('name', { required: 'Nome é obrigatório' })}
          />
          {errors.name && <Text color="red.500">{errors.name.message}</Text>}
        </FormControl>
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
        <FormControl mb={12} id="role" isInvalid={!!errors.password}>
          <FormLabel>Tipo de conta</FormLabel>
          <Select {...register('role')}>
            <option value={UserRoleEnum.ADMIN}>Administrador</option>
            <option value={UserRoleEnum.USER}>Comum</option>
          </Select>
          {errors.role && <Text color="red.500">{errors.role.message}</Text>}
        </FormControl>
        <Button
          backgroundColor="#d91b31"
          width={400}
          color="white"
          type="submit"
        >
          Registre-se
        </Button>
      </Form>
    </Stack>
  );
};

export default SignUp;
