import React from 'react';
import { shallow } from 'enzyme';
import Question from './index';
import { findByTestAttr, checkProps } from '../../../utils';

const setup = (props={}) => shallow(<Question {...props} />);

describe('Question Component', () => {
  describe('Check propTypes', () => {
    it('No warnings', () => {
      const expectedProps = {
        answerBoxProps: {
          id: "question1",
          name: "question1",
          type: "type"
        },
        question: "What is your first name?"
      };
      const propsErr = checkProps(Question, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('with props', () => {
    let component;

    beforeEach(() => {
      component = setup({
        question: "What is your first name?",
        answerBoxProps: {
          id: "question1",
          name: "question1",
          type: "type"
        },
      });
    });
    it('Should render with props without errors', () => {
      const wrapper = findByTestAttr(component,"question1");
      expect(wrapper.length).toBe(1);
    });
  });

  describe('without props', () => {
    let component;

    beforeEach(() => {
      component = setup();
    });
    it('Should not render without props', () => {
      const wrapper = findByTestAttr(component,"question1");
      expect(wrapper.length).toBe(0);
    });
  });
});