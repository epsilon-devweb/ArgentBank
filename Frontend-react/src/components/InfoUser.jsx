import { useState } from 'react';
import { useSelector } from 'react-redux';
import UsernameForm from './UsernameForm';

const InfoUser = () => {
    const { user } = useSelector((state) => state.auth);
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <>
            <div className="header">
                <h1>Welcome back<br />{user && `${user.firstName} ${user.lastName}!`}</h1>
                <button className="edit-button" onClick={() => setIsOpen(true)}>Edit Name</button>
            </div>
            {isOpen &&
                <div className="modal" onClick={handleClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Edit user information</h2>
                        <UsernameForm
                            firstName={user.firstName}
                            lastName={user.lastName}
                            onClose={handleClose}
                        />
                    </div>
                </div>
            }
        </>
    );
};

export default InfoUser;
