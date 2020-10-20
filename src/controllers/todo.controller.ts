import { Request, Response } from 'express';
import { ITodo } from '../@types';
import { Todo } from '../models';

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find({ user: req.accessToken?._id });

    res.status(200).json(todos);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo: ITodo = new Todo({
      text: req.body.text,
      done: false,
      user: req.accessToken?._id,
    });

    const newTodo: ITodo = await todo.save();

    const todos: ITodo[] = await Todo.find({ user: req.accessToken?._id });

    res.status(201).json({ todos, newTodo });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const updateTodo: ITodo | null = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

    const todos: ITodo[] = await Todo.find({ user: req.accessToken?._id });

    res.status(200).json({ todos, updateTodo });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndDelete(req.params.id);

    const todos: ITodo[] = await Todo.find({ user: req.accessToken?._id });

    res.status(201).json({ todos, deletedTodo });
  } catch (error) {
    res.status(401).json(error);
  }
};
