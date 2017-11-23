import { BoardState } from '../models/boardState';
import { ICell } from '../models/index';
import { Action, handleActions } from 'redux-actions';
import { SET_SYMBOL } from '../constants/BoardActionTypes';

const initialState: BoardState = {
  cells: [...Array(9).fill(null)].map((e, i) => <ICell> {id: i + 1, symbol: '', isEmpty: true})
};

const board = handleActions<BoardState, ICell>({
  [SET_SYMBOL]: (state: BoardState, action: Action<ICell>): BoardState => {
    return state;
  }
// tslint:disable-next-line:align
}, initialState);

export default board;
