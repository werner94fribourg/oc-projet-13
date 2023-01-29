import React from 'react';
import Account from './Account/Account';

const Accounts = () => {
  return (
    <React.Fragment>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount={2082.79} />
      <Account title="Argent Bank Savings (x6712)" amount={10928.42} />
      <Account title="Argent Bank Credit Card (x8349)" amount={184.3} />
    </React.Fragment>
  );
};

export default Accounts;
