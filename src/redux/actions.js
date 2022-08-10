import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContactAction = createAction('addContact', obj => ({
  payload: { ...obj, id: nanoid() },
}));
export const filterContactAction = createAction('filterContact');
export const delContactAction = createAction('deleteContact');
