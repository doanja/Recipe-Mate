import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NutritionFacts, RecipeModal } from './';

interface RecipeButtonGroupProps {
  recipe: Recipe;
}

export const RecipeButtonGroup: React.FC<RecipeButtonGroupProps> = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = () => setShowModal(!showModal);

  return (
    <React.Fragment>
      <RecipeModal
        showModal={showModal}
        toggleModal={toggleModal}
        modalHeading={'Nutrition Facts'}
        modalBody={<NutritionFacts nutrients={recipe?.nutrition.nutrients} />}
      />

      <Button variant='dark' size='sm' className='recipe-preview' onClick={toggleModal} block>
        Nutrition Facts
      </Button>
      <Button
        variant='dark'
        size='sm'
        className='recipe-preview'
        onClick={() => console.log('TODO: load similar recipes')}
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
