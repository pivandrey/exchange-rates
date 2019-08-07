import React from 'react';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';

class Converter extends React.Component {
  state = {
    fromSelect: 'RUB',
    toSelect: 'RUB',
    fromValue: '',
    toValue: '',
    emptyValue: false
  };

  calculateRate = count => {
    const { currencies } = this.props;
    const { fromSelect, toSelect } = this.state;

    const fromRate = currencies[fromSelect].Value;
    const toRate = currencies[toSelect].Value;

    const result = (count * fromRate) / toRate;
    return result;
  };

  handleChangeInput = (e, reverse = false) => {
    this.setState({
      emptyValue: false
    });
    const value = e.currentTarget.value;
    console.log(value);
    const result = this.calculateRate(value);
    this.setState({
      fromValue: value,
      toValue: result
    });
  };

  handleChangeInputSelect = (e, field) => {
    const value = e.currentTarget.value;
    this.setState({
      [field]: value,
      emptyValue: true
    });
  };

  render() {
    const { currencies } = this.props;
    const { emptyValue } = this.state;

    return (
      <div className="converter">
        <h2 className="converter__header">Конвертер валют</h2>
        <div className="converter__content">
          <div className="content__item">
            <Input
              name="from"
              emptyValue={emptyValue}
              onChange={e => this.handleChangeInput(e)}
            />
            <InputSelect
              name="fromSelect"
              options={currencies}
              onChange={e => this.handleChangeInputSelect(e, 'fromSelect')}
            />
          </div>
          <div className="content__item">
            <Input
              name="to"
              emptyValue={emptyValue}
              onChange={e => this.handleChangeInput(e, true)}
            />
            <InputSelect
              name="toSelect"
              options={currencies}
              onChange={e => this.handleChangeInputSelect(e, 'toSelect')}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currencies: state.currencies.currencies
});

export default connect(mapStateToProps)(Converter);
