'use client';
import { EmployesDepartmentEnum } from '@/common/employes/enums/employess.enum';
import { createEmployee } from '@/services/employees';
import { EmployeesData } from '@/services/employees/types';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
export const UseCreateEmployeeController = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<EmployeesData>();

  const employesDepartments = Object.values(EmployesDepartmentEnum).map(
    (departments) => departments,
  );

  const handleEditEmployee = async (data: EmployeesData) => {
    await createEmployee(data);
    router.push('/dashboard');
  };

  return {
    handleEditEmployee,
    register,
    errors,
    handleSubmit,
    control,
    employesDepartments,
  };
};
