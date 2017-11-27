import { Dispatch, connect } from 'react-redux';
import * as React from 'react';
import { BoardState, SymbolType, ICell } from '../../models/index';
import { Board } from '../../components/Board/index';
import { setSymbol } from '../../actions/boardActions';
import './style.css';
import { Action } from 'redux-actions';

interface TicTacToeProps {
  board: BoardState;
  onClick: (id: number, symbol: SymbolType) => Action<ICell>;
}

const TicTacToeBoard: React.SFC<TicTacToeProps> = ({board, onClick}) => {
  const isWinnerDefined = board.winner !== null;

  const boardOnClick = (id: number, symbol: SymbolType) => isWinnerDefined ? null : onClick(id, symbol);

  return (
    <div className="game">
      <Board 
        board={board.cells}
        turn={board.turn}
        onClick={boardOnClick}
      />

      <div className="game-info">
        {isWinnerDefined ? 'Winner: ' + board.winner : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state: {board: BoardState}) => ({
  board: state.board
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onClick: (id: number, symbol: SymbolType) => dispatch(setSymbol(id, symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeBoard);