import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe('NotificationItem component', () => {
    // renders without crashing
    it('renders without crashing', () => {
        shallow(<NotificationItem />);
    });

    it('renders with type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="Test Notification" />);
        expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
        expect(wrapper.text()).toEqual('Test Notification'); 
    });

    it('renders with html prop', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>Test</u>' }} />);
        expect(wrapper.html()).toContain('<u>Test</u>'); 
    });
});
