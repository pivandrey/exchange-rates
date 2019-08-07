import React from 'react';
import { connect } from 'react-redux';

import PrimaryRate from '../../components/PrimaryRate';

class FavoriteCurrencies extends React.Component {
  render() {
    const { favorites } = this.props;

    return (
      <div className="favorite-currencies">
        <h2 className="favorite-currencies__header">Курс валют ЦБ РФ</h2>
        <div className="favorite-currencies__content">
          {favorites.map(currency => (
            <PrimaryRate
              currencyTitle={currency.Name}
              currencyCode={currency.CharCode}
              currencyRate={currency.Value}
              key={currency.ID}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  favorites: state.currencies.favorites
});

export default connect(mapStateToProps)(FavoriteCurrencies);
