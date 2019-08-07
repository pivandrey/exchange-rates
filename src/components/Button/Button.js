import React from 'react';

const Button = ({ children }) => {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
};

export default Button;
