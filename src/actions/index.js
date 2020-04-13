import { types } from './types';

export const answerQuestion = (data) => (dispatch) => {
  dispatch({
    type: types.POST_ANSWER,
    payload: data
  })
}