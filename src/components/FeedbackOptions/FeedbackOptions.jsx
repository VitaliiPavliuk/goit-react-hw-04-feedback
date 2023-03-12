import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(key => {
        return (
          <Btn key={key} name={key} onClick={onLeaveFeedback}>
            {key}
          </Btn>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func,
};
