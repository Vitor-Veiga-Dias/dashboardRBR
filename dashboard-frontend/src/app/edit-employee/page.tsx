'use client';
import { DepartmentEmployeTransformer } from '@/common/employes/transformers';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Form } from 'react-hook-form';
import { UseEditEmployeeController } from './controller';

const EditEmployee = () => {
  const {
    control,
    errors,
    loading,
    handleEditEmployee,
    register,
    employesDepartments,
  } = UseEditEmployeeController();

  if (loading) return <Spinner />;
  return (
    <Stack spacing={4} justifyContent="center" marginTop="100px">
      <Form
        control={control}
        onSubmit={(data) => handleEditEmployee(data.data)}
      >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Editar Funcionario</Heading>
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
          Editar
        </Button>
      </Form>
    </Stack>
  );
};
export default EditEmployee;
