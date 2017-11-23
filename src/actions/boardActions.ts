import { SET_SYMBOL } from '../constants/BoardActionTypes';
import { createAction } from 'redux-actions';
import { ICell, SymbolType } from '../models/index';

export const setSymbol = createAction<ICell, number, SymbolType>(
  SET_SYMBOL,
  (id: number, symbol: SymbolType) => ({id: id, symbol: symbol, isEmpty: false})
);