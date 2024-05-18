import { EmployeesData } from '@/services/employees/types';

export const useMetricsController = (data: EmployeesData[]) => {
  const employees = data || [];
  const departmentCounts = employees.reduce((counts, employe) => {
    counts[employe.department] = (counts[employe.department] || 0) + 1;
    return counts;
  }, {});
  const uniqueEmployees = employees.filter(
    (employee, index) =>
      employees.findIndex((e) => e.department === employee.department) ===
      index,
  );
  return {
    departmentCounts,
    uniqueEmployees,
  };
};
