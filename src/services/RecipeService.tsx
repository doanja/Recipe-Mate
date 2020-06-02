import axios, { AxiosResponse } from 'axios';

export class RecipeService {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public getRecipe(
    query: string,
    offset: number = 0,
    number: number = 2,
    instructionsRequired: boolean = true,
    cuisine: string = '',
    diet: string = '',
    excludeIngredients: string = '',
    intolerances: string = ''
  ): Promise<AxiosResponse<any>> {
    return axios.get<any>(
      `https://api.spoonacular.com/recipes/search?query=${query}&cuisine=${cuisine}&diet=${diet}&excludeIngredients=${excludeIngredients}&intolerances=${intolerances}&apiKey=${this.apiKey}&offset=${offset}&number=${number}&=instructionsRequired${instructionsRequired}`
    );
  }

  public getRecipeById(
    id: number,
    includeNutrition: boolean = true
  ): Promise<AxiosResponse<Recipe>> {
    return axios.get<Recipe>(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=${includeNutrition}&apiKey=${this.apiKey}`
    );
  }

  public getSimilarRecipes(id: number, number: number): Promise<AxiosResponse<any>> {
    return axios.get<any>(`https://api.spoonacular.com/recipes/${id}/similar&number=${number}`);
  }
}
