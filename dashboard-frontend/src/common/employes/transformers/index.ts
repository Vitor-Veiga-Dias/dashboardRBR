import { EmployesDepartmentEnum } from '../enums/employess.enum';

export const DepartmentEmployeTransformer = (department) => {
  const departmentMapping: Record<EmployesDepartmentEnum, string> = {
    [EmployesDepartmentEnum.SALES]: 'Vendas',
    [EmployesDepartmentEnum.FINANCE]: 'Finanças',
    [EmployesDepartmentEnum.HR]: 'Recursos Humanos',
    [EmployesDepartmentEnum.MARKETING]: 'Marketing',
    [EmployesDepartmentEnum.TECH]: 'Tecnologia',
  };

  return departmentMapping[department];
};
