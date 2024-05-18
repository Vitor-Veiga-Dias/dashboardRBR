import { Model, Types, model } from "mongoose";
import { UserEntity, UserSchema } from "../../models/users.model";
import { UserRepositoryMethodsInterface } from "./user.repository";
import { CreateUserDto } from "./dtos/user.dto";


export class UserService implements UserRepositoryMethodsInterface {
    private userModel: Model<UserEntity>;

    constructor() {
        this.userModel = model<UserEntity>('User', UserSchema);
    }

    async list(): Promise<Partial<UserEntity[]>> {
        try {
            return await this.userModel.find();
        } catch (error) {
            throw new Error('Error while fetching users');
        }
    }

    async findOne(email: UserEntity['email']): Promise<UserEntity> {
        try {
            const user = await this.userModel.findOne({ email: email });
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(data: CreateUserDto): Promise<UserEntity> {
        try {
            return await this.userModel.create(data);
        } catch (error) {
            throw new Error(error);
        }
    }
}