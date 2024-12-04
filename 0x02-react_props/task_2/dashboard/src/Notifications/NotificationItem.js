import React from "react";

// NotificationItem component
const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {!html && value}
    </li>
  );
};

export default NotificationItem;
