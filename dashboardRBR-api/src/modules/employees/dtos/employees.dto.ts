import { IsEmail, IsNotEmpty, IsString, IsEnum, IsObject, IsPhoneNumber, IsOptional } from 'class-validator';
import { EmployesDepartmentEnum, EmployesPositionEnum } from '../enum/employees.enum';

class Contact {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsPhoneNumber()
    @IsOptional()
    phone: string;
}

export class CreateEmployeesDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsObject()
    @IsNotEmpty()
    contact: Contact;

    @IsNotEmpty()
    @IsString()
    position: string;

    @IsEnum(EmployesDepartmentEnum)
    @IsNotEmpty()
    department: EmployesDepartmentEnum;
}