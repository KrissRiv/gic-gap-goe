import React from 'react';
import { shallow, mount } from "enzyme";
import History from "./History";

describe('Test History Component', () => {
    it('Should render History', () => {
        shallow(<History />);
    });
    it('allows us to set props', () => {
        const wrapper = shallow(<History status='Status Prop' />);
        expect(wrapper.props().status).toEqual('Status Prop');
        
        wrapper.setProps({ status: 'Change Prop' });
        expect(wrapper.props().status).toEqual('Change Prop');
    });
});