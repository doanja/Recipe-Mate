import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import RecipeModal from './RecipeModal';

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
        modalBody={'test'}
      />
      <div className='mt-2 text-center'>
        <Button variant='dark' className='px-2 recipe-preview w-50' onClick={toggleModal}>
          Nutrition Facts
        </Button>
        <Button
          variant='dark'
          className='px-2 recipe-preview w-50'
          onClick={() => console.log('button clicked recipe?.sourceUrl')}>
          Source
        </Button>
      </div>
    </React.Fragment>
  );
};

export default RecipePreviewButtons;
