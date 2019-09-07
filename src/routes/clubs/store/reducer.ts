import { AnyAction } from 'redux';
import { BasicState } from '../../../store/models/basic-state';
import * as constants from './constants';

const initialState: BasicState = {
  loading: false,
  error: false,
  data: [],
};

const clubsReducer = (state: BasicState = initialState, action: AnyAction): BasicState => {
  switch (action.type) {
    case constants.ALL_CLUBS_REQUEST:
      return { ...state, loading: true };
    case constants.ALL_CLUBS_ERROR:
      return { ...state, error: true, loading: false };
    case constants.ALL_CLUBS_RESPONSE:
      return { ...state, loading: false, data: action.response };
    default: return state;
  }
};

export default clubsReducer;
export { REDUCER_NAME } from './constants';