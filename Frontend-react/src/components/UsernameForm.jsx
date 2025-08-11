import { useState } from 'react';
import { updateUsername } from '../api/userApi';
import { useSelector, useDispatch } from 'react-redux';

const UsernameForm = () => {
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.auth);
    const [ username, setUsername ] = useState(user.userName);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await dispatch(updateUsername(token, username));
        if (!success) alert('Erreur.');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button type="submit">Save</button>
        </form>
    );
};

export default UsernameForm;