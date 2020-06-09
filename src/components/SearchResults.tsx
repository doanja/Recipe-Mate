import React from 'react';
import { RecipeContainer } from './';
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface SearchResultsProps {
  recipes: Recipe[];
  loadRecipe: LoadRecipe;
  searchQuery: string;
  loadPrevious: LoadPrevious;
  loadNext: LoadNext;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  recipes,
  loadRecipe,
  searchQuery,
  loadPrevious,
  loadNext,
}) => {
  return (
    <div className='mt-3 search-results'>
      <div className='box box-1 text-center'>Search Results for '{searchQuery}'</div>
      <div className='box box-2'>
        {recipes.length > 0 ? (
          recipes.map((recipe, key) => (
            <RecipeContainer key={key} recipe={recipe} loadRecipe={loadRecipe} preview={true} />
          ))
        ) : (
          <div className='text-center'>
            <Spinner animation='grow' />
          </div>
        )}
      </div>

      <div className='box box-3'>
        <FontAwesomeIcon icon={faArrowLeft} className='icon ' onClick={loadPrevious} />
        <FontAwesomeIcon icon={faArrowRight} className='icon ' onClick={loadNext} />
      </div>
    </div>
  );
};

export default SearchResults;
