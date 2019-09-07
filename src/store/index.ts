import { createStore, combineReducers } from 'redux';

import allClubs, { REDUCER_NAME as allClubsReducerName } from '../routes/clubs/store/reducer';

const rootReducer = combineReducers({
  [allClubsReducerName]: allClubs,
});

export default createStore(rootReducer);
