import React from 'react';
import { RecipeContainer } from './';
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface SearchResultsProps {
  recipes: Recipe[];
  loadRecipe: LoadRecipe;
  loadPrevious: LoadPrevious;
  loadNext: LoadNext;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  recipes,
  loadRecipe,
  loadPrevious,
  loadNext,
}) => {
  return (
    <div className='search-results'>
      <div>
        {recipes.length > 0 ? (
          <div className='clearfix'>
            {recipes.map((recipe, key) => (
              <RecipeContainer key={key} recipe={recipe} loadRecipe={loadRecipe} preview={true} />
            ))}

            <FontAwesomeIcon
              icon={faArrowLeft}
              size='1x'
              className='icon float-left'
              onClick={loadPrevious}
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              size='1x'
              className='icon float-right'
              onClick={loadNext}
            />
          </div>
        ) : (
          <div className='icon-spinner'>
            <Spinner animation='border' variant='light' />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
