import { SET_SYMBOL } from '../constants/BoardActionTypes';
import { createAction } from 'redux-actions';
import { ICell } from '../models/index';

export const setSymbol = createAction<ICell, number>(
  SET_SYMBOL,
  (id: number) => ({id: id, symbol: '', isEmpty: false})
);