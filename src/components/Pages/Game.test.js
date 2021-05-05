import React from 'react';
import { shallow } from "enzyme";
import { Game } from "./Game";

describe('Test Game Page', function () {
  it('should have a header tag with gic goe!', function () {
    const wrapper = shallow(<Game/>);
    expect(wrapper.find("h1").text()).toEqual("gic GAP goe");
  });
});