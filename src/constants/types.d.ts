type Recipe = {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: Array<string>;
  healthLabels: Array<string>;
  cautions: Array<string>;
  ingredientLines: Array<string>;
  ingredients: Array<Ingredient>;
  calories: number;
  totalWeight: number;
  totalTime: number;
  totalNutrients: TotalNutrients;
  totalDaily: TotalDaily;
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

type PreviousRecipeResults = () => void;

type NextRecipeResults = () => void;

type LoadRecipeDetails = (recipe: Recipe) => void;
