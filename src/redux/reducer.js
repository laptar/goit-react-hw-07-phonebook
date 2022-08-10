import { initialState } from './initial-state';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  filterContactAction,
  addContactAction,
  delContactAction,
} from './actions';

const itemReducer = createReducer(initialState.items, {
  [addContactAction]: (state, action) => [action.payload, ...state],
  [delContactAction]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filterReducer = createReducer(initialState.filter, {
  [filterContactAction]: (_, action) => action.payload,
});

export const reducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persiReducer = persistReducer(persistConfig, reducer);
