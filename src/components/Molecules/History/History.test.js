import React from 'react';
import { shallow, mount } from "enzyme";
import History from "./History";

describe('Test History Component', () => {
    it('Should render History', () => {
        shallow(<History />);
    });
    it('Should render with set props', () => {
        const wrapper = shallow(<History status='Status Prop' />);
        expect(wrapper.instance().props.status).toEqual('Status Prop');
        
        wrapper.setProps({ status: 'Change Prop' });
        expect(wrapper.instance().props.status).toEqual('Change Prop');
    });
});