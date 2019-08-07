import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HistoryItem from '../../components/HistoryItem';
import image from '../../assets/images/superman.png';

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
              key={historyItem.fromRate.value}
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

const mapStateToProps = (state, props) => ({
  history: state.history.history
});

export default connect(mapStateToProps)(History);
