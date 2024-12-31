import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe('Notifications component', () => {
    // renders without crashing
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    // Verify NotificationItem renders correctly
    it('renders NotificationItem elements', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).exists()).toBe(true); 
    });

    // Verify first NotificationItem has correct html
    it('renders the first NotificationItem with correct html', () => {
        const wrapper = shallow(<Notifications />);
        const firstNotificationItem = wrapper.find(NotificationItem).first(); 
        expect(firstNotificationItem.props().html).toEqual({ __html: '<p>Here is the body of the notification.</p>' }); 
    }); 

    // Verify "Your notifications" menu item renders when displayDrawer is false
    it('renders the "Your notifications" menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.contains(<div className="menuItem"><p>Your notifications</p></div>)).toBe(true);
    });

    // Verify Notifications div does not render when displayDrawer is false
    it('does not render the Notifications div when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div.Notification').exists()).toBe(false);
    });

    // Verify "Your notifications" menu item renders when displayDrawer is true
    it('renders the "Your notifications" menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.contains(<div className="menuItem"><p>Your notifications</p></div>)).toBe(true);
    });

    // Verify Notifications div renders when displayDrawer is true
    it('renders the Notifications div when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notification').exists()).toBe(true);
    });

    // New Test Case: Verify renders correctly with an empty listNotifications array
    it('renders correctly when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications listNotifications={[]} />);
        expect(wrapper.find('p').text()).toEqual('No new notification for now');
    });

    // New Test Case: Verify renders correctly when listNotifications is not passed
    it('renders correctly when listNotifications is not passed', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toEqual('No new notification for now');
    });

    // New Test Case: Verify renders correctly with a list of notifications
    it('renders correctly with a list of notifications', () => {
        const notifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
        ];
        const wrapper = shallow(<Notifications listNotifications={notifications} />);
        expect(wrapper.find(NotificationItem).length).toBe(3); // 3 notifications
        expect(wrapper.find(NotificationItem).at(0).props().value).toEqual('New course available');
        expect(wrapper.find(NotificationItem).at(1).props().value).toEqual('New resume available');
        expect(wrapper.find(NotificationItem).at(2).props().html).toEqual({ __html: '<strong>Urgent requirement</strong>' });
    });

    // New Test Case: Verify the "Here is the list of notifications" message is not displayed when listNotifications is empty
    it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications listNotifications={[]} />);
        expect(wrapper.find('p').text()).not.toEqual('Here is the list of notifications');
    });
});
