import { Schema } from "mongoose";
import { BaseEntity } from "./base.entity";
import { EmployesDepartmentEnum } from "../modules/employees/enum/employees.enum";

export class EmployeesEntity extends BaseEntity {
    name: string;

    position: string;

    department: EmployesDepartmentEnum;

    contact: {
        email: string;
        phone: string;
    };
}

export const EmployessSchema = new Schema<EmployeesEntity>({
    name: {
        type: String,
        required: true
    },
    contact: {
        email: String,
        phone: String
    },
    position: {
        type: String,
        required: true
    },
    department: {
        type: String,
        enum: EmployesDepartmentEnum,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})