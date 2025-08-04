import PropTypes from 'prop-types';

const AccountItem = ({ title, amount, amountDescription }) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{amountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
};

AccountItem.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    amountDescription: PropTypes.string.isRequired,
};

const Account = () => {
    const informations = [
        {
            title: 'Argent Bank Checking (x8349)',
            amount: '$2,082.79',
            amountDescription: 'Available Balance',
        },
        {
            title: 'Argent Bank Savings (x6712)',
            amount: '$10,928.42',
            amountDescription: 'Available Balance',
        },
        {
            title: 'Argent Bank Credit Card (x8349)',
            amount: '$184.30',
            amountDescription: 'Current Balance',
        },
    ];

    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {informations.map((info, index) => (
                <AccountItem key={index} {...info} />
            ))}
        </>
    );
};

export default Account;
