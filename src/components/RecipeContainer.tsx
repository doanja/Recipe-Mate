import React, { useState, useEffect } from 'react';
import { RecipeCard, Ingredients, Instructions } from './';

interface RecipeContainerProps {
  recipe: Recipe;
  LoadRecipe: LoadRecipe;
  preview: boolean;
}

const RecipeContainer: React.FC<RecipeContainerProps> = ({ recipe, LoadRecipe, preview }) => {
  const [instructions, setInstructions] = useState<string[] | null>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const tags: string[] = [];

    if (recipe?.cheap) tags.push('cheap');
    if (recipe?.dairyFree) tags.push('dairy free');
    if (recipe?.glutenFree) tags.push('gluten free');
    if (recipe?.lowFodmap) tags.push('load food map');
    if (recipe?.sustainable) tags.push('sustainable');
    if (recipe?.vegan) tags.push('vegan');
    if (recipe?.vegetarian) tags.push('vegetarian');
    if (recipe?.veryHealthy) tags.push('healthy');
    if (recipe?.veryPopular) tags.push('popular');

    setTags(tags);

    setInstructions(recipe.analyzedInstructions[0].steps.map(step => step.step));
    setIngredients(recipe.extendedIngredients.map(ingredient => ingredient.name));
  }, [recipe]);

  return (
    <div className='mb-3'>
      <RecipeCard
        recipe={recipe}
        ingredients={ingredients}
        tags={tags}
        LoadRecipe={LoadRecipe}
        preview={preview}
      />
      {!preview ? (
        <React.Fragment>
          <Ingredients ingredients={recipe?.extendedIngredients} />{' '}
          <Instructions instructions={instructions} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default RecipeContainer;
