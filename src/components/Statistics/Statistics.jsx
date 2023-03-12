import { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticsDiv } from './Statistics.styled';

class Statistics extends Component {
  render() {
    return (
      <StatisticsDiv>
        <span>Good: {`${this.props.good}`}</span>
        <span>Neural: {`${this.props.neutral}`}</span>
        <span>Bad: {`${this.props.bad}`}</span>
        <span>Total: {this.props.total()}</span>
        <span>Positive feedback: {this.props.positivePercentage()}%</span>
      </StatisticsDiv>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
