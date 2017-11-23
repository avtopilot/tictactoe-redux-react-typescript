import { BoardState } from '../models/boardState';
import { ICell } from '../models/index';
import { Action, combineReducers } from 'redux';

const initialState: BoardState = {
  board: [...Array(9).fill(null)].map((e, i) => <ICell> {id: i + 1, symbol: '', isEmpty: true})
};

const board = (state = initialState.board, action: Action): ICell[] => {
  switch (action.type) {
    case 'SET_SYMBOL':
      return state;
    default: 
      return state;
  }
};

const boardReducers = combineReducers({board});

export default boardReducers;
