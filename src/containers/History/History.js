import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import HistoryItem from '../../components/HistoryItem';
import image from '../../assets/images/superman.png';

const propTypes = {
  history: PropTypes.array.isRequired
};

const defaultProps = {
  history: []
};

class History extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div className="history">
        <h2 className="history__header">История конвертации</h2>
        <div className="history__content">
          {history.reverse().map(historyItem => (
            <HistoryItem
              fromRate={historyItem.fromRate}
              toRate={historyItem.toRate}
              key={historyItem.id}
            />
          ))}
        </div>
        <div className="history__link">
          <Link to="/exchange">Конвертор валют</Link>
        </div>
        <img src={image} className="history__image" alt="superman" />
      </div>
    );
  }
}

History.propTypes = propTypes;
History.defaultProps = defaultProps;

const mapStateToProps = (state, props) => ({
  history: state.history.history
});

export default connect(mapStateToProps)(History);
