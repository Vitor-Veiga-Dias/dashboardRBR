'use client';
import { EmployesDepartmentEnum } from '@/common/employes/enums/employess.enum';
import { getEmployeeById, updateEmployee } from '@/services/employees';
import { EmployeesData } from '@/services/employees/types';
import { useRequest } from 'ahooks';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
export const UseEditEmployeeController = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const { data, loading } = useRequest(() => getEmployeeById(id));

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<EmployeesData>();

  useEffect(() => reset(data?.data), [data, reset]);
  const employesDepartments = Object.values(EmployesDepartmentEnum).map(
    (departments) => departments,
  );

  const handleEditEmployee = async (data: EmployeesData) => {
    await updateEmployee(id, data);
    router.push('/dashboard');
  };

  return {
    handleEditEmployee,
    register,
    errors,
    handleSubmit,
    control,
    loading,
    employesDepartments,
  };
};
