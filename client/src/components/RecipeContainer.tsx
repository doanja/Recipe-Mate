import React, { useState, useEffect, Fragment } from 'react';
import { RecipeHeaderWrapper, Ingredients, Instructions, RecipeModal } from '.';

interface RecipeContainerProps {
  recipe: Recipe;
  loadRecipe: LoadRecipe;
  preview: boolean;
  getSimilarRecipes: GetSimilarRecipes;
}

const RecipeContainer: React.FC<RecipeContainerProps> = ({ recipe, loadRecipe, preview, getSimilarRecipes }) => {
  const [instructions, setInstructions] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    const tags: string[] = [];

    if (recipe.cheap) tags.push('cheap');
    if (recipe.dairyFree) tags.push('dairy free');
    if (recipe.glutenFree) tags.push('gluten free');
    if (recipe.lowFodmap) tags.push('load food map');
    if (recipe.sustainable) tags.push('sustainable');
    if (recipe.vegan) tags.push('vegan');
    if (recipe.vegetarian) tags.push('vegetarian');
    if (recipe.veryHealthy) tags.push('healthy');
    if (recipe.veryPopular) tags.push('popular');

    setTags(tags);

    if (recipe.analyzedInstructions.length > 0) {
      setInstructions(recipe.analyzedInstructions[0].steps.map(step => step.step));
      setIngredients(recipe.extendedIngredients.map(ingredient => ingredient.name));
    }

    if (!recipe.analyzedInstructions) toggleModal();
  }, [recipe]);

  return (
    <div className='mb-3'>
      <RecipeModal
        showModal={showModal}
        toggleModal={toggleModal}
        modalHeading={'Warning'}
        modalBody={<p>There are no instructions for this recipe.</p>}
      />
      <RecipeHeaderWrapper
        recipe={recipe}
        ingredients={ingredients}
        tags={tags}
        loadRecipe={loadRecipe}
        preview={preview}
        getSimilarRecipes={getSimilarRecipes}
      />
      {!preview ? (
        <Fragment>
          <Ingredients ingredients={recipe.extendedIngredients} />
          <Instructions instructions={instructions} />
        </Fragment>
      ) : null}
    </div>
  );
};

export default RecipeContainer;
