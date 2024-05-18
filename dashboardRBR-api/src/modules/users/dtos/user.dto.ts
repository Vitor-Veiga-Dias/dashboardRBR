import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { UserRoleEnum } from '../enums/userRole.enum';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(UserRoleEnum)
    @IsNotEmpty()
    role: UserRoleEnum;
}