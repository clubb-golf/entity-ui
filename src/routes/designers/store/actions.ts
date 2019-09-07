import { storeFetcher } from '../../../store/utils/fetcher';
import endpoints from '../../../store/utils/endpoints';
import * as actions from './constants';

export const getAllDesigners = () => {
  storeFetcher(
    {
      request: actions.ALL_DESIGNERS_REQUEST,
      response: actions.ALL_DESIGNERS_RESPONSE,
      error: actions.ALL_DESIGNERS_ERROR,
    },
    endpoints.getAllDesigners()
  );
};
