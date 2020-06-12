import React, { useState, useEffect } from 'react';
import { SearchBar, SearchResults, RecipeContainer, RecipeModal } from './components';
import { RecipeService } from './services/RecipeService';
import Container from 'react-bootstrap/Container';

const App: React.FC = () => {
  const client = new RecipeService('a4ad5586733441a0bd5a32a87a709650');
  const [searchedRecipes, setSearchedRecipes] = useState<Recipe[] | null>(null); // array of recipes
  const [recipeIds, setRecipeIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOffset, setSearchOffset] = useState(0);
  const [recipe, setRecipe] = useState<Recipe | null>(null); // used for the single detailed recipe
  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = () => setShowModal(!showModal);

  // TODO: remove this, used for testing in development only
  useEffect(() => {
    getRecipeId('cake');
  }, []);

  // handles loading additional recipes when arrow buttons are clicked
  useEffect(() => {
    if (searchQuery) getRecipeId(searchQuery, searchOffset);
  }, [searchOffset, searchQuery]);

  // calls API and gets the recipe for each ID
  useEffect(() => {
    const loadRecipes = async () => {
      return Promise.all(recipeIds.map(id => client.getRecipeById(id)));
    };

    loadRecipes()
      .then(res => setSearchedRecipes(res.map(newRecipe => newRecipe.data)))
      .catch(err => console.log(err));
  }, [recipeIds]);

  const getRecipeId: getRecipe = (
    query,
    cuisine,
    diet,
    excludeIngrediuents,
    intolerances,
    offset,
    number,
    instructionsRequired
  ) => {
    setSearchQuery(query);
    setRecipe(null);
    setRecipeIds([]);

    client
      .getRecipe(
        query,
        cuisine,
        diet,
        excludeIngrediuents,
        intolerances,
        offset,
        number,
        instructionsRequired
      )
      .then(res => {
        if (res.data.results.length === 0) {
          setShowModal(true);
          setSearchQuery('');
        } else {
          setRecipeIds(res.data.results.map((recipe: any) => recipe.id));
        }
      })
      .catch(err => console.log(err));
  };

  const loadPrevious = (): void => {
    if (searchOffset > 2) setSearchOffset(searchOffset - 2);
  };

  const loadNext = (): void => {
    setSearchOffset(searchOffset + 2);
  };

  const loadRecipe: LoadRecipe = recipe => {
    setSearchedRecipes([]);
    setRecipe(recipe);
  };

  return (
    <div className='wrap'>
      <Container>
        <RecipeModal
          showModal={showModal}
          toggleModal={toggleModal}
          modalHeading={'Warning'}
          modalBody={<p>{`No results found for '${searchQuery}'.`}</p>}
        />

        <SearchBar getRecipe={getRecipeId} />

        {recipe ? (
          <RecipeContainer recipe={recipe} loadRecipe={loadRecipe} preview={false} />
        ) : searchedRecipes ? (
          <SearchResults
            recipes={searchedRecipes}
            loadRecipe={loadRecipe}
            loadPrevious={loadPrevious}
            loadNext={loadNext}
          />
        ) : null}
      </Container>
    </div>
  );
};

export default App;
