import React from 'react';

const Input = ({ onChange, placeholder, name }) => {
  return (
    <input
      name={name}
      type="text"
      className="input"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
