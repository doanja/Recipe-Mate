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
    includeNutrition: boolean = false
  ): Promise<AxiosResponse<Recipe>> {
    return axios.get<Recipe>(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=${includeNutrition}&apiKey=${this.apiKey}`
    );
  }
}

export default {
  getRecipe: (
    query: string,
    offset: number = 0,
    number: number = 2,
    instructionsRequired: boolean = true,
    cuisine: string = '',
    diet: string = '',
    excludeIngredients: string = '',
    intolerances: string = '',
    apiKey: string = '355b1f4de8e34560a7a8ac33df39c3c2'
  ) => {
    return axios.get(
      `https://api.spoonacular.com/recipes/search?query=${query}&cuisine=${cuisine}&diet=${diet}&excludeIngredients=${excludeIngredients}&intolerances=${intolerances}&apiKey=${apiKey}&offset=${offset}&number=${number}&=instructionsRequired${instructionsRequired}`
    );
  },
};
