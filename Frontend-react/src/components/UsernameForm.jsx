import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsername } from '../api/userApi';

const UsernameForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.auth);
    const [username, setUsername] = useState(user.userName);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await dispatch(updateUsername(token, username));
        if (success) onClose();
        else alert('Error.');
    };

    return (
        <form onSubmit={handleSubmit} className='username-form'>
            <div>
                <label htmlFor="username">User name :</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="firstName">First name :</label>
                <input
                    type="text"
                    id="firstName"
                    value={user.firstName || ''}
                    readOnly
                />
            </div>
            <div>
                <label htmlFor="lastName">Last name :</label>
                <input
                    type="text"
                    id="lastName"
                    value={user.lastName || ''}
                    readOnly
                />
            </div>
            <div className="button-group">
                <button className="btn" type="button" onClick={onClose}>Cancel</button>
                <button className="btn" type="submit">Save</button>
            </div>
        </form>
    );
};

export default UsernameForm;
