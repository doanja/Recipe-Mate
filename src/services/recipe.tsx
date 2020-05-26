import axios from 'axios';

export default {
  search: (
    queryText: string,
    from: number = 0,
    to: number = 2,
    app_id: string = 'ab1a7c56',
    app_key: string = '1eab44749250471f33b386e03aab1717'
  ) => {
    return axios.get(
      `https://api.edamam.com/search?q=${queryText}&from=${from}&to=${to}&app_id=${app_id}&app_key=${app_key}`
    );
  },
  searchRecipe: (
    query: string,
    cuisine: string = '',
    diet: string = '',
    excludeIngredients: string = '',
    intolerances: string = '',
    apiKey: string = '695d34427006452f835927d8591a5f3d',
    offset: number = 0,
    number: number = 2,
    instructionsRequired: boolean = true
  ) => {
    return axios.get(
      `https://api.spoonacular.com/recipes/search?query=${query}&cuisine=${cuisine}&diet=${diet}&excludeIngredients=${excludeIngredients}&intolerances=${intolerances}&apiKey=${apiKey}&offset=${offset}&number=${number}&=instructionsRequired${instructionsRequired}`
    );
  },
};
