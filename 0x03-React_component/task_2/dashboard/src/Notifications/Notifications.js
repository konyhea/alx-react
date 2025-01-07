import React, { PureComponent } from 'react';
import './Notification.css';
import NotificationItem from './NotificationItem';
import closebtn from '../close-icon.png';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends PureComponent {
    constructor(props) {
        super(props);
        // Bind the method to the component instance to avoid re-renders
        this.markAsRead = this.markAsRead.bind(this);
    }

    static defaultProps = {
        displayDrawer: false,
        listNotifications: [],
    };

    static propTypes = {
        displayDrawer: PropTypes.bool,
        listNotifications: PropTypes.arrayOf(NotificationItemShape),
    };

    state = {
        displayDrawer: true,
    };

    handleCloseClick = () => {
        console.log("Close button has been clicked");
    };

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    // Only update the component if the new listNotifications is longer than the previous one
    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
        const { displayDrawer } = this.state;
        const { listNotifications } = this.props;

        return (
            <>
                <div className="menuItem">
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className="Notification">
                        <button
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '10px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                            aria-label="Close"
                            onClick={this.handleCloseClick}
                        >
                            <img
                                src={closebtn}
                                alt="Close button"
                                style={{ width: '10px', height: '10px' }}
                            />
                        </button>
                        {listNotifications.length === 0 ? (
                            <p>No new notifications for now</p>
                        ) : (
                            <ul>
                                {listNotifications.map((notification) => (
                                    <NotificationItem
                                        key={notification.id}
                                        id={notification.id} // Pass id to each NotificationItem
                                        type={notification.type}
                                        value={notification.value}
                                        html={notification.html}
                                        markAsRead={this.markAsRead} // Pass the bound markAsRead function
                                    />
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </>
        );
    }
}

export default Notifications;
