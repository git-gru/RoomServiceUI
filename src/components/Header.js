import React from 'react'

const Card = ({ title, amount }) => {
  return (
    <div className="d-flex flex-column justify-content-center p-3">
      <p className="mt-0">{title}</p>
      <p className="h3 mt-0">{amount}</p>
    </div>
  );
}

const Header = () => {
  return (
    <header className="c-header c-header-light px-3 header-custom">
      <Card title="Balance" amount="213 920$" />
      <Card title="Payout" amount="159 465$" />
    </header>
  );
};

export default Header;