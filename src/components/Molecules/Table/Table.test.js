import React from 'react'
import Table from './Table'
import { shallow, mount } from 'enzyme'

describe('Test Table Molecule', function () {
    let chips = Array(9).fill(null)
    it('Should render Table passing chips', () => {
        shallow(<Table chips={chips} />)
    });
    it('Should calls onClick event on click of a table chip', () =>{
        const onClick = jest.fn()
        let wrapper = mount(<Table chips={chips} onClick={onClick} />)
        wrapper.find('button.chip').first().simulate('click')
        expect(onClick).toBeCalledWith(0)
    });
});