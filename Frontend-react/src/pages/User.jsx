import InfoUser from '../components/InfoUser';
import AccountContainer from '../components/AccountContainer';
import { Navigate } from 'react-router-dom';

const User = () => {
  if (!localStorage.getItem('authToken')) {
    return <Navigate to="/sign-in" />;
  } else {
    return (
      <>
        <main className="main bg-dark">
          <InfoUser />
          <AccountContainer />
        </main>
      </>
    );
  }
};

export default User;
