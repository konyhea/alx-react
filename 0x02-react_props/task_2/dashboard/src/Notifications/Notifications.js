import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications() {
  const handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <button
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={handleCloseClick}
      >
        <img src={closeIcon} alt="Close" style={{ width: "10px", height: "10px" }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
