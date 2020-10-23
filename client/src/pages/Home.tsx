import React, { useState, useEffect } from 'react';
import { SearchBar, SearchResults, RecipeContainer, RecipeModal, ScrollTopButton, NavigationBar } from '../components';
import { SpoonacularService } from '../services';
import Container from 'react-bootstrap/Container';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/store';
import {
  setSearchedRecipes,
  clearSearchcedRecipes,
  setRecipeIds,
  clearRecipeIds,
  setSearchQuery,
  clearSearchQuery,
  incrementSearchOffset,
  decrementSearchOffset,
  setRecipe,
  clearRecipe,
} from '../redux/actions/recipeActions';

interface HomeProps {
  favoriteRecipes?: number[];
}

const Home: React.FC<HomeProps> = ({ favoriteRecipes }) => {
  const client = new SpoonacularService('1390eaa38d7b4cc682699d95c9e9d149');

  // redux
  const { searchedRecipes, recipeIds, searchQuery, searchOffset, recipe, isLoading } = useSelector((state: RootStore) => state.recipe);
  const dispatch = useDispatch();

  // modal
  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = () => setShowModal(!showModal);

  // renders random recipes on component mount
  useEffect(() => {
    favoriteRecipes ? dispatch(setRecipeIds(favoriteRecipes)) : loadRandomRecipes();
  }, [isLoading]);

  // handles loading additional recipes when arrow buttons are clicked
  useEffect(() => {
    if (searchQuery) getRecipeId(searchQuery, searchOffset);
  }, [searchOffset, searchQuery]);

  // calls API and gets the Recipe for each recipe ID
  useEffect(() => {
    dispatch(clearSearchcedRecipes());

    const loadRecipes = async () => Promise.all(recipeIds.map(id => client.getRecipeById(id)));

    loadRecipes()
      .then(res => dispatch(setSearchedRecipes(res.map(newRecipe => newRecipe.data))))
      .catch(err => console.log(err));
  }, [recipeIds]);

  /**
   * Calls API to build an array of recipe IDs
   * @param {string} query the recipe to be searched
   * @param {number} offset the search result offset
   * @param {number} number the number of recipes to render
   * @return {void}
   */
  const getRecipeId: GetRecipeId = (query, offset, number) => {
    dispatch(setSearchQuery(query));
    dispatch(clearRecipe());
    dispatch(clearRecipeIds());

    client
      .getRecipe(query, offset, number)
      .then(res => {
        if (res.data.results.length === 0) {
          setShowModal(true);
          dispatch(clearSearchQuery());
        } else dispatch(setRecipeIds(res.data.results.map((recipe: any) => recipe.id)));
      })
      .catch(err => console.log(err));
  };

  /**
   * Renders similar recipes
   * @param {number} id the id of the recipe
   * @param {number} number the number of recipes to render
   * @return {void}
   */
  const getSimilarRecipes: GetSimilarRecipes = (id, number) => {
    dispatch(clearRecipe());
    dispatch(clearRecipeIds());

    client
      .getSimilarRecipes(id, number)
      .then(res => dispatch(setRecipeIds(res.data.map((recipe: any) => recipe.id))))
      .catch(err => console.log(err));
  };

  /**
   * Loads previous set of search results
   * @return {void}
   */
  const loadPrevious: LoadPrevious = () => {
    if (!searchQuery) loadRandomRecipes();
    else if (searchOffset > 2) dispatch(decrementSearchOffset());
  };

  /**
   * Loads next set of search results
   * @return {void}
   */
  const loadNext: LoadNext = () => {
    if (!searchQuery) loadRandomRecipes();
    else dispatch(incrementSearchOffset());
  };

  /**
   * Renders a single recipe
   * @param {recipe} recipe
   * @return {void}
   */
  const loadRecipe: LoadRecipe = recipe => {
    dispatch(clearSearchcedRecipes());
    dispatch(setRecipe(recipe));
  };

  /**
   * function to load random recipes to display on the landing page
   * @return {void}
   */
  const loadRandomRecipes: LoadRandomRecipe = () => {
    client
      .getRandomRecipes(4)
      .then(res => dispatch(setSearchedRecipes(res.data.recipes)))
      .catch(err => console.log(err));
  };

  return (
    <div className='wrap'>
      <NavigationBar />
      <Container>
        <RecipeModal
          showModal={showModal}
          toggleModal={toggleModal}
          modalHeading={'Warning'}
          modalBody={<p>{`No results found for '${searchQuery}'.`}</p>}
        />

        <SearchBar getRecipeId={getRecipeId} />

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

export default Home;
