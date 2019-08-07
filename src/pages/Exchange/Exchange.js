import React from 'react';

import Header from '../../components/Header';
import Converter from '../../containers/Converter';

class Exchange extends React.Component {
  render() {
    return (
      <div className="exchange-page">
        <Header />
        <Converter />
      </div>
    );
  }
}

export default Exchange;
