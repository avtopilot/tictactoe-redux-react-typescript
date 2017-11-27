import { createAction } from 'redux-actions';
import { SET_SYMBOL } from '../constants/BoardActionTypes';
import { ICell, SymbolType } from '../models/index';

export const setSymbol = createAction<ICell, number, SymbolType>(
  SET_SYMBOL,
  (id: number, symbol: SymbolType) => ({
    id,
    symbol,
  })
);
