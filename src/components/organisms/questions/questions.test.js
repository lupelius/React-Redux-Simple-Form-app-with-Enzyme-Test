import React from 'react';
import { shallow } from 'enzyme';
import Questions from './index';
import { findByTestAttr, testStore } from '../../../utils';

const setup = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Questions store={store} />).childAt(0).dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('Questions Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      questionReducer: [{
        question: 0,
        answer: 'answer 1',
      },]
    }
    wrapper = setup(initialState);
  });

  it('Should render without errors', () => {
    const component = findByTestAttr(wrapper,"all-questions");
    expect(component.length).toBe(1);
  });
});