import React from "react";
import { shallow } from "enzyme";
import Footer from './Footer'; // Import your Footer component here

describe('Footer component', () => {
    // renders without crashing
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    // renders text configuration
    it('renders the text configuration', () => {
        const wrapper = shallow(<Footer />);
        const copyrightText = wrapper.contains('Copyright'); 
        expect(copyrightText).toBe(true); 
    });
});