import { Router } from 'express';
import { addFavorite, getFavorites } from '../controllers/favorites.controller';
import { verifyAccessToken } from '../middleware/verifyToken';

export default class FavoritesRoute {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/favorites', [verifyAccessToken], getFavorites);
    this.router.post('/favorites', [verifyAccessToken], addFavorite);
    // this.router.put('/todo/:id', [verifyAccessToken], updateTodo);
    // this.router.delete('/todo/:id', [verifyAccessToken], deleteTodo);
  }
}
