import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchCurrencies } from '../reducers/currencies/actions';
import Home from '../pages/Home';
import Exchange from '../pages/Exchange';

const propTypes = {
  fetchCurrencies: PropTypes.func.isRequired
};

const defaultProps = {
  fetchCurrencies: () => {}
};

class App extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    return (
      <div className="root">
        <div className="root_content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/exchange" component={Exchange} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

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
