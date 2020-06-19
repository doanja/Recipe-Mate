import React, { useState, useEffect } from 'react';
import { SearchBar, SearchResults, RecipeContainer, RecipeModal } from './components';

import { RecipeService } from './services/RecipeService';
import Container from 'react-bootstrap/Container';
import { ScrollTopButton } from './components/ScrollTopButton';

const App: React.FC = () => {
  const client = new RecipeService('15640069e60a4eebb7d844af90b60207');

  const [searchedRecipes, setSearchedRecipes] = useState<Recipe[] | null>(null); // array of recipes
  const [recipeIds, setRecipeIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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
    setSearchedRecipes([]);

    const loadRecipes = async () => {
      return Promise.all(recipeIds.map(id => client.getRecipeById(id)));
    };

    loadRecipes()
      .then(res => setSearchedRecipes(res.map(newRecipe => newRecipe.data)))
      .catch(err => console.log(err));
  }, [recipeIds]);

  const getRecipeId: GetRecipe = (query, cuisine, diet, excludeIngrediuents, intolerances, offset, number, instructionsRequired) => {
    setSearchQuery(query);
    setRecipe(null);
    setRecipeIds([]);

    client
      .getRecipe(query, cuisine, diet, excludeIngrediuents, intolerances, offset, number, instructionsRequired)
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

  const getSimilarRecipes: GetSimilarRecipes = (id, number) => {
    setRecipe(null);
    setRecipeIds([]);

    client
      .getSimilarRecipes(id, number)
      .then(res => setRecipeIds(res.data.map((recipe: any) => recipe.id)))
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
    setSearchedRecipes([]);
    setRecipe(recipe);
  };

  const loadRandomRecipes: LoadRandomRecipe = () => {
    client
      .getRandomRecipes(4)
      .then(res => {
        console.log(res.data.recipes);
        setSearchedRecipes(res.data.recipes);
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
