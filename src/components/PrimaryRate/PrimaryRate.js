import React from 'react';

const PrimaryRate = ({ currencyTitle, currencyRate, currencyCode }) => {
  return (
    <div className="primary-rate">
      <div className="primary-rate__currency-block">
        <span className="currency-block__text">
          {`${currencyTitle}, ${currencyCode}`}
        </span>
      </div>
      <span className="primary-rate__currency-rate">{currencyRate}</span>
    </div>
  );
};

export default PrimaryRate;
