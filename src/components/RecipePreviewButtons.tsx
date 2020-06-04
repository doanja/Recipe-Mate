import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

interface RecipePreviewButtonsProps {}

export const RecipePreviewButtons: React.FC<RecipePreviewButtonsProps> = ({}) => {
  return (
    <div className='mt-2 text-center'>
      <Button
        variant='dark'
        className='px-2 recipe-preview w-50'
        onClick={() => console.log('button clicked')}>
        Nutrition Facts
      </Button>
      <Button
        variant='dark'
        className='px-2 recipe-preview w-50'
        onClick={() => console.log('button clicked recipe?.sourceUrl')}>
        Source
      </Button>
    </div>
  );
};

export default RecipePreviewButtons;
