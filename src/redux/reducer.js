import { initialState } from './initial-state';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';

import { filterContactAction } from './actions';

const filterReducer = createReducer(initialState.filter, {
  [filterContactAction]: (_, action) => action.payload,
});

export const reducer = combineReducers({
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});
