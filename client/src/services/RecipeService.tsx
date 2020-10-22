import axios, { AxiosResponse } from 'axios';

export default class RecipeService {
  public getFavoriteRecipes(): Promise<AxiosResponse<any>> {
    return axios.get<any>('/favorites');
  }

  public addFavoriteRecipe(): Promise<AxiosResponse<any>> {
    return axios.put<any>('/favorites/add');
  }

  public removeFavoriteRecipe(): Promise<AxiosResponse<any>> {
    return axios.put<any>('/favorites/remove');
  }
}
