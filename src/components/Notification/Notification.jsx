import { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
