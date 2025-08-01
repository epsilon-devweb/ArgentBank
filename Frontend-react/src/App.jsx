import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/fontawesome/fontawesome';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;