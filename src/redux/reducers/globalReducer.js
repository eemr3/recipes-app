import { ISDONE } from '../actions/globalAction';

const INITIAL_STATE = {
  done: false,
};

export default globalReducer = (state = INITIAL_STATE, action) => {
  switch (type) {
  case 'ISDONE':
    return {
      done: action.done,
    };
  default:
    return state;
  }
};
