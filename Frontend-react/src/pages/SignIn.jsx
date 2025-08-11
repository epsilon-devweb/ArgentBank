import LoginForm from '../components/LoginForm';
import { Navigate } from 'react-router-dom';

const SignIn = () => {
  if (localStorage.getItem('authToken')) {
    return <Navigate to="/user"/>;
  } else {
    return (
      <LoginForm />
    );
  }
};

export default SignIn;