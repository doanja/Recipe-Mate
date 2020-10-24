import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
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

      <Nav className='mr-auto'>
        <Nav.Link href='/home'>Home</Nav.Link>
        <Nav.Link href='/saved'>Saved</Nav.Link>
      </Nav>
      <Nav className='ml-auto'>
        {loginStatus ? (
          <Nav.Link href='/login' onClick={() => logout()}>
            Logout
          </Nav.Link>
        ) : (
          <Nav.Link href='/login' onClick={() => logout()}>
            Login
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
