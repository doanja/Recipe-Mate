import React from 'react';

import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/store';
import { clearAccessToken, clearLoginStatus, clearRefreshToken } from '../redux/actions/authActions';

const NavigationBar: React.FC = () => {
  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearAccessToken());
    dispatch(clearRefreshToken());
    dispatch(clearLoginStatus());
    window.localStorage.removeItem('store');
  };

  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
        <FontAwesomeIcon icon={faPencilAlt} size='1x' /> To Do List
      </Navbar.Brand>
      {loginStatus ? (
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <a href='/login' onClick={() => logout()}>
              Logout
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      ) : null}
    </Navbar>
  );
};

export default NavigationBar;
