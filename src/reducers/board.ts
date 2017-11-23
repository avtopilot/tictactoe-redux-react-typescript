import { BoardState } from '../models/boardState';
import { ICell } from '../models/index';
import { Action, handleActions } from 'redux-actions';
import { SET_SYMBOL } from '../constants/BoardActionTypes';

const initialState: BoardState = {
  cells: [...Array(9).fill(null)].map((e, i) => <ICell> {id: i + 1, symbol: '', isEmpty: true})
};

export default handleActions<BoardState, ICell>({
  [SET_SYMBOL]: (state: BoardState, action: Action<ICell>): BoardState => {
    const newCells = state.cells;
    newCells[action.payload!.id - 1].symbol = 'X';
    return {
      ...state,
      cells: newCells
    };
  }
// tslint:disable-next-line:align
}, initialState);
