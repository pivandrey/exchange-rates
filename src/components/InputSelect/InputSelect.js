import React from 'react';

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

export default InputSelect;
