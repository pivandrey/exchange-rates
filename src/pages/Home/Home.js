import React from 'react';

import Header from '../../components/Header';
import FavoriteCurrencies from '../../containers/FavoriteCurrencies';
import History from '../../containers/History';

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <FavoriteCurrencies />
        <History />
      </div>
    );
  }
}

export default Home;
