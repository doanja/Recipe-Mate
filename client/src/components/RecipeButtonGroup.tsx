import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NutritionFacts, RecipeModal } from '.';

interface RecipeButtonGroupProps {
  recipe: Recipe;
  getSimilarRecipes: GetSimilarRecipes;
}

export const RecipeButtonGroup: React.FC<RecipeButtonGroupProps> = ({
  recipe,
  getSimilarRecipes,
}) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = () => setShowModal(!showModal);

  return (
    <React.Fragment>
      <RecipeModal
        showModal={showModal}
        toggleModal={toggleModal}
        modalHeading={'Nutrition Facts'}
        modalBody={
          recipe?.nutrition ? (
            <NutritionFacts nutrients={recipe?.nutrition.nutrients} />
          ) : (
            <p>No nutrition facts for this recipe.</p>
          )
        }
      />

      <Button variant='dark' size='sm' className='recipe-preview' onClick={toggleModal} block>
        Nutrition Facts
      </Button>
      <Button
        variant='dark'
        size='sm'
        className='recipe-preview'
        onClick={() => getSimilarRecipes(recipe.id, 2)}
        block>
        Similar Recipes
      </Button>
      <Button
        variant='dark'
        size='sm'
        className='recipe-preview'
        onClick={() => window.open(recipe?.sourceUrl, '_blank')}
        block>
        Source
      </Button>
    </React.Fragment>
  );
};

export default RecipeButtonGroup;
