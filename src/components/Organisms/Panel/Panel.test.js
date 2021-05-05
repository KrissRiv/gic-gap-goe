import React from 'react'
import Panel from './Panel'
import { shallow, mount } from 'enzyme'

describe('Test Panel Molecule', function () {
    it('Should render Panel', () => {
        shallow(<Panel />);
    });
});