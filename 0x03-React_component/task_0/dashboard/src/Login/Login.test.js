import React from "react";
import { shallow } from 'enzyme';
import Login from './Login'; 

describe('Login component', () => {
    // renders without crashing
    it('renders without crashing', () => {
        shallow(<Login />); 
    });

    // renders input tags
    it('renders two input tags', () => {
        const wrapper = shallow(<Login />);
        const inputs = wrapper.find('input');
        expect(inputs.length).toBe(2); 
    });

    // renders label tags
    it('renders two label tags', () => {
        const wrapper = shallow(<Login />);
        const labels = wrapper.find('label');
        expect(labels.length).toBe(2); 
    });
});