import React, { useState, useEffect } from 'react';
import { SearchBar, SearchResults, RecipeContainer, RecipeModal } from './components';

import { RecipeService } from './services/RecipeService';
import Container from 'react-bootstrap/Container';
import { ScrollTopButton } from './components/ScrollTopButton';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from './Store';
import { setSearchedRecipes, clearSearchcedRecipes, setRecipeIds, clearRecipeIds, setSearchQuery, clearSearchQuery } from './actions/recipeActions';

const App: React.FC = () => {
  const client = new RecipeService('1390eaa38d7b4cc682699d95c9e9d149');

  // redux
  const { searchedRecipes, recipeIds, searchQuery } = useSelector((state: RootStore) => state.recipe);
  const dispatch = useDispatch();

  const [searchOffset, setSearchOffset] = useState(0);
  const [recipe, setRecipe] = useState<Recipe | null>(null); // used for the single detailed recipe

  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    loadRandomRecipes();
  }, []);

  // handles loading additional recipes when arrow buttons are clicked
  useEffect(() => {
    if (searchQuery) getRecipeId(searchQuery, searchOffset);
  }, [searchOffset, searchQuery]);

  // calls API and gets the recipe for each ID
  useEffect(() => {
    dispatch(clearSearchcedRecipes());

    const loadRecipes = async () => {
      return Promise.all(recipeIds.map(id => client.getRecipeById(id)));
    };

    loadRecipes()
      .then(res => dispatch(setSearchedRecipes(res.map(newRecipe => newRecipe.data))))
      .catch(err => console.log(err));
  }, [recipeIds]);

  const getRecipeId: GetRecipe = (query, cuisine, diet, excludeIngrediuents, intolerances, offset, number, instructionsRequired) => {
    dispatch(setSearchQuery(query));
    setRecipe(null);
    dispatch(clearRecipeIds());

    client
      .getRecipe(query, cuisine, diet, excludeIngrediuents, intolerances, offset, number, instructionsRequired)
      .then(res => {
        if (res.data.results.length === 0) {
          setShowModal(true);
          dispatch(clearSearchQuery());
        } else {
          dispatch(setRecipeIds(res.data.results.map((recipe: any) => recipe.id)));
        }
      })
      .catch(err => console.log(err));
  };

  const getSimilarRecipes: GetSimilarRecipes = (id, number) => {
    setRecipe(null);
    dispatch(clearRecipeIds());

    client
      .getSimilarRecipes(id, number)
      .then(res => dispatch(setRecipeIds(res.data.map((recipe: any) => recipe.id))))
      .catch(err => console.log(err));
  };

  const loadPrevious = (): void => {
    if (!searchQuery) loadRandomRecipes();
    else if (searchOffset > 2) setSearchOffset(searchOffset - 2);
  };

  const loadNext = (): void => {
    if (!searchQuery) loadRandomRecipes();
    else setSearchOffset(searchOffset + 2);
  };

  const loadRecipe: LoadRecipe = recipe => {
    dispatch(clearSearchcedRecipes());
    setRecipe(recipe);
  };

  const loadRandomRecipes: LoadRandomRecipe = () => {
    client
      .getRandomRecipes(4)
      .then(res => {
        // console.log('res.data.recipes :>> ', res.data.recipes);
        dispatch(setSearchedRecipes(res.data.recipes));
      })
      .catch(err => console.log(err));
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
          <RecipeContainer recipe={recipe} loadRecipe={loadRecipe} preview={false} getSimilarRecipes={getSimilarRecipes} />
        ) : searchedRecipes ? (
          <SearchResults
            recipes={searchedRecipes}
            loadRecipe={loadRecipe}
            loadPrevious={loadPrevious}
            loadNext={loadNext}
            getSimilarRecipes={getSimilarRecipes}
          />
        ) : null}
      </Container>
      <ScrollTopButton />
    </div>
  );
};

export default App;
