import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/svg/Logo';

const Header = props => {
  return (
    <div className="header-wrap">
      <Link to="/">
        <div className="header">
          <Logo />
          <h1 className="header__text">Курс валют</h1>
        </div>
      </Link>
    </div>
  );
};

export default Header;
