import store from '../';
import 'isomorphic-fetch';
import { services } from '../../utils/constants';

export interface StoreFetcherTypes {
  request: string;
  response: string;
  error: string;
}

const defaultOptions: RequestInit = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  mode: 'cors',
}

export const storeFetcher = async (types: StoreFetcherTypes, endpoint: string, options: RequestInit = defaultOptions) => {
  store.dispatch({ type: types.request });
  try {
    const response = await fetch(`${services.entityService}${endpoint}`, options);
    const json = await response.json();
    store.dispatch({ type: types.response, response: json });
  } catch (err) {
    store.dispatch({ type: types.error })
  }
}