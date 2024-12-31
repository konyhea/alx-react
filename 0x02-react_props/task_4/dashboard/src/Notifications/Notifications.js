import React from "react";
import './Notification.css';
import NotificationItem from "./NotificationItem";
import closebtn from '../close-icon.png';
import { getLatestNotification } from "../utils";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ listNotifications, displayDrawer = false }) => {
    const handleCloseClick = () => {
        console.log("Close button has been clicked");
    };

    return (
        <>
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
            {displayDrawer && (
                <div className="Notification">
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
                        <img
                            src={closebtn}
                            alt="Close button"
                            style={{ width: "10px", height: "10px" }}
                        />
                    </button>
                    {listNotifications.length === 0 ? (
                        <p>No new notification for now</p>
                    ) : (
                        <ul>
                            {listNotifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;
