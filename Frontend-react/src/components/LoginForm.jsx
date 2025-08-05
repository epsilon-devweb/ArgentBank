import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userLogin, userFetch } from '../api/userApi';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const token = await dispatch(userLogin({
            email: formData.get('email'),
            password: formData.get('password')
        }));
        if (token) {
            await dispatch(userFetch(token));
            window.location.replace('/user');
        } else {
            console.log('Identifiants incorrects');
        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={['fas', 'user-circle']} />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="text" id="email" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default LoginForm;