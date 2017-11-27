import { createAction } from "redux-actions";
import { SET_SYMBOL } from "../constants/BoardActionTypes";
import { CellModel } from "../models/index";
import { SymbolType } from "../types/index";

export const setSymbol = createAction<CellModel, number, SymbolType>(
  SET_SYMBOL,
  (id: number, symbol: SymbolType) => ({
    id,
    symbol
  })
);
