import { SymbolType, ICell } from './index';

export class BoardState {
  cells: ICell[];
  turn: SymbolType;
}
