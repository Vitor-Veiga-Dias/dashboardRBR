import { Types } from 'mongoose';
import { CreateEmployeesDto } from './dtos/employees.dto';
import { EmployeesEntity } from '../../models/employees.model';
export interface EmployesMethodsInterface {
  create(data: CreateEmployeesDto): Promise<EmployeesEntity>;
  list(): Promise<EmployeesEntity[]>;
  findOne(id: Types.ObjectId): Promise<EmployeesEntity>;
  deleteOne(id: Types.ObjectId): Promise<void>;
  updateOne(id: Types.ObjectId, data: CreateEmployeesDto): Promise<void>;
}
