import * as bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import express, { Request, Response } from 'express';
import createHttpError from 'http-errors';
import { USER_PATHS } from '../../constants/users.constants';
import { Routes } from '../routes/routes';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { BaseController } from '../../common/controllers/base.controller';

const { USER, USERS, SIGN_IN } = USER_PATHS;

export class UserController extends BaseController {
  private userService: UserService;
  constructor(app: express.Application) {
    super(app);
    this.userService = new UserService();
    this.initializeRoutes();
  }

  protected initializeRoutes() {
    this.app.get(USERS, this.getAllUsers.bind(this));
    this.app.post(USERS, this.createUser.bind(this));
    this.app.get(USER, this.getUser.bind(this));
    this.app.post(SIGN_IN, this.userSignin.bind(this));
  }

  private async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.list();
      res.json(users);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private async createUser(req: Request, res: Response) {
    try {
      const userDto = plainToInstance(CreateUserDto, req.body.data);
      const errors = await validate(userDto);
      if (errors.length > 0) {
        return res
          .status(400)
          .json({ error: errors.map(error => error.constraints) });
      }
      const user = await this.userService.create(req.body.data);
      res.status(201).json(user);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private async getUser(req: Request, res: Response) {
    try {
      const { email } = req.params;
      const user = await this.userService.findOne(email);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private async userSignin(req: Request, res: Response) {
    try {
      const { email, password } = req.body.data;
      const user = await this.userService.findOne(email);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      if (!password || !user.password) {
        return res.status(400).json({ error: 'Password required' });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        return res.status(200).json({ user });
      } else {
        return res.status(400).json({ error: 'Invalid password' });
      }
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
