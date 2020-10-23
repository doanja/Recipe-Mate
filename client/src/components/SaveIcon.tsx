import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/store';
import { addFavoriteRecipe, removeFavoriteRecipe } from '../redux/actions/recipeActions';

interface SaveIconProps {
  recipeId: number;
}

export const SaveIcon: React.FC<SaveIconProps> = ({ recipeId }) => {
  const history = useHistory();

  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);
  const { favoriteRecipes } = useSelector((state: RootStore) => state.recipe);
  const dispatch = useDispatch();

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (favoriteRecipes.includes(recipeId)) setIsSaved(true);
  }, [favoriteRecipes]);

  const saveRecipe = () => {
    if (loginStatus) {
      isSaved ? dispatch(addFavoriteRecipe(recipeId)) : dispatch(removeFavoriteRecipe(recipeId));
    } else history.push('/');
  };

  return loginStatus ? (
    <Button variant='outline-secondary' onClick={saveRecipe}>
      <FontAwesomeIcon icon={faSave} />
    </Button>
  ) : (
    <Button variant='outline-secondary' onClick={saveRecipe}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
};
