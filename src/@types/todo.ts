import { Document } from 'mongoose';
import { IUser } from './user';

export interface ITodo extends Document {
  text: string;
  done: boolean;
  user: IUser['_id'];
}
