import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

 class NotificationItem extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired, // Define id as a required number prop
    type: PropTypes.string, // type can be any string, default 'default' will be used if not provided
    html: PropTypes.shape({
      __html: PropTypes.string.isRequired,
    }),
    value: PropTypes.string,
    markAsRead: PropTypes.func, // New prop for markAsRead function
  };

  static defaultProps = {
    type: 'default',
    markAsRead: () => { }, // Default to an empty function if not passed
  };

  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id); // Call markAsRead with the notification's id
  };

  render() {
    const { type, html, value } = this.props;

    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={this.handleClick} // Add click handler
      >
        {value}
      </li>
    );
  }
}
export default NotificationItem
