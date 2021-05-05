import React from 'react'
import Table from './Table'
import {shallow, mount} from 'enzyme'

describe('Test Table Molecule', function () {
    it('Should render Table passing chipsw', () => {
        let chips = Array(9).fill(null)
        shallow(<Table chips={chips} />);
    });
});