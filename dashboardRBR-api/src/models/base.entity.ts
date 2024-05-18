
import { Document } from 'mongoose';
import { Exclude } from 'class-transformer';

export class BaseEntity extends Document {
  createdAt: Date;

  updatedAt: Date;

  @Exclude()
  deletedAt?: Date;
}