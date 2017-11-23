import { setSymbol } from '../actions/boardActions';
import { Board } from '../components/Board';
import { Dispatch, connect } from 'react-redux';
import * as React from 'react';
import { BoardState } from '../models/boardState';
import { ICell } from '../models/index';

interface TicTacToeProps {
  board: ICell[];
  onClick: (id: number) => { type: string; id: number };
}

const TicTacToeBoard: React.SFC<TicTacToeProps> = ({board, onClick}) => {
  return (
    <Board board={board} onClick={onClick}/>
  );
};

const mapStateToProps = (state: {board: BoardState}) => ({
  board: state.board.cells
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onClick: (id: number) => dispatch(setSymbol(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeBoard);