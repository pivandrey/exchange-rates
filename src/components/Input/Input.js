import React from 'react';

const Input = ({ onChange, name, emptyValue }) => {
  return (
    <input
      name={name}
      type="text"
      className="input"
      placeholder="Введите количество"
      onChange={onChange}
      value={emptyValue ? '' : null}
    />
  );
};

export default Input;
