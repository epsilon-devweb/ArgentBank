import { useSelector } from 'react-redux';

const InfoUser = ({ onEditClick }) => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className="header">
            <h1>Welcome back<br />{user && `${user.firstName} ${user.lastName}!`}</h1>
            <button className="edit-button" onClick={onEditClick}>Edit Name</button>
        </div>
    );
};

export default InfoUser;
