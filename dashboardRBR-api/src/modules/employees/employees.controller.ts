import { Request, Response } from 'express';
import { Routes } from '../routes/routes';
import { plainToInstance } from 'class-transformer';
import createHttpError from 'http-errors';
import express from 'express';
import { EMPLOYEES_PATHS } from '../../constants/employees.constants';
import { EmployeesService } from './employees.service';
import { CreateEmployeesDto } from './dtos/employees.dto';
import { Types } from 'mongoose';
import { validate } from 'class-validator';
import { BaseController } from '../../common/controllers/base.controller';

const { EMPLOYEES, EMPLOYEE, DELETE } = EMPLOYEES_PATHS;

export class EmployeesController extends BaseController {
  private employeesService: EmployeesService;
  constructor(app: express.Application) {
    super(app);
    this.employeesService = new EmployeesService();
    this.initializeRoutes();
  }

  protected initializeRoutes() {
    this.app.get(EMPLOYEES, this.getAllEmployees.bind(this));
    this.app.post(EMPLOYEES, this.createEmployee.bind(this));
    this.app.get(EMPLOYEE, this.getEmployees.bind(this));
    this.app.post(DELETE, this.deleteEmployee.bind(this));
    this.app.put(EMPLOYEE, this.updateEmployee.bind(this));
  }

  private async getAllEmployees(req: Request, res: Response) {
    try {
      const users = await this.employeesService.list();
      res.json(users);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private async createEmployee(req: Request, res: Response) {
    try {
      const createEmployeesDto = plainToInstance(
        CreateEmployeesDto,
        req.body.data,
      );
      const errors = await validate(createEmployeesDto);
      if (errors.length > 0) {
        return res
          .status(400)
          .json({ error: errors.map(error => error.constraints) });
      }
      const user = await this.employeesService.create(req.body.data);
      res.status(201).json(user);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private async getEmployees(req: Request, res: Response) {
    try {
      const _id = new Types.ObjectId(req.params.id);
      const employee = await this.employeesService.findOne(_id);
      if (!employee) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(employee);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private async deleteEmployee(req: Request, res: Response) {
    try {
      const _id = new Types.ObjectId(req.params.id);
      await this.employeesService.deleteOne(_id);
      res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private async updateEmployee(req: Request, res: Response) {
    try {
      const _id = new Types.ObjectId(req.params.id);
      const createEmployeesDto = plainToInstance(
        CreateEmployeesDto,
        req.body.data,
      );
      const errors = await validate(createEmployeesDto);
      if (errors.length > 0) {
        return res
          .status(400)
          .json({ error: errors.map(error => error.constraints) });
      }
      await this.employeesService.updateOne(_id, req.body.data);
      res.status(200).json({ message: 'Employee updated successfully' });
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private handleError(res: Response, error: any) {
    if (error instanceof TypeError) {
      createHttpError(400, res.status(400).json({ error: error.message }));
    } else if (error instanceof RangeError) {
      createHttpError(404, res.status(404).json({ error: error.message }));
    } else {
      createHttpError(404, res.status(500).json({ error: error.toString() }));
    }
  }
}
