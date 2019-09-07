import { storeFetcher } from '../../../store/utils/fetcher';
import endpoints from '../../../store/utils/endpoints';
import * as actions from './constants';

export const getAllClubs = () => {
  console.log('hello');
  return storeFetcher(
    {
      request: actions.ALL_CLUBS_REQUEST,
      response: actions.ALL_CLUBS_RESPONSE,
      error: actions.ALL_CLUBS_ERROR,
    },
    endpoints.getAllClubs()
  );
};
