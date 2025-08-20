import AccountItem from "../components/AccountItem";

const AccountContainer = () => {
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

export default AccountContainer;
