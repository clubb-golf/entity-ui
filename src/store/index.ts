import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import allClubs, { REDUCER_NAME as allClubsReducerName } from '../routes/clubs/store/reducer';
import allDesigners, { REDUCER_NAME as allDesignersReducerName } from '../routes/designers/store/reducer';

const store = createStore(combineReducers({
  [allClubsReducerName]: allClubs,
  [allDesignersReducerName]: allDesigners,
}), devToolsEnhancer({}));

export default store;
