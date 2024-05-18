import { EmployesDepartmentEnum } from '../../common/employes/enums/employess.enum';

export interface EmployeesData {
  _id: string;
  name: string;
  position: string;
  department: EmployesDepartmentEnum;
  contact: {
    email: string;
    phone: string;
  };
}
