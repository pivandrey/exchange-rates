import React from 'react';

const InputSelect = ({ onChange, options, name }) => {
  const optionsArr = Object.values(options);
  return (
    <select name={name} className="input-select" onChange={onChange}>
      {optionsArr.map((item, index) => (
        <option selected={item.CharCode === 'RUB'} value={item.CharCode}>
          {item.Name}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
