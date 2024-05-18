import { Schema, Types } from "mongoose";
import { UserRoleEnum } from "../modules/users/enums/userRole.enum";
import * as bcrypt from 'bcrypt';
import { BaseEntity } from "./base.entity";


export class UserEntity extends BaseEntity {
    name: string;

    email: string;

    password: string;

    role: UserRoleEnum;  
}

export const UserSchema = new Schema<UserEntity>({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: UserRoleEnum,
        default: UserRoleEnum.USER
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
UserSchema.pre<UserEntity>('save', async function (next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });