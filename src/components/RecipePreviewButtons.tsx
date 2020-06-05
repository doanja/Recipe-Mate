import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { NutritionInfo, RecipeModal } from './';

interface RecipePreviewButtonsProps {
  recipe?: Recipe;
}

export const RecipePreviewButtons: React.FC<RecipePreviewButtonsProps> = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal: ToggleModal = () => setShowModal(!showModal);

  return (
    <React.Fragment>
      <RecipeModal
        showModal={showModal}
        toggleModal={toggleModal}
        modalHeading={'Nutrition Facts'}
        modalBody={<NutritionInfo nutrients={recipe?.nutrition.nutrients} />}
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

export default RecipePreviewButtons;
