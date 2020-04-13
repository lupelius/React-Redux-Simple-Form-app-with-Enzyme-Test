import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import {findByTestAttr} from '../../../utils';

const setup = (props={}) => shallow(<Header {...props} />);


describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component,"header");
    expect(wrapper.length).toBe(1);
  });

  it('Should have a logo', () => {
    const logo = findByTestAttr(component,"logo-svg");
    expect(logo.length).toBe(1);
  })
});