'use client';
import { DepartmentEmployeTransformer } from '@/common/employes/transformers';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Form } from 'react-hook-form';
import { UseCreateEmployeeController } from './controller';

const CreateEmployee = () => {
  const { control, errors, handleEditEmployee, register, employesDepartments } =
    UseCreateEmployeeController();

  return (
    <Stack
      spacing={4}
      justifyContent="center"
      marginTop="100px"
      w="fit-content"
    >
      <Form
        control={control}
        onSubmit={(data) => handleEditEmployee(data.data)}
      >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Cadastrar Funcionario</Heading>
        </Stack>
        <FormControl mt={6} id="name" isInvalid={!!errors.name}>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            {...register('name', { required: 'Nome é obrigatório' })}
          />
          {errors.name && <Text color="red.500">{errors.name.message}</Text>}
        </FormControl>
        <FormControl mt={6} id="position" isInvalid={!!errors.position}>
          <FormLabel>Cargo</FormLabel>
          <Input type="text" {...register('position')} />
          {errors.position && (
            <Text color="red.500">{errors.position.message}</Text>
          )}
        </FormControl>
        <FormControl mt={6} id="department" isInvalid={!!errors.department}>
          <FormLabel>Departamento</FormLabel>
          <Select {...register('department')}>
            {employesDepartments.map((departments, index) => (
              <option key={index} value={departments}>
                {DepartmentEmployeTransformer(departments)}
              </option>
            ))}
          </Select>
          {errors.department && (
            <Text color="red.500">{errors.department.message}</Text>
          )}
        </FormControl>
        <FormControl mt={6} mb={12} id="contact" isInvalid={!!errors.contact}>
          <Stack direction="row">
            <Stack>
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register('contact.email')} />
            </Stack>
            <Stack>
              <FormLabel>Telefone</FormLabel>
              <Input type="phone" {...register('contact.phone')} />
            </Stack>
          </Stack>
          {errors.contact && (
            <Text color="red.500">{errors.contact.message}</Text>
          )}
        </FormControl>
        <Button
          backgroundColor="#d91b31"
          width="100%"
          color="white"
          type="submit"
        >
          Criar
        </Button>
      </Form>
    </Stack>
  );
};
export default CreateEmployee;
