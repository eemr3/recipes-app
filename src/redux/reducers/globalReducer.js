import { ISDONE } from '../actions/globalAction';

const INITIAL_STATE = {
  done: false,
};

export const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ISDONE:
    return {
      ...state,
      done: action.done,
    };
  default:
    return state;
  }
};

export default globalReducer;
