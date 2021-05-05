import React from 'react';
import { shallow } from "enzyme";
import Header from "./Header";

describe('Test Header Component', () => {
  it('should have a header tag with gic GAP goe!', async () => {
    const wrapper = await shallow(<Header />);
    expect(wrapper.find("h1").text()).toEqual("gic GAP goe");
  });
});