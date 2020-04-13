import { types } from '../../actions/types';

export const defaultState = {
  question1: {
    answer: null,
  },
  question2: {
    answer: null,
  },
  question3: {
    answer: null,
  },
  question4: {
    answer: null,
  },
};

export default (state=defaultState, action) => {
  switch(action.type) {
    case types.POST_ANSWER:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}