import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthService } from '../services';
import { CustomModal } from '../components';
import { Home } from '../pages';
import axios from 'axios';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/store';
import { getFavoriteRecipes } from '../redux/actions/recipeActions';
import { clearAccessToken, clearLoginStatus, clearRefreshToken, setAccessToken } from '../redux/actions/authActions';
import { checkTokenExp } from '../helper';

const Saved: React.FC = () => {
  const api = new AuthService();
  const history = useHistory();

  // redux
  const { loginStatus, refreshToken } = useSelector((state: RootStore) => state.auth);
  const { favoriteRecipes, error, token } = useSelector((state: RootStore) => state.recipe);
  const dispatch = useDispatch();

  // modal
  const [errorText, setErrorText] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = errorText => {
    setErrorText(errorText);
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (error === 'TokenExpiredError') requestAccessToken();
  }, [error]);

  useEffect(() => {
    if (!loginStatus) history.push('/');

    dispatch(getFavoriteRecipes());
  }, []);

  useEffect(() => {
    if (token) {
      const accessToken = `Bearer ${token}`;
      dispatch(setAccessToken(accessToken));
      axios.defaults.headers.common.Authorization = accessToken;
    }
  }, [token]);

  const logout = () => {
    dispatch(clearAccessToken());
    dispatch(clearRefreshToken());
    dispatch(clearLoginStatus());
    window.localStorage.removeItem('store');
    history.push('/login');
  };

  const requestAccessToken = () => {
    // check refresh token expiry
    if (!checkTokenExp(refreshToken)) {
      toggleModal('Your session has expired. Please login again.');
    } else {
      api
        .getAccessToken(refreshToken)
        .then(res => {
          const accessToken = `Bearer ${res.data.accessToken}`;
          dispatch(setAccessToken(accessToken));
          axios.defaults.headers.common.Authorization = accessToken;
          dispatch(getFavoriteRecipes());
        })
        .catch(err => toggleModal('Your session has expired. Please login again.'));
    }
  };

  return (
    <Fragment>
      <CustomModal showModal={showModal} toggleModal={logout} title={'Session Error'} body={<p>{errorText}</p>} />

      <Home favoriteRecipes={favoriteRecipes} />
    </Fragment>
  );
};

export default Saved;
