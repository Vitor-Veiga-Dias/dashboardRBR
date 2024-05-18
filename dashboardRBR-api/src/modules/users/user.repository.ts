import { UserEntity } from "../../models/users.model";
import { CreateUserDto } from "./dtos/user.dto";

export interface UserRepositoryMethodsInterface {
  create(data: CreateUserDto): Promise<UserEntity>;
  list(): Promise<Partial<UserEntity[]>>;
  findOne(email: UserEntity['email']): Promise<UserEntity>;
}
