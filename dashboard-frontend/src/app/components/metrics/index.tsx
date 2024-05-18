import { Card, CardBody, CardHeader, Stack, Text } from '@chakra-ui/react';

import { EmployeesData } from '@/services/employees/types';
import { useMetricsController } from './controller';

interface MetricsProps {
  data: EmployeesData[];
}

export const Metrics = ({ data }: MetricsProps) => {
  const { departmentCounts, uniqueEmployees } = useMetricsController(data);
  return (
    <Stack direction="row" width="100%">
      {uniqueEmployees?.map((employe) => (
        <Card backgroundColor="#d91b31" key={employe._id} flex={1}>
          <CardHeader>
            <Text fontSize="2xl" color={'white'}>
              {employe.department.toUpperCase()}
            </Text>
          </CardHeader>
          <CardBody>
            <Stack>
              <Text fontSize="2xl" color={'white'}>
                {departmentCounts[employe.department]}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
};
