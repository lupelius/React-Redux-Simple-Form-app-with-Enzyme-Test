import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils';
import AnswerBox from './index';

describe('Answer Box component', () => {
  describe('Check proptypes', () => {
    it('Text shouldnt throw warning', () => {
      const expectedProps = {
        id: 'box',
        name: 'box',
        type: 'text',
        onChange: () => {},
        onBlur: () => {}
      }
      const propErr = checkProps(AnswerBox,expectedProps);
      expect(propErr).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        id: 'box',
        name: 'box',
        type: 'text',
        onChange: () => {},
        onBlur: () => {}
      }
      wrapper = shallow(<AnswerBox {...props} />);
    });
    it('Should render an answer box as text input box', () => {
      const button = findByTestAttr(wrapper, 'inputComponent');
      expect(button.length).toBe(1);
    });
  });
});