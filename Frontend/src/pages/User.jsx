import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import InfoUser from '../components/InfoUser';
import AccountContainer from '../components/AccountContainer';
import UsernameForm from '../components/UsernameForm';

const User = () => {
  const [isEditing, setIsEditing] = useState(false);

  if (!localStorage.getItem('authToken')) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <main className="main bg-dark">
      {isEditing ? (
        <UsernameForm onClose={() => setIsEditing(false)} />
      ) : (
        <InfoUser onEditClick={() => setIsEditing(true)} />
      )}
      <AccountContainer />
    </main>
  );
};

export default User;
