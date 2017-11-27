import { BoardState } from '../models/boardState';
import { ICell } from '../models/index';
import { Action, handleActions } from 'redux-actions';
import { SET_SYMBOL } from '../constants/BoardActionTypes';

const initialState: BoardState = {
  cells: [...Array(9).fill(null)].map((e, i) => <ICell> {id: i + 1, symbol: null, isEmpty: true}),
  turn: 'X',
  winner: null
};

const calculateWinner = (squares: ICell[]) => {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a].symbol !== null && 
        squares[a].symbol === squares[b].symbol && 
        squares[a].symbol === squares[c].symbol
      ) {
      return squares[a].symbol;
    }
  }
  return null;
};

export default handleActions<BoardState, ICell>({
  [SET_SYMBOL]: (state: BoardState, action: Action<ICell>): BoardState => {
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
// tslint:disable-next-line:align
}, initialState);
