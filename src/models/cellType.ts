import { SymbolType } from './index';

export type ICell = {
  id: number;
  symbol: SymbolType;
  isEmpty: boolean;
};
