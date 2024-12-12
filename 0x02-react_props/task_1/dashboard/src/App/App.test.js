import React from "react";
import { shallow } from 'enzyme';
import App from './App'; 

describe('App component', () => {
    // renders without crashing
    it('renders without crashing', () => {
        shallow(<App />); 
    });

    // it contains the Notification component
    it('renders Notification component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Notification />)).toBe(true); 
    });

    // it contains the Header component
    it('renders Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).toBe(true); 
    });

    // it contains the Login component
    it('renders Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toBe(true); 
    });

    // it contains the Footer component
    it('renders Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Footer />)).toBe(true); 
    });
});