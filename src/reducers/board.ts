import { Action, handleActions } from 'redux-actions';
import { SET_SYMBOL } from '../constants/BoardActionTypes';
import { BoardState } from '../models/boardState';
import { CellModel } from '../models/index';

const initialState: BoardState = {
  cells: [...Array(9).fill(null)].map((e, i) => ({id: i + 1, symbol: null} as CellModel)),
  turn: 'X',
  winner: null
};

const calculateWinner = (squares: CellModel[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (const [a, b, c] of lines) {
    if (squares[a].symbol !== null && 
        squares[a].symbol === squares[b].symbol && 
        squares[a].symbol === squares[c].symbol
      ) {
      return squares[a].symbol;
    }
  }
  return null;
};

export default handleActions<BoardState, CellModel>({
  [SET_SYMBOL]: (state: BoardState, action: Action<CellModel>): BoardState => {
    const cell = action.payload!;
    
    if (!state.cells[cell.id - 1].symbol) {
      const newCells = state.cells;
      newCells[cell.id - 1].symbol = cell.symbol;

      return {
        ...state,
        cells: newCells,
        turn: cell.symbol === 'O' ? 'X' : 'O',
        winner: calculateWinner(newCells)
      };
    }

    return state;
  }
}, initialState);
