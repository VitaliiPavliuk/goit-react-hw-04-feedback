import PropTypes from 'prop-types';
import { StatisticsDiv } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsDiv>
      <span>Good: {`${good}`}</span>
      <span>Neural: {`${neutral}`}</span>
      <span>Bad: {`${bad}`}</span>
      <span>Total: {total()}</span>
      <span>Positive feedback: {positivePercentage()}%</span>
    </StatisticsDiv>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
