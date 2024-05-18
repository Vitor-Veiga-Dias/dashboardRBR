'use client';
import { DepartmentEmployeTransformer } from '@/common/employes/transformers';
import { getAllEmployees } from '@/services/employees';
import { useToast } from '@chakra-ui/react';
import { useRequest } from 'ahooks';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

export const UseDashBoardController = () => {
  const { data, loading, refreshAsync } = useRequest(getAllEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const Toast = useToast();

  const router = useRouter();

  const handleEditEmployee = async (id: string) => {
    router.push(`/edit-employee?id=${id}`);
  };

  const handleCreateEmployee = async () => {
    router.push(`/create-employee`);
  };

  const handleDeleteEmployee = async (id: string) => {
    console.log('id', id);
    Toast({
      title: 'Funcionário deletado com sucesso',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    refreshAsync();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filtredData = data?.data.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.position.toLowerCase().includes(searchTerm) ||
      employee.department.toLowerCase().includes(searchTerm),
  );

  return {
    data: data?.data,
    loading,
    refreshAsync,
    handleEditEmployee,
    handleDeleteEmployee,
    handleCreateEmployee,
    handleSearch,
    filtredData,
    searchTerm,
  };
};
