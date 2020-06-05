import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
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
      <ButtonGroup className='mt-2 w-100'>
        <Button variant='dark' size='sm' className='recipe-preview' onClick={toggleModal}>
          Nutrition Facts
        </Button>
        <Button
          variant='dark'
          size='sm'
          className='recipe-preview'
          onClick={() => console.log('TODO: load similar recipes')}>
          Similar Recipes
        </Button>
        <Button
          variant='dark'
          size='sm'
          className='recipe-preview'
          onClick={() => window.open(recipe?.sourceUrl, '_blank')}>
          Source
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default RecipeButtonGroup;
