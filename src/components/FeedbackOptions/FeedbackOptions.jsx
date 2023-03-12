import { Component } from 'react';
import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.options.map((key, i) => {
          return (
            <Btn key={i} name={key} onClick={this.props.onLeaveFeedback}>
              {key}
            </Btn>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func,
};
