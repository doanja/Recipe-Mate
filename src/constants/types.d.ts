type Recipe = {
  id: number;
  image: string;
  openLicense: number;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  title: string;
};

type Ingredient = {
  text: string;
  weight: number;
};

type TotalNutrients = {
  ENERC_KCAL: NutritionStatistics;
  FAT: NutritionStatistics;
  FASAT: NutritionStatistics;
  FATRN: NutritionStatistics;
  FAMS: NutritionStatistics;
  FAPU: NutritionStatistics;
  CHOCDF: NutritionStatistics;
  FIBTG: NutritionStatistics;
  SUGAR: NutritionStatistics;
  PROCNT: NutritionStatistics;
  CHOLE: NutritionStatistics;
  NA: NutritionStatistics;
  CA: NutritionStatistics;
  MG: NutritionStatistics;
  K: NutritionStatistics;
  FE: NutritionStatistics;
  ZN: NutritionStatistics;
  p: NutritionStatistics;
  VITA_RAE: NutritionStatistics;
  VITC: NutritionStatistics;
  THIA: NutritionStatistics;
  RIBF: NutritionStatistics;
  NIA: NutritionStatistics;
  VITB6A: NutritionStatistics;
  FOLDFE: NutritionStatistics;
  FOLFD: NutritionStatistics;
  FOLAC: NutritionStatistics;
  VITB12: NutritionStatistics;
  VITD: NutritionStatistics;
  TOCPHA: NutritionStatistics;
  VITK1: NutritionStatistics;
  WATER: NutritionStatistics;
};

type NutritionStatistics = {
  label: string;
  quantity: number;
  unit: string;
};

type TotalDaily = {
  ENERC_KCAL: NutritionStatistics;
  FAT: NutritionStatistics;
  FASAT: NutritionStatistics;
  FATRN: NutritionStatistics;
  FAMS: NutritionStatistics;
  FAPU: NutritionStatistics;
  CHOCDF: NutritionStatistics;
  FIBTG: NutritionStatistics;
  SUGAR: NutritionStatistics;
  PROCNT: NutritionStatistics;
  CHOLE: NutritionStatistics;
  NA: NutritionStatistics;
  CA: NutritionStatistics;
  MG: NutritionStatistics;
  K: NutritionStatistics;
  FE: NutritionStatistics;
  ZN: NutritionStatistics;
  p: NutritionStatistics;
  VITA_RAE: NutritionStatistics;
  VITC: NutritionStatistics;
  THIA: NutritionStatistics;
  RIBF: NutritionStatistics;
  NIA: NutritionStatistics;
  VITB6A: NutritionStatistics;
  FOLDFE: NutritionStatistics;
  FOLFD: NutritionStatistics;
  FOLAC: NutritionStatistics;
  VITB12: NutritionStatistics;
  VITD: NutritionStatistics;
  TOCPHA: NutritionStatistics;
  VITK1: NutritionStatistics;
  WATER: NutritionStatistics;
};

type SearchRecipe = (queryText: string, from?: number, to?: number) => void;

type searchSpoonacular = (
  query: string,
  cuisine?: string,
  diet?: string,
  excludeIngredients?: string,
  intolerances?: string,
  apiKey?: string,
  offset?: number,
  number?: number,
  instructionsRequired?: boolean
) => void;

type PreviousRecipeResults = () => void;

type NextRecipeResults = () => void;

type LoadRecipeDetails = (recipe: Recipe) => void;
