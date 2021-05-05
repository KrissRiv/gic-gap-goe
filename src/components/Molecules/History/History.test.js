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
    it('Should render status game for player X', () => {
        const props = {
            status: 'Next player: X'
        }
        const wrapper = shallow(<History {...props} />);
        const firstPlayer = wrapper.find('.history').children().first().text();
        expect(firstPlayer).toEqual('Next player: X');
    });
    it('Should render status game for player O', () => {
        const props = {
            status: 'Next player: O'
        }
        const wrapper = shallow(<History {...props} />);
        const firstPlayer = wrapper.find('.history').children().first().text();
        expect(firstPlayer).toEqual('Next player: O');
    });
});