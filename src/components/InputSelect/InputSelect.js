import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  currentCurrency: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  currentCurrency: 'RUB',
  options: [],
  onChange: () => {}
};

const InputSelect = ({ onChange, options, name, currentCurrency }) => {
  const optionsArr = Object.values(options);
  return (
    <div className="input-select-wrapper">
      <select
        name={name}
        className="input-select"
        onChange={onChange}
        defaultValue={currentCurrency}
      >
        {optionsArr.map((item, index) => (
          <option key={`option_${item.ID}`} value={item.CharCode}>
            {`${item.Name}, ${item.CharCode}`}
          </option>
        ))}
      </select>
    </div>
  );
};

InputSelect.propTypes = propTypes;
InputSelect.defaultProps = defaultProps;

export default InputSelect;
