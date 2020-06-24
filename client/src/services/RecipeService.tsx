import axios, { AxiosResponse } from 'axios';

export class RecipeService {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public getRecipe(query: string, offset: number = 0, number: number = 2): Promise<AxiosResponse<any>> {
    return axios.get<any>(
      `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${this.apiKey}&offset=${offset}&number=${number}&=instructionsRequired=true`
    );
  }

  public getRecipeById(id: number): Promise<AxiosResponse<Recipe>> {
    return axios.get<Recipe>(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${this.apiKey}`);
  }

  public getSimilarRecipes(id: number, number: number): Promise<AxiosResponse<any>> {
    return axios.get<any>(`https://api.spoonacular.com/recipes/${id}/similar?&number=${number}&apiKey=${this.apiKey}`);
  }

  public getRandomRecipes(number: number): Promise<AxiosResponse<any>> {
    return axios.get<any>(`https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${this.apiKey}`);
  }
}
