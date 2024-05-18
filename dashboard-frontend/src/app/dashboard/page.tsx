'use client';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Button,
  Text,
  Input,
  FormLabel,
  Spinner,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon, SearchIcon } from '@chakra-ui/icons';
import { UseDashBoardController } from './controller';
import { DepartmentEmployeTransformer } from '@/common/employes/transformers';
import { Metrics } from '../components/metrics';

const Dashboard = () => {
  const {
    data,
    handleDeleteEmployee,
    handleEditEmployee,
    handleCreateEmployee,
    loading,
    filtredData,
    searchTerm,
    handleSearch,
  } = UseDashBoardController();

  if (loading) return <Spinner />;
  return (
    <Stack width="100%" padding={4}>
      <Metrics data={data} />
      <Stack direction="row" justifyContent="end" width="100%">
        <Stack direction="row" width={400}>
          <Input
            placeholder="Buscar funcionarios"
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            outline="none"
          />
          <Button onClick={handleSearch}>
            <SearchIcon />
          </Button>
        </Stack>
      </Stack>
      <Stack
        width="100%"
        direction="row"
        justifyContent="space-between"
        padding={4}
      >
        <Text fontSize="2xl">Funcionarios</Text>
        <Button
          width="fit-content"
          variant="ghost"
          onClick={handleCreateEmployee}
          gap={2}
        >
          Cadastrar
          <AddIcon color={'#d91b31'} />
        </Button>
      </Stack>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Relação de funcionarios</TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Cargo</Th>
              <Th>Departamento</Th>
              <Th>Editar</Th>
              <Th>Deletar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filtredData?.map((employee) => (
              <Tr key={employee._id}>
                <Td>{employee.name}</Td>
                <Td>{employee.position}</Td>
                <Td>{DepartmentEmployeTransformer(employee.department)}</Td>
                <Td>
                  <Button
                    variant="ghost"
                    onClick={() => handleEditEmployee(employee._id)}
                  >
                    <EditIcon />
                  </Button>
                </Td>
                <Td>
                  <Button
                    variant="ghost"
                    onClick={() => handleDeleteEmployee(employee._id)}
                  >
                    <DeleteIcon color={'#d91b31'} />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Dashboard;
