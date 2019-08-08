import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  value: '',
  onChange: () => {}
};

const Input = ({ onChange, name, value }) => {
  return (
    <div className="input-wrapper">
      <input
        name={name}
        type="text"
        className="input"
        placeholder="Введите количество"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
