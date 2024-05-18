import 'reflect-metadata';
import { Routes } from './modules/routes/routes';
import { UserController } from './modules/users/user.controller';
import { UserService } from './modules/users/user.service';
import connectToMongoDB from './moongose/connection';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { EmployeesController } from './modules/employees/employees.controller';
import { EmployeesService } from './modules/employees/employees.service';

const PORT = process.env.PORT || 7100;

export class App {
    private routes: Routes;
    private userController: UserController;
    private userService: UserService;
    private employeesController: EmployeesController;
    private employeesService: EmployeesService;

    constructor() {
        this.routes = new Routes();
        this.userService = new UserService();
        this.employeesService = new EmployeesService();
        this.userController = new UserController(this.routes.app);
        this.employeesController = new EmployeesController(this.routes.app);
    }
    
    public async start(): Promise<void> {
        await connectToMongoDB()
        this.routes.app.listen(Number(PORT), () => {
            console.log(`Server is running on port ${Number(PORT)}`);
        });
    }
}

new App().start();