import React from 'react';
import { RecipeContainer } from './';
import { Container } from 'react-bootstrap';
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
    <Container fluid className='my-3'>
      <h3>Search Results for '{searchQuery}'</h3>

      <hr />

      <React.Fragment>
        {recipes.map((recipe, key) => (
          <RecipeContainer key={key} recipe={recipe} loadRecipe={loadRecipe} preview={true} />
        ))}
      </React.Fragment>

      <hr />

      <div className='d-block'>
        <FontAwesomeIcon icon={faArrowLeft} className='icon float-left' onClick={loadPrevious} />
        <FontAwesomeIcon icon={faArrowRight} className='icon float-right' onClick={loadNext} />
      </div>
    </Container>
  );
};

export default SearchResults;
