import React from 'react';

const InputSelect = ({ onChange, options, name }) => {
  return (
    <select name={name} className="input-select" onChange={onChange}>
      {options.map((item, index) => (
        <option selected={index === 0}>{item}</option>
      ))}
    </select>
  );
};

export default InputSelect;
