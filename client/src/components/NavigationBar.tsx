import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faHeart, faHome } from '@fortawesome/free-solid-svg-icons';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/store';
import { clearAccessToken, clearLoginStatus, clearRefreshToken } from '../redux/actions/authActions';

const NavigationBar: React.FC = () => {
  const history = useHistory();

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
      <Navbar className='mx-5 w-100'>
        <Navbar.Brand href='/'>
          <FontAwesomeIcon icon={faPencilAlt} size='1x' /> To Do List
        </Navbar.Brand>

        <Nav className='ml-auto'>
          <div className='my-auto mr-3'>
            <FontAwesomeIcon className='mx-2 icon-navbar' icon={faHome} onClick={() => history.push('/home')} />
            <FontAwesomeIcon className='mx-2 icon-navbar' icon={faHeart} onClick={() => history.push('/saved')} />
          </div>

          <Button variant='outline-light' size='sm' onClick={() => logout()}>
            {loginStatus ? 'Logout' : 'Login'}
          </Button>
        </Nav>
      </Navbar>
    </Navbar>
  );
};

export default NavigationBar;
