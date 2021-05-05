import React from 'react'
import Chip from './Chip'
import { shallow } from 'enzyme'

describe('Test Chip Component', () => {
    it('Should render Chip', () => {
        shallow(<Chip />);
    });
});