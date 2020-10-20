import { Request, Response } from 'express';
import { IUser } from '../@types';
import { User } from '../models';

export const getFavorites = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: IUser[] = await User.find({ user: req.accessToken?._id });

    res.status(200).json({favorites: user.favorites});
  } catch (error) {
    res.status(401).json(error);
  }
};



export const addFavorite = async (req: Request, res: Response): Promise<void> => {
  try {

    await User.findOneAndUpdate(
      { _id: req.accessToken?._id },
      { $addToSet: { favorites: req.body.recipeId } },
      { new: true });

      const user: IUser[] = await User.find({ user: req.accessToken?._id });

      res.status(200).json({favorites: user.favorites});
  } catch (error) {
    res.status(401).json(error);
  }
};

export const removeFavorite = async (req: Request, res: Response): Promise<void> => {
  try {
    await User.findOneAndUpdate(
      { _id: req.accessToken?._id },
      { $pull: { favorites: req.body.recipeId } },
      { new: true }
    )

    const user: IUser[] = await User.find({ user: req.accessToken?._id });

    res.status(200).json({favorites: user.favorites});
  } catch (error) {
    res.status(401).json(error);
  }
};


