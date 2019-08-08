import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  fromRate: PropTypes.shape({
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }),
  toRate: PropTypes.shape({
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })
};

const defaultProps = {
  fromRate: { value: '', currency: '' },
  toRate: { value: '', currency: '' }
};

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

HistoryItem.propTypes = propTypes;
HistoryItem.defaultProps = defaultProps;

export default HistoryItem;
