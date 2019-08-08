import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  changeCurrency,
  changeValue,
  clearValue
} from '../../reducers/converter/actions';
import { createHistoryExchange } from '../../reducers/history/actions';
import { debounce } from '../../helpers';
import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';

const propTypes = {
  currencies: PropTypes.object.isRequired,
  fromValue: PropTypes.string,
  toValue: PropTypes.string,
  fromCurrency: PropTypes.string,
  toCurrency: PropTypes.string,
  changeCurrency: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  createHistoryExchange: PropTypes.func.isRequired,
  clearValue: PropTypes.func.isRequired
};

const defaultProps = {
  currencies: [],
  changeCurrency: () => {},
  changeValue: () => {},
  createHistoryExchange: () => {},
  clearValue: () => {}
};

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.createHistory = debounce(this.createHistory, 1000);
  }

  componentDidMount() {
    const { clearValue } = this.props;
    clearValue();
  }

  handleChangeInput = (e, reverse = false) => {
    const { changeValue } = this.props;
    const value = e.currentTarget.value;

    changeValue(value, reverse);
    this.createHistory(reverse);
  };

  createHistory = reverse => {
    const { createHistoryExchange } = this.props;
    createHistoryExchange(reverse);
  };

  handleChangeInputSelect = (e, direction) => {
    const { changeCurrency } = this.props;
    const value = e.currentTarget.value;

    changeCurrency(value, direction);
    this.createHistory();
  };

  render() {
    const {
      currencies,
      fromValue,
      toValue,
      fromCurrency,
      toCurrency
    } = this.props;

    return (
      <div className="converter">
        <h2 className="converter__header">Конвертер валют</h2>
        <div className="converter__content">
          <div className="content__item">
            <Input
              name="from"
              value={fromValue}
              onChange={e => this.handleChangeInput(e)}
            />
            <InputSelect
              name="fromSelect"
              options={currencies}
              currentCurrency={fromCurrency}
              onChange={e => this.handleChangeInputSelect(e, 'fromRate')}
            />
          </div>
          <div className="content__item">
            <Input
              name="to"
              value={toValue}
              onChange={e => this.handleChangeInput(e, true)}
            />
            <InputSelect
              name="toSelect"
              options={currencies}
              currentCurrency={toCurrency}
              onChange={e => this.handleChangeInputSelect(e, 'toRate')}
            />
          </div>
        </div>
      </div>
    );
  }
}

Converter.propTypes = propTypes;
Converter.defaultProps = defaultProps;

const mapStateToProps = (state, props) => ({
  currencies: state.currencies.currencies,
  fromValue: state.converter.fromRate.value,
  toValue: state.converter.toRate.value,
  fromCurrency: state.converter.fromRate.currency,
  toCurrency: state.converter.toRate.currency
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeCurrency,
      changeValue,
      createHistoryExchange,
      clearValue
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Converter);
