import ArgentBankLogo from '../assets/img/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./sign-in.html">
          <FontAwesomeIcon icon={['fas', 'user-circle']} />
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Nav;