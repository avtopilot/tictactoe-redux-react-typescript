import { Board } from '../components/Board';
import { Dispatch, connect } from 'react-redux';
import * as React from 'react';
import { BoardState } from '../models/boardState';
import { ICell } from '../models/index';

interface TicTacToeProps {
  board: ICell[];
  dispatch: Dispatch<{}>;
}

const TicTacToeBoard: React.SFC<TicTacToeProps> = ({board, dispatch}) => {
  return (
    <Board board={board}/>
  );
};

const mapStateToProps = (state: BoardState) => ({
  board: state.board
});

export default connect(mapStateToProps)(TicTacToeBoard);