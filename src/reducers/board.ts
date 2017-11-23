import { BoardState } from '../models/boardState';
import { ICell } from '../models/index';
import { Action, handleActions } from 'redux-actions';
import { SET_SYMBOL } from '../constants/BoardActionTypes';

const initialState: BoardState = {
  cells: [...Array(9).fill(null)].map((e, i) => <ICell> {id: i + 1, symbol: '', isEmpty: true}),
  turn: 'X'
};

export default handleActions<BoardState, ICell>({
  [SET_SYMBOL]: (state: BoardState, action: Action<ICell>): BoardState => {
    const cell = action.payload!;
    
    if (state.cells[cell.id - 1].symbol === '') {
      const newCells = state.cells;
      newCells[cell.id - 1].symbol = cell.symbol;

      return {
        ...state,
        cells: newCells,
        turn: cell.symbol === 'O' ? 'X' : 'O'
      };
    }

    return state;
  }
// tslint:disable-next-line:align
}, initialState);
