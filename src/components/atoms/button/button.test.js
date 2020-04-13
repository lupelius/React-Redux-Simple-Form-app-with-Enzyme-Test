import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils';
import Button from './index';

describe('Button component', () => {
  describe('Check proptypes', () => {
    it('Shouldnt throw warning', () => {
      const expectedProps = {
        type: 'button',
        onClick: () => {}
      }
      const propErr = checkProps(Button,expectedProps);
      expect(propErr).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        type: 'button',
        onClick: () => {}
      }
      wrapper = shallow(<Button {...props} />);
    });
    it('Should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});