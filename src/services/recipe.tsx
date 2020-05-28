import axios, { AxiosResponse } from 'axios';

export class RecipeService {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
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
    apiKey: string = '695d34427006452f835927d8591a5f3d'
  ) => {
    return axios.get(
      `https://api.spoonacular.com/recipes/search?query=${query}&cuisine=${cuisine}&diet=${diet}&excludeIngredients=${excludeIngredients}&intolerances=${intolerances}&apiKey=${apiKey}&offset=${offset}&number=${number}&=instructionsRequired${instructionsRequired}`
    );
  },
  // getRecipeById: (
  //   id: number,
  //   apiKey: string = '695d34427006452f835927d8591a5f3d',
  //   includeNutrition: boolean = false
  // ) => {
  //   return axios.get(
  //     `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=${includeNutrition}&apiKey=${apiKey}`
  //   );
  // },
};
