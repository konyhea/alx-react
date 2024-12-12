import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem"; // Import NotificationItem

describe('Notifications component', () => {
    // renders without crashing
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders NotificationItem elements', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains(<NotificationItem />)).toBe(true); 
    });

    it('renders the first NotificationItem with correct html', () => {
        const wrapper = shallow(<Notifications />);
        const firstNotificationItem = wrapper.find(NotificationItem).first(); 
        expect(firstNotificationItem.props().html).toEqual({ __html: '<p>Here is the body of the notification.</p>' }); 
    }); 

    it('renders the "Your notifications" menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.contains(<div className="menuItem"><p>Your notifications</p></div>)).toBe(true);
      });
    
      it('does not render the Notifications div when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div.Notification').exists()).toBe(false);
      });
    
      it('renders the "Your notifications" menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.contains(<div className="menuItem"><p>Your notifications</p></div>)).toBe(true);
      });
    
      it('renders the Notifications div when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notification').exists()).toBe(true);
      });
});