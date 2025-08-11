import ArgentBankLogo from '../assets/img/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../store/features/auth/authSlice";

library.add(fas);

const Nav = () => {
  const { user, token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleClick = async (event) => {
    dispatch(logout(null));
    event.preventDefault();
    localStorage.removeItem('authToken');
    window.location.replace('/');
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href={user && token ? '/user' : '/sign-in'}>
          <FontAwesomeIcon icon='user-circle' />
          {user && token ? user.userName : 'Sign In'}
        </a>
        {(user && token) && (
          <a className="main-nav-item" href="/" onClick={handleClick}>
            <FontAwesomeIcon icon='right-from-bracket' />
            Sign Out
          </a>
        )}
      </div>
    </nav>
  );
};

export default Nav;