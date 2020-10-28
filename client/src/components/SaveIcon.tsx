import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { addFavoriteRecipe, removeFavoriteRecipe } from '../redux/actions/recipeActions';

interface SaveIconProps {
  recipeId: number;
}

const SaveIcon: React.FC<SaveIconProps> = ({ recipeId }) => {
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
      isSaved ? dispatch(removeFavoriteRecipe(recipeId)) : dispatch(addFavoriteRecipe(recipeId));
    } else history.push('/');
  };

  return (
    <div style={{ zIndex: 10 }}>
      {isSaved ? (
        <FontAwesomeIcon className='icon-favorite' icon={faTrash} onClick={saveRecipe} />
      ) : (
        <FontAwesomeIcon className='icon-favorite' icon={faStar} onClick={saveRecipe} />
      )}
    </div>
  );
};
export default SaveIcon;
