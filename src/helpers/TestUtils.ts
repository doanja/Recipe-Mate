import { Todo, User } from '../models';

export const deleteUserByEmail = async (email: string): Promise<void> => {
  try {
    await User.deleteOne({ email });
  } catch (error) {
    throw error;
  }
};

export const deleteTodoById = async (_id: string): Promise<void> => {
  try {
    await Todo.deleteOne({ _id });
  } catch (error) {
    throw error;
  }
};

export const genRandomPassword = (length: number = 8): string => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password: string = '';

  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;
};
