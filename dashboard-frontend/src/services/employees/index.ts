import { EMPLOYEES_PATHS } from '@/common/employes/employes.paths';
import api from '../api';
import { EmployeesData } from './types';
const { EMPLOYEES } = EMPLOYEES_PATHS;

export const getAllEmployees = async () =>
  await api.get<EmployeesData[]>(EMPLOYEES);

export const getEmployeeById = async (id: string) =>
  api.get<EmployeesData>(`${EMPLOYEES}/${id}`);

export const createEmployee = async (data: EmployeesData) =>
  api.post(EMPLOYEES, { data });

export const updateEmployee = async (id: string, data: EmployeesData) =>
  api.put(`${EMPLOYEES}/${id}`, { data });

export const deleteEmployee = async (id: string) =>
  api.delete(`${EMPLOYEES}/${id}`);
