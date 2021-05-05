import React from 'react'
import Panel from './Panel'
import { shallow, mount } from 'enzyme'

describe('Test Panel Molecule', function () {
    it('Should render Panel', () => {
        shallow(<Panel />);
    });
    it('Should calls onClick event on click of a table chip', () =>{
        const onClick = jest.fn();
        let chips = Array(9).fill(null);
        let moves = Array(9).fill(null);

        let wrapper = mount(<Panel 
            chips={chips}
            moves={moves}
            status='Next player: X'
            onClick={onClick} />);
        wrapper.find('button.chip').first().simulate('click');
        //wrapper.find('Child1').props().propName
        expect(onClick).toBeCalledWith(0);
    });
});