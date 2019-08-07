import React from 'react';

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

export default Input;
