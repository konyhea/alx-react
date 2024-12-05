import React from "react";

// NotificationItem component
const NotificationItem = ({ type, value, html }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
};

export default NotificationItem;
