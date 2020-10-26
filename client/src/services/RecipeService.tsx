import axios, { AxiosResponse } from 'axios';

export default class RecipeService {
  public getFavoriteRecipes(): Promise<AxiosResponse<any>> {
    return axios.get<any>('/favorites');
  }

  public addFavoriteRecipe(recipeId: number): Promise<AxiosResponse<any>> {
    return axios.put<any>('/favorites/add', { recipeId });
  }

  public removeFavoriteRecipe(recipeId: number): Promise<AxiosResponse<any>> {
    return axios.put<any>('/favorites/remove', { recipeId });
  }
}
