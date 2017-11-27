import { SymbolType } from '../types/index';
import { CellModel } from './index';

export class BoardState {
  cells: CellModel[];
  turn: SymbolType;
  winner: SymbolType;
}
