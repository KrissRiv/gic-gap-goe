import React from 'react'
import Chip from './Chip'
import { shallow } from 'enzyme'

describe('Test Chip Component', () => {
    it('Should render Chip', () => {
        shallow(<Chip />);
    });
    it('Should click event in Chip', () => {
        const mockCallBack = jest.fn();
        const chipButton = shallow((<Chip onClick={mockCallBack} />));
        chipButton.find('button').simulate('click');
        expect(mockCallBack).toBeCalled();
    });
});