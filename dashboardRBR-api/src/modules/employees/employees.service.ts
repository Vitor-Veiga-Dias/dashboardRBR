import { Model, Types, model } from 'mongoose';
import { EmployesMethodsInterface } from './employees.repository';
import { EmployeesEntity, EmployessSchema } from '../../models/employees.model';
import { CreateEmployeesDto } from './dtos/employees.dto';

export class EmployeesService implements EmployesMethodsInterface {
  private employeesModel: Model<EmployeesEntity>;

  constructor() {
    this.employeesModel = model<EmployeesEntity>('Employees', EmployessSchema);
  }
  async updateOne(id: Types.ObjectId, data: CreateEmployeesDto): Promise<void> {
    await this.employeesModel.updateOne({ _id: id }, data);
  }
  async deleteOne(id: Types.ObjectId): Promise<void> {
    await this.employeesModel.deleteOne({ _id: id });
  }

  async list(): Promise<Partial<EmployeesEntity[]>> {
    try {
      return await this.employeesModel.find();
    } catch (error) {
      throw new Error('Error while fetching employees');
    }
  }

  async findOne(id: Types.ObjectId): Promise<EmployeesEntity> {
    try {
      const user = await this.employeesModel.findOne({ _id: id });
      if (!user) {
        throw new Error('Employees not found');
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data: CreateEmployeesDto): Promise<EmployeesEntity> {
    try {
      return await this.employeesModel.create(data);
    } catch (error) {
      throw new Error(error);
    }
  }
}
