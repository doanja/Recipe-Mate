import { Router } from 'express';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todo.controller';
import { verifyAccessToken } from '../middleware/verifyToken';

export default class TodoRoute {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/todo', [verifyAccessToken], getTodos);
    this.router.post('/todo', [verifyAccessToken], addTodo);
    this.router.put('/todo/:id', [verifyAccessToken], updateTodo);
    this.router.delete('/todo/:id', [verifyAccessToken], deleteTodo);
  }
}
