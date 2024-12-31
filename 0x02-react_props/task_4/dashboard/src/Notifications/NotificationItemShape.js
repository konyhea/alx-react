import PropTypes from 'prop-types';

// Define the shape for a NotificationItemShape
const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
});

export default NotificationItemShape;