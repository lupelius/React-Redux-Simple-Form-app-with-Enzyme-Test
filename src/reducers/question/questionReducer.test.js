import { types } from '../../actions/types';
import questionReducer, { defaultState } from './reducer';

describe('Question reducer', () => {
  it('Should return default state', () => {
    const newState = questionReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  it('Should return new state when it receives type', () => {
    const questions = {
      question1: {
        answer: "new answer",
      },
    };
    const newState = questionReducer(undefined, {
      type: types.POST_ANSWER,
      payload: questions
    });
    expect(newState.question1).toEqual(questions.question1);
    // No question 2 answered so answer should be same as default State
    expect(newState.question2).toEqual({answer: null});
  });
});