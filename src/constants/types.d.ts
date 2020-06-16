type Recipe = {
  aggregateLikes: string;
  analyzedInstructions: Instructions[];
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: string[];
  dishTypes: string[];
  extendedIngredients: ExtendedIngredients[];
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  lowFodmap: boolean;
  nutrition: Nutrition;
  occasions: string[];
  originalId: any;
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularScore: number;
  summary: string;
  sustainable: boolean;
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
  winePairing: WinePairings;
};

type Instructions = {
  name: string;
  steps: Steps[];
};

type Steps = {
  equpiment: Components[];
  ingredients: Components[];
  number: number;
  step: string;
};

type Components = {
  id: number;
  image: string;
  name: string;
};

type ExtendedIngredients = {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  measures: Measurements[];
  meta: string[];
  metaInformation: string[];
  name: string;
  original: string;
  originalName: string;
  originalString: string;
  unit: string;
};

type Nutrition = {
  caloricBreakdown: CaloricBreakdown;
  nutrients: Nutrients[];
};

type CaloricBreakdown = {
  percentCarbs: number;
  percentFat: number;
  percentProtein: number;
};

type Nutrients = {
  amount: number;
  percentOfDailyNeeds: number;
  title: string;
  unit: string;
};

type Measurements = {
  amount: number;
  unitLong: string;
  unitShort: string;
};

type WinePairings = {
  pairedWines: string[];
  pairingText: string;
  productMatches: ProductMatch;
};

type ProductMatch = {
  averageRating: number;
  description: string;
  id: number;
  imageUrl: string;
  link: string;
  price: string;
  ratingCount: number;
  score: number;
  title: string;
};

type GetRecipe = (
  query: string,
  offset?: number,
  number?: number,
  instructionsRequired?: boolean,
  cuisine?: string,
  diet?: string,
  excludeIngredients?: string,
  intolerances?: string,
  apiKey?: string
) => void;

type GetRecipeById = (id: number, apiKey?: string, includeNutrition?: boolean) => Recipe;

type GetSimilarRecipes = (id: number, number: number) => void;

type LoadPrevious = () => void;

type LoadNext = () => void;

type LoadRecipe = (recipe: Recipe) => void;

type ToggleModal = () => void;
