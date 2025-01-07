import React from "react";
import { shallow } from "enzyme";
import Header from './Header'; // Import your Header component here

describe('Header component', () => {
    // renders without crashing
    it('renders without crashing', () => {
        shallow(<Header />); 
    });

    // renders image tag
    it('renders the image tag', () => {
        const wrapper = shallow(<Header />);
        const image = wrapper.find('img');
        expect(image).toExist(); 
    });

    // renders header tag
    it('renders the h1 tag', () => {
        const wrapper = shallow(<Header />);
        const header = wrapper.find('h1');
        expect(header).toExist(); 
    });
});