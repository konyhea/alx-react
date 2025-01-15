import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import closebtn from '../close-icon.png';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends PureComponent {
    constructor(props) {
        super(props);
        // Bind the method to the component instance
        this.markAsRead = this.markAsRead.bind(this);
    }

    static defaultProps = {
        displayDrawer: false,
        listNotifications: [],
        handleDisplayDrawer: () => {},
        handleHideDrawer: () => {},
    };

    static propTypes = {
        displayDrawer: PropTypes.bool,
        listNotifications: PropTypes.arrayOf(NotificationItemShape),
        handleDisplayDrawer: PropTypes.func,
        handleHideDrawer: PropTypes.func,
    };

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

        return (
            <>
                <div
                    className={css(styles.MenuItem)}
                    onClick={handleDisplayDrawer} // Call handleDisplayDrawer when clicked
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleDisplayDrawer()} // Handle keyboard interaction
                >
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className={css(styles.Notification)}>
                        <button
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '10px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                zIndex: '1000',
                            }}
                            aria-label="Close"
                            onClick={handleHideDrawer} // Call handleHideDrawer when clicked
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
                            <ul className={css(styles.UnderLined)}>
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

const styles = StyleSheet.create({
    Notification: {
        border: '2px dashed red',
        margin: '10px',
        position: 'absolute',
        right: '0',
        maxHeight: '15vh',
        overflow: 'auto',
    },
    UnderLined: {
        listStyle: 'disc',
        margin: '2rem',
        color: 'black',
        'li:last-child': {
            color: 'red',
        },
    },
    MenuItem: {
        textAlign: 'right',
        margin: '10px',
        cursor: 'pointer',
    },
});

export default Notifications;
