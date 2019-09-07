import { createStore, combineReducers } from 'redux';

import allClubs, { REDUCER_NAME as allClubsReducerName } from '../routes/clubs/store/reducer';
import allDesigners, { REDUCER_NAME as allDesignersReducerName } from '../routes/designers/store/reducer';

const store = createStore(combineReducers({
  [allClubsReducerName]: allClubs,
  [allDesignersReducerName]: allDesigners,
}));

export default store;