import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeCurrency, changeValue } from '../../reducers/converter/actions';
import { createHistoryExchange } from '../../reducers/history/actions';
import { debounce } from '../../helpers';
import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.createHistory = debounce(this.createHistory, 1000);
  }

  handleChangeInput = (e, reverse = false) => {
    const { changeValue } = this.props;
    const value = e.currentTarget.value;

    changeValue(value, reverse);
    this.createHistory();
  };

  createHistory() {
    const { createHistoryExchange, fromValue, toValue } = this.props;
    console.log({ fromValue, toValue });
    createHistoryExchange();
  }

  handleChangeInputSelect = (e, direction) => {
    const { changeCurrency } = this.props;
    const value = e.currentTarget.value;

    changeCurrency(value, direction);
  };

  render() {
    const { currencies, fromValue, toValue } = this.props;

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
              onChange={e => this.handleChangeInputSelect(e, 'toRate')}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currencies: state.currencies.currencies,
  fromValue: state.converter.fromRate.value,
  toValue: state.converter.toRate.value
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeCurrency,
      changeValue,
      createHistoryExchange
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Converter);
