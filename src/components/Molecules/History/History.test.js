import React from 'react';
import { shallow } from "enzyme";
import History from "./History";

describe('Test History Component', () => {
    it('Should render History', () => {
        shallow(<History />);
    });
});