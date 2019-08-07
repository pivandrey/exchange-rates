import React from 'react';

const HistoryItem = ({
  fromRate: { value: valueFrom, currency: currencyFrom },
  toRate: { value: valueTo, currency: currencyTo }
}) => {
  return (
    <div className="history-item">
      {`${valueFrom} ${currencyFrom} = ${valueTo} ${currencyTo}`}
    </div>
  );
};

export default HistoryItem;
