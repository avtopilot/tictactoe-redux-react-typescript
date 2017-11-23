import { chunk } from '../../utils/array';
import * as React from 'react';
import { Cell } from '../Cell/index';
import './style.css';
import { ICell } from '../../models/index';

interface BoardProps {
  board: ICell[];
}

const boardRow = (rowCells: ICell[], key: number) => {
  const renderSquare = (cell: ICell) => <Cell value={cell.symbol} key={cell.id}/>;

  return (
    <div className="board-row" key={key}>
      {rowCells.map(r => renderSquare(r))}
    </div>
    );
};

export const Board: React.SFC<BoardProps> = ({board}) => {
  // tslint:disable-next-line:no-console
  console.log(board);
  const boardChunk = chunk(board || [], 3);
  return (
    <div>
      {boardChunk.map((b, i) => (
        boardRow(b, i)
      ))}
    </div>
  );
};
