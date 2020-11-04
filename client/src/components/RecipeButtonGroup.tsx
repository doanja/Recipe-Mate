import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { NutritionFacts } from './';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { toggleModal } from '../redux/actions/modalActions';

interface RecipeButtonGroupProps {
  recipe: Recipe;
  getSimilarRecipes: GetSimilarRecipes;
}

export const RecipeButtonGroup: React.FC<RecipeButtonGroupProps> = ({ recipe, getSimilarRecipes }) => {
  // redux
  const { showModal } = useSelector((state: RootStore) => state.modal);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Button
        variant='dark'
        size='sm'
        className='recipe-preview'
        onClick={() =>
          dispatch(
            toggleModal(
              !showModal,
              recipe?.nutrition ? <NutritionFacts nutrients={recipe?.nutrition.nutrients} /> : <p>No nutrition facts for this recipe.</p>,
              'Nurition Facts'
            )
          )
        }
        block>
        Nutrition Facts
      </Button>
      <Button variant='dark' size='sm' className='recipe-preview' onClick={() => getSimilarRecipes(recipe.id, 2)} block>
        Similar Recipes
      </Button>
      <Button variant='dark' size='sm' className='recipe-preview' onClick={() => window.open(recipe?.sourceUrl, '_blank')} block>
        Source
      </Button>
    </Fragment>
  );
};

export default RecipeButtonGroup;
