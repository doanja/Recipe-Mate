type Recipe = {
  aggregateLikes: string;
  analyzedInstructions: Array<Instructions>;
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: Array<string>;
  dairyFree: boolean;
  diets: Array<string>;
  dishTypes: Array<string>;
  extendedIngredients: Array<ExtendedIngredients>;
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  lowFodmap: boolean;
  nutrition: Nutrition;
  occasions: Array<string>;
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
  steps: Array<Steps>;
};

type Steps = {
  equpiment: Array<Components>;
  ingredients: Array<Components>;
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
  measures: Array<Measurements>;
  meta: Array<string>;
  metaInformation: Array<string>;
  name: string;
  original: string;
  originalName: string;
  originalString: string;
  unit: string;
};

type Nutrition = {
  caloricBreakdown: CaloricBreakdown;
  nutrients: Array<Nutrients>;
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
  pairedWines: Array<string>;
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

type getRecipe = (
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

type getRecipeById = (id: number, apiKey?: string, includeNutrition?: boolean) => Recipe;

type PreviousRecipeResults = () => void;

type NextRecipeResults = () => void;

type loadSingleRecipe = (recipe: Recipe) => void;

type ToggleModal = () => void;
