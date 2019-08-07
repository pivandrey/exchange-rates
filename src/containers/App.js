import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCurrencies } from '../reducers/currencies/actions';
import Home from './Home';
import Exchange from './Exchange';

class App extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/exchange" component={Exchange} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCurrencies
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(App);
